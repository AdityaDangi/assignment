import React, { useState } from "react";
import axios from "axios";
import "./FeedbackForm.css"; // Import the CSS file

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/feedback", formData);
      alert("Feedback submitted!");
      setFormData({ name: "", email: "", category: "", message: "" });
    } catch (error) {
      alert("Something went wrong! Please check your connection or server.");
      console.error(error);
    }
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2>Submit Feedback</h2>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value="">Choose Category</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Bug">Bug</option>
        <option value="Feature">Feature</option>
      </select>

      <textarea
        name="message"
        placeholder="Write your feedback here..."
        value={formData.message}
        onChange={handleChange}
        required
        rows="5"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
