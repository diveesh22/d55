import React from 'react';
import './Page.css';

const Dashboard = () => {
  const content = {
    essay: `
      UNC Charlotte recently achieved a record-breaking enrollment, welcoming its largest-ever class of first-time college students, contributing to a total enrollment of over 30,000 students. The university also experienced significant growth in its graduate and international student populations, showcasing its global appeal and commitment to advanced education.

      In terms of academic excellence, UNC Charlotte climbed to its highest national ranking ever, reaching No. 152 among public and private universities. Its nursing program also saw a dramatic rise, now ranked No. 54 nationally. The university's research achievements have hit an all-time high, with research funding awards exceeding $73 million, reflecting its focus on innovation and discovery.

      Furthermore, the athletic department announced a $60 million expansion of Jerry Richardson Stadium, aimed at enhancing the fan experience and increasing capacity. These developments underscore UNC Charlotte's dedication to fostering a dynamic environment for education, research, and extracurricular activities.

      As UNC Charlotte continues to grow, it is setting a benchmark for excellence and innovation in higher education, drawing national and international attention.
    `,
    references: [
      'https://inside.charlotte.edu/news-features/2023-09-12/unc-charlotte-breaks-records',
      'https://spectrumlocalnews.com/nc/charlotte/news/2024/09/25/unc-charlotte-high-rankings',
      'https://inside.charlotte.edu/news-features/2023-08-18/research-funding-record',
    ],
    techStack: [
      'React.js - Frontend',
      'Node.js - Backend',
      'Express.js - Server Framework',
      'MySQL - Database',
      'Chart.js - Data Visualization',
      'Axios - API Requests',
      'CSS - Styling',
      'JWT - Authentication',
    ],
  };

  return (
    <div>
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-essay">
        <p>{content.essay}</p>
      </div>
      <div className="dashboard-references">
        <h2>References</h2>
        <ul>
          {content.references.map((ref, index) => (
            <li key={index}>
              <a href={ref} target="_blank" rel="noopener noreferrer">
                {ref}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="dashboard-techstack">
        <h2>Tech Stack</h2>
        <ul>
          {content.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
