// src/components/HeatMap.jsx
export default function HeatMap({ risks }) {
  const counts = { Low: {}, Medium: {}, High: {} };
  ['Low', 'Medium', 'High'].forEach(l => ['Low', 'Medium', 'High'].forEach(i => counts[l][i] = 0));
  risks.forEach(r => counts[r.likelihood][r.impact]++);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Risk Heat Map</h2>
      <table className="table-auto border-collapse border">
        <thead>
          <tr><th></th><th>Low</th><th>Medium</th><th>High</th></tr>
        </thead>
        <tbody>
          {['Low', 'Medium', 'High'].map(l => (
            <tr key={l}>
              <td className="border p-2 font-bold">{l}</td>
              {['Low', 'Medium', 'High'].map(i => (
                <td key={i} className="border p-2">{counts[l][i]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
