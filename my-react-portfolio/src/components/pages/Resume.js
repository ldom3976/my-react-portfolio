import React from "react";

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
    textAlign: "center"
  },
  h4: {
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

      <h4 style={styles.h4}>Technical Skills Learned through Coding Bootcamp:</h4>
      <p>
        <h5>Front-End:</h5>
        
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
        
      </p>

      <p>
        <h5>Back-End:</h5>
        
          <li>MySQL</li>
          <li>MongoDB & Mongoose</li>
          <li>Express</li>
          <li>Node</li>
          <li>APIs</li>
        
      </p>
      
     </div>
   );
 }