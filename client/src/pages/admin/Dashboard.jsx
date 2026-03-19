import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Settings, Trash2, Edit, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const events = [
    { id: 1, title: 'Web3 Smart India', date: 'Oct 14, 2026', totalTickets: 500, soldTickets: 342, status: 'Active' },
    { id: 2, title: 'UI/UX Design Bootcamp', date: 'Nov 02, 2026', totalTickets: 200, soldTickets: 200, status: 'Sold Out' },
    { id: 3, title: 'CloudNative Workshop', date: 'Dec 15, 2026', totalTickets: 150, soldTickets: 45, status: 'Active' },
  ];

  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Manage Events</h1>
          <p style={{ color: 'var(--text-muted)' }}>Overview of all upcoming and past events.</p>
        </div>
        <Button onClick={() => navigate('/admin/create-event')}>Create New Event</Button>
      </div>

      <Card style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: 'var(--surface-light)', borderBottom: '1px solid var(--border)' }}>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: '500', color: 'var(--text-muted)' }}>Event Name</th>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: '500', color: 'var(--text-muted)' }}>Date</th>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: '500', color: 'var(--text-muted)' }}>Registrations</th>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: '500', color: 'var(--text-muted)' }}>Status</th>
              <th style={{ padding: '1.25rem 1.5rem', fontWeight: '500', color: 'var(--text-muted)', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, idx) => (
              <tr key={event.id} style={{ borderBottom: idx !== events.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <td style={{ padding: '1.25rem 1.5rem', fontWeight: '500' }}>{event.title}</td>
                <td style={{ padding: '1.25rem 1.5rem', color: 'var(--text-muted)' }}>{event.date}</td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ flex: 1, background: 'var(--surface-light)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${(event.soldTickets / event.totalTickets) * 100}%`, height: '100%', background: 'var(--primary)' }}></div>
                    </div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', minWidth: '60px' }}>{event.soldTickets} / {event.totalTickets}</span>
                  </div>
                </td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '1rem', 
                    fontSize: '0.75rem', 
                    fontWeight: 'bold',
                    background: event.status === 'Active' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                    color: event.status === 'Active' ? 'var(--success)' : 'var(--error)'
                  }}>
                    {event.status}
                  </span>
                </td>
                <td style={{ padding: '1.25rem 1.5rem', textAlign: 'right' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.5rem' }} title="View Details">
                      <ExternalLink size={18} />
                    </button>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.5rem' }} title="Edit Event">
                      <Edit size={18} />
                    </button>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--error)', cursor: 'pointer', padding: '0.5rem' }} title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
