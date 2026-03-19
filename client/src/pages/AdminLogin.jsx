import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { ShieldCheck, User } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { loginAdmin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    const result = await loginAdmin(email, password);
    
    setIsLoading(false);
    
    if (result.success) {
      navigate('/admin/dashboard');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* User Login Link Top Left */}
      <button 
        onClick={() => navigate('/')}
        style={{ position: 'absolute', top: '2rem', left: '2rem', cursor: 'pointer' }}
        className="btn btn-outline"
      >
        <User size={18} /> Student Login
      </button>

      <Card className="w-full max-w-lg p-10" style={{ width: '100%', maxWidth: '900px', display: 'flex', overflow: 'hidden', padding: 0 }}>
        <div style={{ flex: 1, padding: '3rem' }}>
          <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ShieldCheck size={32} color="var(--primary)" />
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>CampusConnect+</h1>
          </div>
          
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Admin Login</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Access your administrator dashboard.</p>
          
          {error && (
             <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--error)', color: 'var(--error)', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                {error}
             </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col fade-in">
             <Input 
               label="Email Address" 
               id="email" 
               type="email" 
               placeholder="admin@college.edu"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required 
             />
             
             <Input 
               label="Password" 
               id="password" 
               type="password" 
               placeholder="••••••••"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required 
             />
             
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', marginTop: '0.5rem' }}>
               <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
                 <input type="checkbox" style={{ accentColor: 'var(--primary)' }} />
                 Remember me
               </label>
               <a href="#" style={{ color: 'var(--secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>Forgot password?</a>
             </div>
             
             <Button type="submit" disabled={isLoading} style={{ width: '100%', padding: '0.875rem' }}>
               {isLoading ? 'Authenticating...' : 'Sign In to Admin Portal'}
             </Button>
          </form>
        </div>
        
        {/* Decorative Right Side for Admin Login */}
        <div className="hidden md:flex" style={{ flex: 0.8, background: 'var(--surface-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid var(--border)' }}>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ background: 'rgba(157, 78, 221, 0.1)', padding: '2rem', borderRadius: '50%', marginBottom: '1.5rem', display: 'inline-flex' }}>
              <ShieldCheck size={64} color="var(--primary)" />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Secure Access</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Manage events, verify tickets, and oversee student attendance.</p>
          </div>
        </div>
      </Card>
      
    </div>
  );
}
