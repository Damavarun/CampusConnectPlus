import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { CalendarDays, MapPin, Clock, Tag } from 'lucide-react';

export default function EventRegistration() {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app we'd fetch event by ID. This is mock data
  const event = {
    id,
    title: 'MILAN 2026',
    category: 'Cultural Fest',
    date: 'Jan 20-22, 2027',
    time: '09:00 AM - 10:00 PM',
    type: 'Offline',
    venue: 'Main Campus Grounds',
    price: '₹499.00',
    description: 'The biggest annual cultural festival featuring 50+ events, celebrity performances, and workshops across 3 continuous days of non-stop excitement.',
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate successful registration
    navigate('/tickets');
  };

  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <div>
          <button 
            onClick={() => navigate(-1)} 
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: 'var(--text-muted)', 
              cursor: 'pointer',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            ← Back to Events
          </button>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>{event.title}</h1>
          <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CalendarDays size={16} /> {event.date}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={16} /> {event.time}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> {event.venue} ({event.type})</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)' }}><Tag size={16} /> {event.category}</span>
          </div>
        </div>
        <div style={{ background: 'var(--surface-light)', padding: '1.5rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid var(--primary)' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Ticket Price</span>
          <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>{event.price}</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem' }}>
        {/* Left Col - Details */}
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>About Event</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
            {event.description}
          </p>
          
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Host Information</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ width: '50px', height: '50px', background: 'var(--surface-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>SC</span>
               </div>
               <div>
                 <h4 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Student Council</h4>
                 <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Official Organizer • 5k+ Followers</span>
               </div>
            </div>
          </div>
        </div>

        {/* Right Col - Form */}
        <div>
          <Card>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Register for Event</h3>
            <form onSubmit={handleRegister} className="flex flex-col">
               <Input label="Full Name" id="name" defaultValue="Varun Datta" required />
               <Input label="Email Address" type="email" id="email" defaultValue="varun@college.edu" required />
               
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <Input label="College ID / Roll Number" id="rollno" required />
                  <Input label="Department" id="department" required />
               </div>
               
               <Input label="Phone Number" id="phone" type="tel" required />

               <div style={{ background: 'var(--surface)', padding: '1rem', borderRadius: '0.5rem', border: '1px outset var(--border)', marginTop: '1rem', marginBottom: '2rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                   <span style={{ color: 'var(--text-muted)' }}>Ticket</span>
                   <span>1x General Entry</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '0.5rem', marginTop: '0.5rem', fontWeight: 'bold' }}>
                   <span>Total</span>
                   <span style={{ color: 'var(--secondary)' }}>{event.price}</span>
                 </div>
               </div>
               
               <Button type="submit" style={{ width: '100%' }}>Proceed to Pay {event.price}</Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
