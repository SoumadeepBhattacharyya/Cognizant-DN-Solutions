const CourseDetails = ({ show }) => {
  return (
    show && (
      <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
        <h2>🎓 Course Details</h2>
        <p>Course Name: React Development</p>
        <p>Duration: 6 weeks</p>
      </div>
    )
  );
};

export default CourseDetails;
