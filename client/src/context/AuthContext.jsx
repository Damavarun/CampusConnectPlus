import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);
const API_URL = 'http://localhost:5000/api';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved session on mount
    const savedUser = localStorage.getItem('campusconnect_user');
    const token = localStorage.getItem('campusconnect_token');
    
    if (savedUser && token) {
      setUser(JSON.parse(savedUser));
      // Set default auth header for future axios requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    setLoading(false);
  }, []);

  const registerStudent = async (name, registrationNumber, password) => {
    try {
      const response = await axios.post(`${API_URL}/auth/student/register`, {
        name,
        registrationNumber,
        password
      });
      
      const { user: userData, token } = response.data;
      
      setUser(userData);
      localStorage.setItem('campusconnect_user', JSON.stringify(userData));
      localStorage.setItem('campusconnect_token', token);
      
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return { success: true };
    } catch (error) {
       return { 
        success: false, 
        error: error.response?.data?.message || 'Registration failed. Please try again.' 
      };
    }
  };

  const loginStudent = async (registrationNumber, password) => {
    try {
      const response = await axios.post(`${API_URL}/auth/student/login`, {
        registrationNumber,
        password
      });
      
      const { user: userData, token } = response.data;
      
      setUser(userData);
      localStorage.setItem('campusconnect_user', JSON.stringify(userData));
      localStorage.setItem('campusconnect_token', token);
      
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Login failed. Please try again.' 
      };
    }
  };

  const loginAdmin = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/auth/admin/login`, {
        email,
        password
      });
      
      const { user: userData, token } = response.data;
      
      setUser(userData);
      localStorage.setItem('campusconnect_user', JSON.stringify(userData));
      localStorage.setItem('campusconnect_token', token);
      
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return { success: true };
    } catch (error) {
       return { 
        success: false, 
        error: error.response?.data?.message || 'Admin login failed.' 
      };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('campusconnect_user');
    localStorage.removeItem('campusconnect_token');
    delete axios.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ user, loading, registerStudent, loginStudent, loginAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
