
import React, { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const [post, setPost] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('/api/cms-update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, author })
      });
      const data = await response.json();
      if (response.ok) {
        setPost(data);
        setTitle('');
        setContent('');
        setAuthor('');
      } else {
        setError(data.error || 'Failed to create post');
      }
    } catch (err) {
      setError('Error creating post: ' + err.message);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Create a New Blog Post</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ padding: '0.5rem', fontSize: '1rem', minHeight: '100px' }}
        ></textarea>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <button type="submit" style={{ padding: '0.75rem', fontSize: '1rem', cursor: 'pointer' }}>
          Submit Post
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      {post && (
        <div
          style={{
            border: '1px solid #000',
            padding: '1rem',
            marginTop: '2rem',
            borderRadius: '5px',
            background: 'yellow',
            color: 'black'
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p style={{ fontStyle: 'italic' }}>By: {post.author}</p>
        </div>
      )}
    </div>
  );
};

export default CreatePost;

