import React from "react";
import ElishaBallard from "../../img/elishaballard.jpg";

const styles = {
  elishaballard: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: '200px',
    maxWidth: '200px',
    borderRadius: '25%',
    border: '3px solid #d29099',
    filter: 'opacity(100%)',
    cursor: 'default',
  },
  h2: {
    textAlign: 'center',
  },
  space: {
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
  }
};

 export default function About() {
   return (
     <div style={styles.space}>
       <h2 style={styles.h2}>About Me</h2>
       <div>
        <img style={styles.elishaballard} src={ElishaBallard} alt="Elisha Ballard" />
       </div>
       <p>
         Hello! I am a UNC Chapel Hill Bootcamp student who's currently learning full-stack web development. Currently 
         I work as a contracted corporate and leisure reservation specialist. I am an ambitious and self-motivated
         individual who is able to adapt quickly and thrive in fast-paced, deadline driven environments. I work closely with clients
         to provide personalized experiences, and am able to work efficiently individually as well as part of a team.
        As a coding bootcamp student, I am constantly learning and improving my skills and collaborating with my peers.
       </p>
     </div>
   );
 }