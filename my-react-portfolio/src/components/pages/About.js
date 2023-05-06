import React from 'react';
import ElishaBallard from "../../img/elishaballard.jpg";

 export default function About() {
   return (
     <div>
       <h2>About Me</h2>
       <div>
        <img src={ElishaBallard} alt="Elisha Ballard" />
       </div>
       <p>
         I am a UNC Chapel Hill Bootcamp student who's currently learning full-stack web development. Cuurently 
         I work as a contracted corporate and leisure reservation specialist. I am an ambitious and self-motivated
         individual who is able to adapt quickly and thrive in fast-paced, deadline driven environments. I work closely with clients
         to provide personalized experiences, and am able to work efficiently individually and as part of a team.
        As a coding bootcamp student, I am constantly learning and improving my skills and collaborating with my peers.
       </p>
     </div>
   );
 }