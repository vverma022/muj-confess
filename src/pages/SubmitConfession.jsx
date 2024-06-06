import { useState } from 'react';

const SubmitConfession = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call backend API to submit confession
    fetch('/api/confessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, text }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success
        console.log('Confession submitted:', data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error submitting confession:', error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl  font-bold">Submit a Confession</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <label className="block">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block">Text</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitConfession;
