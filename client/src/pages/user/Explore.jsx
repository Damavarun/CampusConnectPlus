import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Search, CalendarDays, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Explore() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = ['All', 'Technical', 'Cultural', 'Workshops', 'Seminars'];

  const allEvents = [
    { id: 1, title: 'Web3 Smart India', category: 'Technical', date: 'Oct 14, 2026', type: 'Offline', price: '₹499', image: 'https://images.unsplash.com/photo-1540575467063-1d24508277fe?auto=format&fit=crop&q=80&w=400' },
    { id: 2, title: 'UI/UX Design Bootcamp', category: 'Workshops', date: 'Nov 02, 2026', type: 'Online - Live', price: 'Free', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400' },
    { id: 3, title: 'CloudNative Workshop', category: 'Technical', date: 'Dec 15, 2026', type: 'Offline', price: '₹299', image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=400' },
    { id: 4, title: 'Annual Cultural Fest - Milan', category: 'Cultural', date: 'Jan 20, 2027', type: 'Offline', price: '₹999', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400' },
    { id: 5, title: 'Startup Pitch Night', category: 'Seminars', date: 'Feb 10, 2027', type: 'Offline', price: 'Free', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=400' },
    { id: 6, title: 'AI & Future Robotics', category: 'Technical', date: 'Mar 05, 2027', type: 'Online - Live', price: '₹199', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400' },
  ];

  const filteredEvents = activeTab === 'All' ? allEvents : allEvents.filter(e => e.category === activeTab);

  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Explore Events & Workshops</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Discover and register for the best events happening on campus.</p>

      {/* Search and Filters */}
      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem', alignItems: 'center' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            placeholder="Search events by name, category, or host..." 
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
        <Button className="btn-primary" style={{ height: '3.5rem', padding: '0 2rem' }}>Search</Button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '2rem',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
              whiteSpace: 'nowrap',
              background: activeTab === tab ? 'var(--primary)' : 'var(--surface-light)',
              color: activeTab === tab ? 'white' : 'var(--text-muted)',
              transition: 'all 0.2s',
              boxShadow: activeTab === tab ? '0 4px 15px rgba(157, 78, 221, 0.3)' : 'none'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
        {filteredEvents.map(event => (
          <Card key={event.id} hoverEffect style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '180px', width: '100%', overflow: 'hidden', position: 'relative' }}>
              <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
                {event.price}
              </div>
            </div>
            
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: '1.3' }}>{event.title}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CalendarDays size={16} /> {event.date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> {event.type}</span>
              </div>
              
              <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
                <Button variant="secondary" style={{ flex: 1 }} onClick={() => navigate(`/register-event/${event.id}`)}>View Details</Button>
                <Button style={{ flex: 1 }} onClick={() => navigate(`/register-event/${event.id}`)}>Register</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
