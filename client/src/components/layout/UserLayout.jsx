import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAuth } from '../../context/AuthContext';

export default function UserLayout() {
  const { user } = useAuth();
  
  // Default to placeholder if not logged in (for safety)
  const displayName = user?.name || 'Guest';
  const initials = displayName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'GT';

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: '260px', padding: '2rem 3rem', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Welcome, {displayName} 👋</span>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
              {initials}
            </div>
          </div>
        </div>
        
        <main style={{ flex: 1 }} className="fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
