import React from "react";
import SocialNetwork from "../../img/socialnetapi.png";
import NoteTaker from "../../img/notetakerscreen.png";
import TeamGenerator from "../../img/teamscreen.png";
import WorkSched from "../../img/wrkdsc.jpeg";
import WeatherDash from "../../img/weather-dashboard.png";
import MapsRUs from "../../img/mapsrusscreen.png";

import "../../style/portfolio.css";

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

      <div className="container">
      <div className="row justify-content-center">

          <section className="card col-sm-3 p-0 m-2">
              <a
              href="https://drive.google.com/file/d/1pj2PvN6maE19_QxRJ4hgmLa_ZlPXVRqT/view"
              target="blank"
            >
              <img
                className="card-img-top"
                src={SocialNetwork}
                alt="screenshot of Insomnia software running the social network API."
              />
              <header>
                <h3 style={styles.header}>Social Network API</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/ldom3976/social-network-api"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This command line application is a social network api back-end database
              that utilizes mongoose, express, and moment to view, create, update, and delete
              data from the database using Insomnia or MongoDB Compass.
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://sheltered-falls-58607.herokuapp.com/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={NoteTaker}
                alt="screenshot depicting homepage of note taker application"
              />
              <header>
                <h3 style={styles.header}>Note Taker</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/ldom3976/note-taker"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This is a note taker application that can be used to write and save notes. 
              This app uses Express.js to write and save data on a JSON file.
            </p>
            </section>

        </div>

        <div className="row justify-content-center">

        <section className="card col-sm-3 p-0 m-2">
           <a
              href="https://drive.google.com/file/d/1lZVenNcLemc65knBVA8d2fkTOH3GbkOu/view"
              target="blank"
            >
            <img
                className="card-img-top"
                src={TeamGenerator}
                alt="screenshot depicting homepage of generated team members"
              />
              <header>
                <h3 style={styles.header}>Team Generator</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/ldom3976/myteam-generator"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
            This team profile generator creates a webpage that displays a team's information 
            for easy access to employee's emails, github profiles and other useful info.
            </p>
        </section>

        <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://ldom3976.github.io/mod-work-day-planner/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={WorkSched}
                alt="screenshot of work day scheduler app homepage showing what times are available to be scheduled"
              />
              <header>
                <h3 style={styles.header}>Work Day Scheduler</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/ldom3976/mod-work-day-planner"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This is a simple scheduler application that allows the user to add and save events in 
              each hour of a standard work day. This application features updated HTML and CSS 
              powered by JQuery.
            </p>
        </section>

        <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://ldom3976.github.io/weather-dashboard"
              target="blank"
            >
              <img
                className="card-img-top"
                src={WeatherDash}
                alt="screenshot of weather dashboard homepage showing five day forecast for a city"
              />
              <header>
                <h3 style={styles.header}>Weather Dashboard</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/ldom3976/weather-dashboard"
              target="blank"
            >
            GitHub Repository
            </a>
            <p style={styles.space}>
            This application allows the user to search for any city's 5 day weather
            forecast. This utilizes HTML, CSS, JavaScript and Open Weather API.
            </p>
        </section>

        <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://guarded-reef-93768.herokuapp.com"
              target="blank"
            >
              <img
                className="card-img-top"
                src={MapsRUs}
                alt="screenshot of MapsRUs application login page to access travel journal"
              />
              <header>
                <h3 style={styles.header}>MapsR-US</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/tmcash/maps-r-us"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This is a group project created in UNC Chapel Hill's Coding Bootcamp. 
              On the front-end, the app can be accessed at Heroku. On the back-end, this 
              application utilizes express, handlebars, mySql and sequelize. This app
              allows a user to enter a city they want to visit and select which activities
              interest them to create a stored itinerary that can be recalled while travelling
              and at a later time.
            </p>
        </section>
      </div>
     </div>
    </div>
   );
 };