import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './Footer';
import '../style/style.css';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
    }
};

const handlePageChange = (page) => setCurrentPage(page);

return (
  <div className='body'>
    <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
    <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
  </div>
);
