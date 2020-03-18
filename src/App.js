import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/sally.jpg"}
            alt="it's a image of Ilana as a stand-in for Sally"
            style={{ width: "250px", height: "350px" }}
          />
        </div>
      </div>
      <header>
        <h1> My Resume</h1>
        <h2>Sally Student</h2>
        <address>
          Email:{" "}
          <a
            href="mailto:sally.student@gmail.com?subject=YOU'RE HIRED"
            target="_blank"
          >
            sally.student@gmail.com
          </a>
        </address>
        <address>Cell Phone: 1+(123)-456-789</address>
      </header>
      <main>
        <section class="education">
          <h3>Education:</h3>
          <p>
            {" "}
            Random University of Randomvile,{" "}
            <address>From Augest 20XX to May 20XX </address>
          </p>
          <ul>
            <li>
              {" "}
              Bachelors in Computer Science with a Minor in Communications{" "}
            </li>
          </ul>
        </section>
        <section class="employment history">
          <h3>Employment History:</h3>
          <p>
            {" "}
            <h4>Protect Inc.</h4> Data Analyst:{" "}
            <address>From Sep. 20XX to March 20XX </address>
          </p>
          <ul>
            <li>
              Collected and stored data on sales numbers, market research,
              logistics, linguistics, or other behaviors.
            </li>
          </ul>
          <p>
            {" "}
            <h4>Security Software Systems (S.S.S)</h4> Softare Engineer:{" "}
            <address> From April 20XX to Aug. 20XX </address>
          </p>
          <ul>
            <li>
              Determined operational feasibility by evaluating analysis, problem
              definition, requirements, solution development, and proposed
              solutions. Documents and demonstrates solutions by developing
              documentation, flowcharts, layouts, diagrams, charts-*/, code
              comments and clear code.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
