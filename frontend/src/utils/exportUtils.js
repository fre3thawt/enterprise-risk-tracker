// src/utils/exportUtils.js
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function exportToExcel(risks) {
  const worksheet = XLSX.utils.json_to_sheet(risks);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Risks');
  XLSX.writeFile(workbook, 'Enterprise_Risks.xlsx');
}

export function exportToPDF(risks) {
  const doc = new jsPDF();
  const tableColumn = ['Title', 'Owner', 'Category', 'Likelihood', 'Impact', 'Status'];
  const tableRows = risks.map(r => [r.title, r.owner, r.category, r.likelihood, r.impact, r.status]);
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  doc.save('Enterprise_Risks.pdf');
}
