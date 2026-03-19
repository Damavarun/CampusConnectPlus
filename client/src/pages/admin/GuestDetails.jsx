import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Search, CheckCircle, XCircle } from 'lucide-react';

export default function GuestDetails() {
  const [search, setSearch] = useState('');
  
  const guests = [
    { id: 'TKT-8932', name: 'Varun Datta', email: 'varun@college.edu', event: 'Web3 Smart India', status: 'Checked In', rollNo: 'CS2026-1042' },
    { id: 'TKT-9011', name: 'Sneha Patel', email: 'sneha@college.edu', event: 'Web3 Smart India', status: 'Pending', rollNo: 'EC2026-2098' },
    { id: 'TKT-9104', name: 'Rahul Sharma', email: 'rahul@college.edu', event: 'UI/UX Bootcamp', status: 'Pending', rollNo: 'ME2025-4122' },
    { id: 'TKT-9200', name: 'Priya Singh', email: 'priya@college.edu', event: 'CloudNative Workshop', status: 'Checked In', rollNo: 'IT2027-3001' },
  ];

  const filteredGuests = guests.filter(g => 
    g.name.toLowerCase().includes(search.toLowerCase()) || 
    g.id.toLowerCase().includes(search.toLowerCase()) ||
    g.rollNo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fade-in">
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Guest Details</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Search and manage registrations for all events.</p>

      <div style={{ display: 'flex', marginBottom: '2rem', position: 'relative', maxWidth: '600px' }}>
        <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
        <input 
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, Ticket ID, or Roll Number..." 
          style={{ 
            width: '100%', 
            background: 'var(--surface-light)', 
            border: '1px solid var(--border)', 
            color: 'white', 
            padding: '1rem 1rem 1rem 3rem', 
            borderRadius: '0.75rem',
            outline: 'none'
          }} 
          onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
        />
      </div>

      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: 'var(--surface-light)', borderBottom: '1px solid var(--border)' }}>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: '500', color: 'var(--text-muted)' }}>Ticket ID</th>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: '500', color: 'var(--text-muted)' }}>Guest Info</th>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: '500', color: 'var(--text-muted)' }}>Event</th>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: '500', color: 'var(--text-muted)' }}>Status</th>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: '500', color: 'var(--text-muted)', textAlign: 'right' }}>Check In</th>
            </tr>
          </thead>
          <tbody>
            {filteredGuests.map((guest, idx) => (
              <tr key={guest.id} style={{ borderBottom: idx !== filteredGuests.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <td style={{ padding: '1.25rem 1.5rem', fontWeight: '600', fontFamily: 'monospace' }}>{guest.id}</td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>{guest.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{guest.rollNo}</div>
                </td>
                <td style={{ padding: '1.25rem 1.5rem', color: 'var(--text-muted)' }}>{guest.event}</td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '1rem', 
                    fontSize: '0.75rem', 
                    fontWeight: 'bold',
                    background: guest.status === 'Checked In' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                    color: guest.status === 'Checked In' ? 'var(--success)' : '#f59e0b'
                  }}>
                    {guest.status}
                  </span>
                </td>
                <td style={{ padding: '1.25rem 1.5rem', textAlign: 'right' }}>
                  {guest.status === 'Pending' ? (
                    <button style={{ 
                      background: 'rgba(16, 185, 129, 0.1)', 
                      border: '1px solid var(--success)', 
                      color: 'var(--success)', 
                      cursor: 'pointer', 
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontWeight: '500'
                    }}>
                      <CheckCircle size={16} /> Mark Present
                    </button>
                  ) : (
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Verified ✓</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredGuests.length === 0 && (
          <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            No guests found matching your search.
          </div>
        )}
      </Card>
    </div>
  );
}
