import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Ticket as TicketIcon, Calendar, Clock, MapPin } from 'lucide-react';

export default function Tickets() {
  const tickets = [
    { id: 'TKT-8932', event: 'Web3 Smart India', date: 'Oct 14, 2026', time: '10:00 AM', venue: 'Auditorium 1', type: 'General Admission', status: 'Upcoming' },
    { id: 'TKT-9104', event: 'UI/UX Design Bootcamp', date: 'Nov 02, 2026', time: '02:00 PM', venue: 'Online Zoom', type: 'Participant', status: 'Upcoming' },
  ];

  return (
    <div className="fade-in">
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>My Tickets</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Your event passes and registration details.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {tickets.map(ticket => (
          <Card key={ticket.id} hoverEffect style={{ padding: 0, overflow: 'hidden', display: 'flex' }}>
            {/* Left Color Bar */}
            <div style={{ width: '12px', background: 'linear-gradient(to bottom, var(--primary), var(--secondary))' }}></div>
            
            {/* Ticket Content */}
            <div style={{ padding: '2rem', flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: 'var(--success)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
                    {ticket.status}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>ID: {ticket.id}</span>
                </div>
                
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{ticket.event}</h2>
                
                <div style={{ display: 'flex', gap: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} /> {ticket.date}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={16} /> {ticket.time}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> {ticket.venue}</span>
                </div>
              </div>

              {/* QR Code Placeholder / Action */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', borderLeft: '1px dashed var(--border)', paddingLeft: '3rem' }}>
                <div style={{ width: '100px', height: '100px', background: 'white', padding: '0.5rem', borderRadius: '0.5rem' }}>
                   {/* Fake QR code using css data uri or just a block */}
                   <div style={{ width: '100%', height: '100%', background: `repeating-linear-gradient(45deg, #000 0, #000 10px, #fff 10px, #fff 20px)`, opacity: 0.8 }}></div>
                </div>
                <Button variant="outline" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>Download PDF</Button>
              </div>
            </div>
          </Card>
        ))}

        {tickets.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
            <TicketIcon size={48} style={{ opacity: 0.5, margin: '0 auto 1rem' }} />
            <p>You haven't registered for any events yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
