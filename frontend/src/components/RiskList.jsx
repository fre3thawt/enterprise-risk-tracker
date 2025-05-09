// src/components/RiskList.jsx
export default function RiskList({ risks }) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">All Risks</h2>
      {risks.map(risk => (
        <div key={risk._id} className="border p-4 mb-2 rounded shadow">
          <h3 className="font-bold">{risk.title}</h3>
          <p>{risk.description}</p>
          <p><strong>Owner:</strong> {risk.owner}</p>
          <p><strong>Category:</strong> {risk.category}</p>
          <p><strong>Likelihood:</strong> {risk.likelihood}, <strong>Impact:</strong> {risk.impact}</p>
          <p><strong>Status:</strong> {risk.status}</p>
        </div>
      ))}
    </div>
  );
}
