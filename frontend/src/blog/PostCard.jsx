
// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const PostCard = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { post } = location.state || {};

//   if (!post) {
//     return (
//       <div style={{ padding: '1rem' }}>
//         {/* <h1>No post data available.</h1> */}
//         {/* <button onClick={() => navigate('/')}>Go Back</button> */}
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: '1rem', maxWidth: '600px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
//       <h1>Post Created</h1>
//       <div
//         style={{
//           border: '1px solid #000',
//           padding: '1rem',
//           borderRadius: '5px',
//           background: 'yellow',
//           color: 'black',
//           marginTop: '1rem',
//         }}
//       >
//         <h2>{post.title}</h2>
//         <p>{post.content}</p>
//         <p style={{ fontStyle: 'italic' }}>By: {post.author}</p>
//       </div>
//       {/* <button onClick={() => navigate('/')} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
//         Create Another Post
//       </button> */}
//     </div>
//   );
// };

// export default PostCard;
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PostCard.css'; // Import the CSS file

const PostCard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { post } = location.state || {};

  if (!post) {
    return (
      <div className="container">
       
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Post</h1>
      <div className="card">
        <h2 className="title">{post.title}</h2>
        <p className="content">{post.content}</p>
        <p className="author">By: {post.author}</p>
      </div>
     
    </div>
  );
};

export default PostCard;
