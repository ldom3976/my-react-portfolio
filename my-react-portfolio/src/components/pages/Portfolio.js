import React from "react";
import SocialNetwork from "../../img/socialnetapi.png";
import NoteTaker from "../../img/notetakerscreen.png";
import TeamGenerator from "../../img/teamscreen.png";
import WorkSched from "../../img/wrkdsc.jpeg";
import WeatherDash from "../../img/weather-dashboard.png";
import MapsRUs from "../../img/mapsrusscreen.png";

const styles = {
  h2: {
    textAlign: "center",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  header: {
    textAlign: "center",
    paddingBottom: "0.15rem",
  },
  repo: {
    textAlign: "center",
    color: "#FF7875FF",
    paddingBottom: "0.15rem",
  },
};

 export default function Portfolio() {
   return (

    <div>
      <h2 style={styles.h2}>Portfolio</h2>
      
        

    <h3>Social Network API</h3>
    <p>social network api description</p>

    <div>

    </div>

    <h3>Note Taker</h3>
    <p>note taker description</p>

    <div>

    </div>

    <h3>Team Generator</h3>
    <p>team generator description</p>

    <div>

    </div>

    <h3>Work Day Scheduler</h3>
    <p>work day scheduler description</p>

    <div>

    </div>

    <h3>Weather Dashboard</h3>
    <p>weather dashboard description</p>

    <div>

    </div>

    <h3>Maps R Us</h3>
    <p>mapsrus description</p>
     </div>
   );
 }