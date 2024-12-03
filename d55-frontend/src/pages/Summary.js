import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';
import './Page.css';


ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Summary = () => {
  const [enrollmentData, setEnrollmentData] = useState(null);
  const [diversityData, setDiversityData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchEnrollmentData = async () => {
      const response = await axios.get('http://localhost:3000/enrollment', {
        headers: { Authorization: token },
      });
      const data = response.data;

      setEnrollmentData({
        labels: data.map((item) => item.year),
        datasets: [
          {
            label: 'Undergrad Students',
            data: data.map((item) => item.undergrad_students),
            // backgroundColor: 'rgba(75,192,192,0.6)',
            backgroundColor: 'rgba(75,192,192,0.6)',
          },
          {
            label: 'Grad Students',
            data: data.map((item) => item.grad_students),
            backgroundColor: 'rgba(54,162,235,0.6)',
          },
        ],
      });

      setDiversityData({
        labels: ['White', 'Black', 'Hispanic', 'Asian', 'Other'],
        datasets: [
          {
            data: [
              data[3].white_percentage,
              data[3].black_percentage,
              data[3].hispanic_percentage,
              data[3].asian_percentage,
              data[3].other_percentage,
            ],
            backgroundColor: [
              'rgba(255,99,132,0.6)',
              'rgba(54,162,235,0.6)',
              'rgba(255,206,86,0.6)',
              'rgba(75,192,192,0.6)',
              'rgba(153,102,255,0.6)',
            ],
          },
        ],
      });
    };

    fetchEnrollmentData();
  }, []);

  return (
    <div className="page-container">
      <h1>Summary</h1>
      
      {/* Chart 1: Enrollment Data */}
      <div className="chart-container">
        <div className="chart">
          {enrollmentData ? <Bar data={enrollmentData} /> : <p>Loading enrollment data...</p>}
        </div>
        <div className="description">
          <h2>Enrollment Data</h2>
          <p>
            This chart shows the year-wise enrollment trends of undergraduate and graduate students
            at UNCC. It highlights the growth in student population over the years.
          </p>
        </div>
      </div>

      {/* Chart 2: Diversity Data */}
      <div className="chart-container reverse">
        <div className="description">
          <h2>Diversity Data</h2>
          <p>
            This chart illustrates the diversity percentages of students enrolled at UNCC, categorized by
            ethnicity. It demonstrates the inclusive environment fostered by the university.
          </p>
        </div>
        <div className="chart">
          {diversityData ? <Pie data={diversityData} /> : <p>Loading diversity data...</p>}
        </div>
      </div>
    </div>
  );
};

export default Summary;
