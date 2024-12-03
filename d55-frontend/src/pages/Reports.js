import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement,PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import axios from 'axios';
import './Page.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement,  PointElement, Tooltip, Legend);

const Reports = () => {
  const [rankingsData, setRankingsData] = useState(null);
  const [researchData, setResearchData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchRankingsData = async () => {
      const response = await axios.get('http://localhost:3000/rankings', {
        headers: { Authorization: token },
      });
      const data = response.data;

      setRankingsData({
        labels: data.map((item) => item.year),
        datasets: [
          {
            label: 'Overall Ranking',
            data: data.map((item) => item.overall_ranking),
            backgroundColor: 'rgba(75,192,192,0.6)',
          },
          {
            label: 'Nursing Ranking',
            data: data.map((item) => item.nursing_ranking),
            backgroundColor: 'rgba(255,99,132,0.6)',
          },
        ],
      });
    };

    const fetchResearchData = async () => {
      const response = await axios.get('http://localhost:3000/research', {
        headers: { Authorization: token },
      });
      const data = response.data;

      setResearchData({
        labels: data.map((item) => item.year),
        datasets: [
          {
            label: 'Research Funding ($M)',
            data: data.map((item) => item.funding_amount),
            backgroundColor: 'rgba(54,162,235,0.6)',
          },
        ],
      });
    };

    fetchRankingsData();
    fetchResearchData();
  }, []);

  return (
    <div className="page-container">
      <h1>Reports</h1>

      {/* Rankings Chart */}
      <div className="chart-container">
        <div className="chart">
          {rankingsData ? <Bar data={rankingsData} /> : <p>Loading rankings data...</p>}
        </div>
        <div className="description">
          <h2>Rankings Data</h2>
          <p>
            This chart showcases the trends in overall and nursing rankings for the institution
            over the years. It highlights significant achievements in academic performance.
          </p>
        </div>
      </div>

      {/* Research Chart */}
      <div className="chart-container reverse">
        <div className="description">
          <h2>Research Funding</h2>
          <p>
            This chart displays the growth of research funding over the years. It emphasizes the
            university's focus on innovation and its impact on global academic contributions.
          </p>
        </div>
        <div className="chart">
          {researchData ? <Line data={researchData} /> : <p>Loading research data...</p>}
        </div>
      </div>
    </div>
  );
};

export default Reports;
