const BlogDetails = ({ isVisible }) => {
  return (
    <>
      {isVisible ? (
        <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
          <h2>📝 Blog Details</h2>
          <p>Title: React Basics</p>
          <p>Author: John Doe</p>
        </div>
      ) : null}
    </>
  );
};

export default BlogDetails;
