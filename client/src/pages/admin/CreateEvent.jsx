import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { UploadCloud } from 'lucide-react';

export default function CreateEvent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Event creation simulated!');
  };

  return (
    <div className="fade-in max-w-4xl">
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Create New Event</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Add a new event or workshop to the platform.</p>

      <Card>
        <form onSubmit={handleSubmit} className="flex flex-col">
          
          {/* Image Upload Area */}
          <div style={{ 
            width: '100%', 
            height: '200px', 
            background: 'var(--surface-light)', 
            border: '2px dashed var(--border)', 
            borderRadius: '1rem', 
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)'; }}
          onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            <UploadCloud size={48} style={{ marginBottom: '1rem' }} />
            <span style={{ fontWeight: '500' }}>Click or drag to upload amazing event banner</span>
            <span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Recommended size: 1200 x 600px</span>
          </div>

          <Input label="Event Title" id="title" placeholder="e.g. Annual Tech Symposium" required />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <Input label="Category" id="category" placeholder="e.g. Workshop" required />
            <Input label="Event Type" id="type" placeholder="Offline / Online" required />
            
            <Input label="Date" id="date" type="date" required />
            <Input label="Time" id="time" type="time" required />
            
            <Input label="Venue / Link" id="venue" placeholder="Main Auditorium" required />
            <Input label="Price (₹)" id="price" type="number" placeholder="499" required />
          </div>
          
          <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: '500', marginBottom: '0.5rem' }}>Description</label>
            <textarea 
              rows="5"
              style={{
                width: '100%',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--text-main)',
                padding: '1rem',
                borderRadius: '8px',
                fontFamily: 'inherit',
                fontSize: '0.95rem',
                outline: 'none',
                resize: 'vertical'
              }}
              placeholder="Describe what the event is about..."
              required
            ></textarea>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <Button type="button" variant="outline">Discard</Button>
            <Button type="submit">Publish Event</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
