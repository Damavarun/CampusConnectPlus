import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Award, Download } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    { id: 'CERT-10293', title: 'React Performance Workshop', date: 'Sep 15, 2026', issueBy: 'Frontend Masters Club' },
    { id: 'CERT-99211', title: 'Hackathon 2026 - Runner Up', date: 'Aug 20, 2026', issueBy: 'Computer Science Dept' },
  ];

  return (
    <div className="fade-in">
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>My Certificates</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Achievements and participation proof from past events.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
        {certificates.map(cert => (
          <Card key={cert.id} hoverEffect style={{ padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
            {/* Watermark icon */}
            <Award size={120} style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.05, color: 'var(--primary)' }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
               <div style={{ padding: '1rem', background: 'rgba(157, 78, 221, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                 <Award size={28} />
               </div>
               <div>
                 <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Certificate ID</span>
                 <h3 style={{ fontSize: '1rem', fontFamily: 'monospace' }}>{cert.id}</h3>
               </div>
            </div>

            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{cert.title}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Issued by {cert.issueBy} on {cert.date}</p>

            <Button variant="outline" className="mt-auto" style={{ width: '100%' }}>
              <Download size={18} /> Download High-Res
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
