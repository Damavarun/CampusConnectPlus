import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Mail, Phone, MapPin, Edit2, ShieldCheck } from 'lucide-react';

export default function Profile() {
  const { user } = useAuth();
  
  // Fallback data if user is somehow null (though shouldn't happen inside UserLayout)
  const displayUser = user || {
    name: 'Guest User',
    email: 'guest@college.edu',
    phone: 'N/A',
    college: 'N/A',
    department: 'N/A',
    rollNo: 'N/A',
    joinedDate: 'N/A'
  };

  const initials = displayUser.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'GU';

  return (
    <div className="fade-in max-w-4xl">
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>My Profile</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>View and modify your personal information.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        {/* Profile Card */}
        <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2.5rem 2rem' }}>
          <div style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '50%', 
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '3rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem',
            boxShadow: '0 8px 32px rgba(157, 78, 221, 0.4)'
          }}>
            {initials}
          </div>
          
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{displayUser.name}</h2>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Student</span>
          
          <Button variant="outline" style={{ width: '100%' }}><Edit2 size={16} /> Edit Profile</Button>
          
          <div style={{ marginTop: '2.5rem', width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Mail size={16} /> {displayUser.email}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Phone size={16} /> {displayUser.phone}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><MapPin size={16} /> {displayUser.college}</div>
          </div>
        </Card>

        {/* Details & Security */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <Card>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>Academic Details</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Department</span>
                <span style={{ fontWeight: '500' }}>{displayUser.department}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Roll Number</span>
                <span style={{ fontWeight: '500' }}>{displayUser.rollNo}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Member Since</span>
                <span style={{ fontWeight: '500' }}>{displayUser.joinedDate}</span>
              </div>
            </div>
          </Card>

          <Card>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>
              <ShieldCheck size={24} color="var(--primary)" />
              <h3 style={{ fontSize: '1.25rem' }}>Security</h3>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'var(--surface)', borderRadius: '0.5rem' }}>
              <div>
                <h4 style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Password</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Last changed 3 months ago</p>
              </div>
              <Button variant="outline">Update</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
