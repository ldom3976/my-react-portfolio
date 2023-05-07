import React from 'react';
import Github from "../img/github.png";
import StackOverflow from "../img/stackoverflow.png";

const styles = {
  icons: {
    borderRadius: '25%',
    filter: 'opacity(100%)',
    margin: '5px',
    width: '5%'
  },
};

 function Footer() {
   return (
    <footer className="text-center">
      <div className="container p-4">
        <section className="mb-4">

       <a href="https://github.com/ldom3976" target="blank">
       <img style={styles.icons} src={Github} alt="github icon" />
        </a>

        <a href="https://stackoverflow.com/users/21844526/" target="blank">
       <img style={styles.icons} src={StackOverflow} alt="stack overflow icon" />
        </a>

          </section>
          </div>
          </footer>
       );
    };

    export default Footer;