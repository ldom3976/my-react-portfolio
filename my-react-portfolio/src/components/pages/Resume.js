import React from 'react';

const styles = {
  h2: {
    textAlign: "center",
  },
  link: {
    color: "#FF7875FF",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  h3: {
    paddingTop: "0.75rem",
  },
};

 export default function Resume() {
   return (
    <div style={styles.space}>
       <h2 style={styles.h2}>Resume</h2>
       <p>
         My Resume.
       </p>

      <h3 style={styles.h3}>Technical Skills Learned through Coding Bootcamp</h3>
      <p>
        <h4>Front-End</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
        </ul>
      </p>
      <p>
        <h4>Back-End</h4>
        <ul>
          <li>MySQL</li>
          <li>MongoDB & Mongoose</li>
          <li>Express</li>
          <li>Node</li>
          <li>APIs</li>
        </ul>
      </p>
      
     </div>
   );
 }