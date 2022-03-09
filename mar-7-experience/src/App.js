import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./App.css";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1> Loading...</h1>
      </div>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <main className="experience">
      <section className="title">
        <h1 className="title-name">Experience</h1>
        <div className="underline"></div>
      </section>
      <div className="body-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                className={`company-btn ${index === value && "active-btn"}`}
                key={item.id}
                onClick={()=>setValue(index)}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <div className="exp-container">
          <h3>{title}</h3>
          <h4 className="exp-com">{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((item, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="job-icon" />
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </div>
      <button type="button" className="btn">
        More info
      </button>
    </main>
  );
}

export default App;
