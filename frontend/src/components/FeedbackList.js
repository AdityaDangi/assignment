import React, {  useState, useCallback } from "react";
import axios from "axios";

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  // const fetchFeedback = useCallback(async () => {
  //   const res = await axios.get("http://localhost:5000/feedback", {
  //     params: { category, sortBy },
  //   });
  //   setFeedbacks(res.data);
  // }, [category, sortBy]);

  // useEffect(() => {
  //   fetchFeedback();
  // }, [fetchFeedback]);
const fetchFeedback = useCallback(async () => {
  try {
    const res = await axios.get("http://localhost:5000/feedback", {
      params: { category, sortBy },
    });
    setFeedbacks(res.data);
  } catch (error) {
    console.error("Network or backend error:", error.message);
    alert("Could not fetch feedback. Please check if server is running.");
  }
}, [category, sortBy]);
  return (
    <div>
      <h2>All Feedback</h2>

      <label>Filter by Category: </label>
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="">All</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Bug">Bug</option>
        <option value="Feature">Feature</option>
      </select>

      <label style={{ marginLeft: "10px" }}>Sort by: </label>
      <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
        <option value="">Newest</option>
        <option value="name">Name</option>
        <option value="createdAt">Date</option>
      </select>

      <ul>
        {feedbacks.map((f) => (
          <li key={f._id}>
            <strong>{f.name}</strong> ({f.email})<br />
            <em>{f.category}</em><br />
            {f.message}<br />
            <small>{new Date(f.createdAt).toLocaleString()}</small>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackList;
