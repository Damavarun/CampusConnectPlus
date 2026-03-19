import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

/**
 * @route POST /api/auth/student/register
 * @desc Register a new student natively into MongoDB
 */
router.post('/student/register', async (req, res) => {
  try {
    const { name, registrationNumber, password } = req.body;

    if (!name || !registrationNumber || !password) {
      return res.status(400).json({ message: 'Name, registration number, and password are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ registrationNumber });
    if (existingUser) {
      return res.status(400).json({ message: 'Registration number is already registered' });
    }

    // Hash the password securely
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new student user
    const newUser = new User({
      name,
      registrationNumber,
      password: hashedPassword,
      role: 'student',
      // Optional defaults that can be updated in profile later
      email: `${registrationNumber.toLowerCase()}@college.edu` 
    });

    await newUser.save();

    // Issue JWT token immediately upon registration 
    const token = jwt.sign(
      { userId: newUser._id, role: 'student', name: newUser.name },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '24h' }
    );

    res.status(201).json({
      message: 'Student registration successful',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        role: newUser.role,
        registrationNumber: newUser.registrationNumber
      }
    });

  } catch (error) {
    console.error('Student Registration Error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});


/**
 * @route POST /api/auth/student/login
 * @desc Authenticate a student via Native MongoDB check
 */
router.post('/student/login', async (req, res) => {
  try {
    const { registrationNumber, password } = req.body;

    if (!registrationNumber || !password) {
      return res.status(400).json({ message: 'Registration number and password are required' });
    }

    // 1. Find user in the database
    const user = await User.findOne({ registrationNumber, role: 'student' });
    if (!user) {
      return res.status(401).json({ message: 'Invalid Registration Number or Password' });
    }

    // 2. Verify native password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid Registration Number or Password' });
    }

    // 3. Issue JWT 
    const token = jwt.sign(
      { userId: user._id, role: 'student', name: user.name },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '24h' }
    );

    res.status(200).json({
      message: 'Student authentication successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        registrationNumber: user.registrationNumber
      }
    });

  } catch (error) {
    console.error('Student Login Error:', error);
    res.status(500).json({ message: 'Server error during student authentication' });
  }
});

/**
 * @route POST /api/auth/admin/login
 * @desc Authenticate an administrator via local DB
 */
router.post('/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const adminUser = await User.findOne({ email, role: 'admin' });
    if (!adminUser) {
      return res.status(401).json({ message: 'Invalid admin credentials' });
    }

    const isMatch = await bcrypt.compare(password, adminUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid admin credentials' });
    }

    const token = jwt.sign(
      { userId: adminUser._id, email: adminUser.email, role: 'admin', name: adminUser.name },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '24h' }
    );

    res.status(200).json({
      message: 'Admin authentication successful',
      token,
      user: {
        id: adminUser._id,
        name: adminUser.name,
        email: adminUser.email,
        role: adminUser.role
      }
    });

  } catch (error) {
    console.error('Admin Login Error:', error);
    res.status(500).json({ message: 'Server error during admin authentication' });
  }
});


/**
 * @route POST /api/auth/admin/setup
 * @desc ONE-TIME endpoint to create the first admin. 
 * Remove or restrict this in production!
 */
router.post('/admin/setup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if an admin already exists to prevent open registration
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
       return res.status(403).json({ message: 'Admin setup already completed.' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    
    const newAdmin = new User({
      name,
      email,
      password: hashedPassword,
      role: 'admin'
    });

    await newAdmin.save();
    
    res.status(201).json({ message: 'Admin account created successfully' });
  } catch (error) {
    console.error('Admin Setup Error:', error);
    res.status(500).json({ message: 'Server error during admin setup' });
  }
});

export default router;
