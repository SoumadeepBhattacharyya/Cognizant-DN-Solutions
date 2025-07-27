// CohortDetails.jsx
import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ name, duration, mentor, status }) => {
  const statusStyle = {
    color: status === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={statusStyle}>Cohort Status: {status}</h3>
      <dl>
        <dt>Name:</dt>
        <dd>{name}</dd>

        <dt>Duration:</dt>
        <dd>{duration}</dd>

        <dt>Mentor:</dt>
        <dd>{mentor}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
