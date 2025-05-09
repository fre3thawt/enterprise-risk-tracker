// src/App.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import RiskForm from './components/RiskForm';
import RiskList from './components/RiskList';
import HeatMap from './components/HeatMap';
import { exportToExcel, exportToPDF } from './utils/exportUtils';

function App() {
  const [risks, setRisks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/risks').then(res => setRisks(res.data));
  }, []);

  const addRisk = (risk) => {
    axios.post('http://localhost:5000/risks', risk).then(res => {
      setRisks([...risks, res.data]);
      logAuditTrail('CREATE', res.data);
    });
  };

  const logAuditTrail = (action, risk) => {
    axios.post('http://localhost:5000/audit-trail', {
      action,
      riskId: risk._id,
      timestamp: new Date(),
      description: `${action} risk: ${risk.title}`
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Enterprise Risk Register</h1>
      <div className="flex space-x-4 mb-6">
        <button onClick={() => exportToExcel(risks)} className="bg-green-500 text-white px-4 py-2 rounded">Export to Excel</button>
        <button onClick={() => exportToPDF(risks)} className="bg-red-500 text-white px-4 py-2 rounded">Export to PDF</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RiskForm onSubmit={addRisk} />
        <HeatMap risks={risks} />
      </div>
      <RiskList risks={risks} />
    </div>
  );
}

export default App;
