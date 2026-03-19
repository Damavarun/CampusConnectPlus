import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Compass, Ticket, User, Award, LogOut } from 'lucide-react';

export default function Sidebar() {
  const navigate = useNavigate();
  
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Explore', path: '/explore', icon: <Compass size={20} /> },
    { name: 'Tickets', path: '/tickets', icon: <Ticket size={20} /> },
    { name: 'Certificates', path: '/certificates', icon: <Award size={20} /> },
    { name: 'Profile', path: '/profile', icon: <User size={20} /> },
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
        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
          C+
        </div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '-0.5px' }}>CampusConnect+</h2>
      </div>

      <div style={{ padding: '0 1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-primary/20 text-white font-medium' : 'text-text-muted hover:bg-surface-light hover:text-white'}`
            }
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              transition: 'all 0.2s',
              background: isActive ? 'rgba(157, 78, 221, 0.15)' : 'transparent',
              color: isActive ? 'white' : 'var(--text-muted)',
              borderLeft: isActive ? '3px solid var(--primary)' : '3px solid transparent'
            })}
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </div>

      <div style={{ padding: '2rem 1rem' }}>
        <button 
          onClick={() => navigate('/')}
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
