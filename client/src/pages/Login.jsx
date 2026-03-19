import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { CalendarDays, GraduationCap, LayoutDashboard } from 'lucide-react';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { loginStudent, registerStudent } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    let result;
    
    // We reuse the email state var for "Registration Number" conceptually in the UI
    if (isLogin) {
      result = await loginStudent(email, password);
    } else {
      result = await registerStudent(name, email, password);
    }
    
    setIsLoading(false);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen flex" style={{ minHeight: '100vh', display: 'flex' }}>
      {/* Left side banner - matching Figma purple theme */}
      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 p-12" 
           style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white', textAlign: 'center' }}>
          CampusConnect+
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', textAlign: 'center', maxWidth: '400px', marginBottom: '3rem' }}>
          Welcome to CampusConnect+. Your central hub for campus events & workshops.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
             <CalendarDays size={48} color="white" />
             <span style={{ fontWeight: '500' }}>Manage Events</span>
          </div>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
             <GraduationCap size={48} color="white" />
             <span style={{ fontWeight: '500' }}>Student Portal</span>
          </div>
        </div>
      </div>

      {/* Right side login form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        
        {/* Admin Login Link Top Right */}
        <button 
          onClick={() => navigate('/admin/login')}
          style={{ position: 'absolute', top: '2rem', right: '2rem', cursor: 'pointer' }}
          className="btn btn-outline"
        >
          <LayoutDashboard size={18} /> Admin Login
        </button>

        <Card className="w-full max-w-md" style={{ width: '100%', maxWidth: '450px' }}>
          <form onSubmit={handleSubmit} className="flex flex-col fade-in">
             <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
               <div style={{ background: 'var(--surface-light)', borderRadius: '2rem', display: 'inline-flex', padding: '0.25rem' }}>
                  <button 
                    type="button"
                    onClick={() => { setIsLogin(true); setError(''); }}
                    style={{ 
                      padding: '0.5rem 1.5rem', 
                      borderRadius: '1.5rem', 
                      border: 'none', 
                      cursor: 'pointer',
                      fontWeight: '500',
                      background: isLogin ? 'var(--primary)' : 'transparent',
                      color: isLogin ? 'white' : 'var(--text-muted)',
                      transition: 'all 0.2s'
                    }}>
                    Login
                  </button>
                  <button 
                    type="button"
                    onClick={() => { setIsLogin(false); setError(''); }}
                    style={{ 
                      padding: '0.5rem 1.5rem', 
                      borderRadius: '1.5rem', 
                      border: 'none', 
                      cursor: 'pointer',
                      fontWeight: '500',
                      background: !isLogin ? 'var(--primary)' : 'transparent',
                      color: !isLogin ? 'white' : 'var(--text-muted)',
                      transition: 'all 0.2s'
                    }}>
                    Register
                  </button>
               </div>
             </div>

             <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', textAlign: 'center' }}>
               {isLogin ? 'Welcome Back!' : 'Create an Account'}
             </h2>

             {error && (
               <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--error)', color: 'var(--error)', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                 {error}
               </div>
             )}

             {!isLogin && (
               <Input 
                 label="Full Name" 
                 id="name" 
                 placeholder="Enter full name"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 required 
               />
             )}
             
             <Input 
               label="Registration Number" 
               id="email" 
               type="text" 
               placeholder="e.g. AP20110010000"
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

             {isLogin && (
               <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
                 <a href="#" style={{ color: 'var(--secondary)', fontSize: '0.875rem', textDecoration: 'none' }}>Forgot password?</a>
               </div>
             )}
             
             <Button type="submit" disabled={isLoading} style={{ width: '100%', marginTop: !isLogin ? '1.5rem' : '0' }}>
               {isLoading ? 'Authenticating...' : (isLogin ? 'Login' : 'Join CampusConnect+')}
             </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
