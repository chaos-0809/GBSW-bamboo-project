import "./components.css";
const Viewer = () => {
  return (
    <div className="viewer-container">
      <div className="post-box">
        <header className="post-header">
          <h2 className="post-title">Title of the Post</h2>
          <span className="post-id">ID: #12345</span>
        </header>
        <div className="post-meta">
          <p className="post-date">작성일: 2024-08-21</p>
          <p className="post-author">작성자: John Doe</p>
        </div>
        <div className="post-content">
          <p>
            This is the content of the post. It should provide detailed
            information on the topic discussed.
          </p>
        </div>
        <footer className="post-footer">
          <nav className="post-comments">This is Comments section.</nav>
        </footer>
      </div>
    </div>
  );
};
export default Viewer;
