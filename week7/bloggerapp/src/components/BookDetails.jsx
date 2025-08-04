const BookDetails = ({ show }) => {
  if (!show) return null; // Conditional rendering using if

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      <h2>📚 Book Details</h2>
      <p>Title: The Alchemist</p>
      <p>Author: Paulo Coelho</p>
    </div>
  );
};

export default BookDetails;
