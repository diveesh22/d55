import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/summary" style={styles.navLink}>Summary</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/reports" style={styles.navLink}>Reports</Link>
        </li>
        <li style={styles.navItem}>
          <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '20px',
  },
  navItem: {
    display: 'inline',
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
  },
  logoutButton: {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default Navbar;
