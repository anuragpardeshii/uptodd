import React, { useState } from 'react';

const CommentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [comment, setComment] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, website, comment, saveInfo });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Leave a Comment</h2>
      <p>Your email address will not be published. Required fields are marked *</p>
      <textarea
        placeholder="Type here.."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <div>
        <input
          type="text"
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div>
        <input
          type="checkbox"
          checked={saveInfo}
          onChange={(e) => setSaveInfo(e.target.checked)}
        />
        <label>Save my name, email, and website in this browser for the next time I comment.</label>
      </div>
      <button type="submit">POST COMMENT »</button>
    </form>
  );
};

export default CommentForm;
