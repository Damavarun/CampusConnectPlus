import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { CalendarDays, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  
  const stats = [
    { label: 'Registered Events', value: '12' },
    { label: 'Upcoming', value: '03' },
    { label: 'Past Events', value: '05' },
    { label: 'Certificates', value: '08' },
  ];

  const suggestedEvents = [
    { id: 1, title: 'Web3 Smart India', category: 'Technical Seminars', date: 'Oct 14, 2026', type: 'Offline', price: '₹499', image: 'https://images.unsplash.com/photo-1540575467063-1d24508277fe?auto=format&fit=crop&q=80&w=400' },
    { id: 2, title: 'UI/UX Design Bootcamp', category: 'Workshop', date: 'Nov 02, 2026', type: 'Online - Live', price: 'Free', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400' },
    { id: 3, title: 'CloudNative Workshop', category: 'Hands-on Lab', date: 'Dec 15, 2026', type: 'Offline', price: '₹299', image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Dashboard</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Overview of your events and activities.</p>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        {stats.map(stat => (
          <Card key={stat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem' }}>{stat.value}</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>{stat.label}</span>
          </Card>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Suggested Events</h2>
        <Button variant="secondary" onClick={() => navigate('/explore')}>View All</Button>
      </div>

      {/* Events Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
        {suggestedEvents.map(event => (
          <Card key={event.id} hoverEffect style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '160px', width: '100%', overflow: 'hidden' }}>
              <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', background: 'rgba(157, 78, 221, 0.2)', color: 'var(--secondary)', borderRadius: '1rem', alignSelf: 'flex-start', marginBottom: '1rem', fontWeight: '600' }}>
                {event.category}
              </span>
              
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: '1.3' }}>{event.title}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CalendarDays size={16} /> {event.date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> {event.type}</span>
              </div>
              
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{event.price}</span>
                <Button onClick={() => navigate(`/register-event/${event.id}`)}>Register</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
