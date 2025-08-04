import { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [selected, setSelected] = useState("book");

  const renderComponent = () => {
    // Conditional rendering using switch
    switch (selected) {
      case "book":
        return <BookDetails show={true} />;
      case "blog":
        return <BlogDetails isVisible={true} />;
      case "course":
        return <CourseDetails show={true} />;
      default:
        return <p>Select a component to view details.</p>;
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>📖 Blogger App</h1>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setSelected("book")}>Show Book</button>
        <button onClick={() => setSelected("blog")}>Show Blog</button>
        <button onClick={() => setSelected("course")}>Show Course</button>
      </div>

      {renderComponent()}
    </div>
  );
}

export default App;
