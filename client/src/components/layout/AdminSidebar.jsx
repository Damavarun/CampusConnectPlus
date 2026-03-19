import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, Users, Settings, LogOut } from 'lucide-react';

export default function AdminSidebar() {
  const navigate = useNavigate();
  
  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Create Event', path: '/admin/create-event', icon: <PlusCircle size={20} /> },
    { name: 'Guest Details', path: '/admin/guests', icon: <Users size={20} /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div style={{ 
      width: '260px', 
      height: '100vh', 
      background: 'var(--surface)', 
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      left: 0,
      top: 0
    }}>
      <div style={{ padding: '2rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
          A+
        </div>
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '-0.5px', lineHeight: '1.1' }}>CampusConnect+</h2>
          <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '600' }}>ADMIN PORTAL</span>
        </div>
      </div>

      <div style={{ padding: '0 1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              transition: 'all 0.2s',
              background: isActive ? 'var(--primary)' : 'transparent',
              color: isActive ? 'white' : 'var(--text-muted)',
              fontWeight: isActive ? '500' : '400'
            })}
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </div>

      <div style={{ padding: '2rem 1rem' }}>
        <button 
          onClick={() => navigate('/admin/login')}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            padding: '0.75rem 1rem', 
            width: '100%', 
            background: 'transparent', 
            border: 'none', 
            color: 'var(--text-muted)', 
            cursor: 'pointer',
            borderRadius: '0.5rem',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => { e.currentTarget.style.color = '#ef4444'; e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)' }}
          onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent' }}
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
}
