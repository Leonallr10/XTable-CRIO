import { useState } from 'react'
import './App.css'

function App() {
  // Initial data as specified in requirements
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ];

  const [data, setData] = useState(initialData);

  // Sort by Date function
  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      // First sort by date (latest first)
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (dateA.getTime() !== dateB.getTime()) {
        return dateB.getTime() - dateA.getTime(); // Latest dates first
      }

      // If dates are same, sort by views (higher first)
      return b.views - a.views;
    });

    setData(sortedData);
  };

  // Sort by Views function
  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      // First sort by views (higher first)
      if (a.views !== b.views) {
        return b.views - a.views; // Higher views first
      }

      // If views are same, sort by date (latest first)
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    setData(sortedData);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>

      <div>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
