import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false, // Students might just use registrationNumber, admins use email
    lowercase: true,
  },
  password: {
    type: String,
    required: true, // Now required for everyone because we are storing it natively
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'admin'],
    default: 'student',
  },
  
  // -- Student Specific Details --
  registrationNumber: {
    type: String,
    sparse: true, // Allows null/undefined for admins while keeping uniqueness for students
  },
  program: {
    type: String,
  },
  department: {
    type: String,
  },
  section: {
    type: String,
  },
  classroom: {
    type: String,
  },
  phone: {
    type: String,
  },
}, { timestamps: true });

// Ensure uniqueness where applicable without failing when the other field is missing
userSchema.index({ email: 1 }, { unique: true, partialFilterExpression: { email: { $exists: true, $type: "string", $ne: "" } } });
userSchema.index({ registrationNumber: 1 }, { unique: true, partialFilterExpression: { registrationNumber: { $exists: true, $type: "string", $ne: "" } } });

export default mongoose.model('User', userSchema);
