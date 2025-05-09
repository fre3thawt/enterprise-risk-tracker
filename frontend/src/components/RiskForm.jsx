// src/components/RiskForm.jsx
import { useState } from 'react';

export default function RiskForm({ onSubmit }) {
  const [form, setForm] = useState({
    title: '', description: '', category: 'Operational',
    likelihood: 'Medium', impact: 'Medium', status: 'Open', owner: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ ...form, title: '', description: '', owner: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="title" value={form.title} onChange={handleChange} placeholder="Risk Title" className="w-full border p-2" required />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full border p-2" />
      <input name="owner" value={form.owner} onChange={handleChange} placeholder="Risk Owner" className="w-full border p-2" />
      <select name="category" onChange={handleChange} className="w-full border p-2">{['Strategic', 'Compliance', 'Operational', 'Financial', 'Reputational', 'Cybersecurity', 'Other'].map(c => <option key={c}>{c}</option>)}</select>
      <select name="likelihood" onChange={handleChange} className="w-full border p-2">{['Low', 'Medium', 'High'].map(l => <option key={l}>{l}</option>)}</select>
      <select name="impact" onChange={handleChange} className="w-full border p-2">{['Low', 'Medium', 'High'].map(i => <option key={i}>{i}</option>)}</select>
      <select name="status" onChange={handleChange} className="w-full border p-2">{['Open', 'Monitoring', 'Mitigated', 'Closed'].map(s => <option key={s}>{s}</option>)}</select>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit Risk</button>
    </form>
  );
}
