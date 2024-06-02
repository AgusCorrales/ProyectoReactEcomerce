import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="giphy-container">
          <iframe 
            src="https://giphy.com/embed/gHWT7cA7rRxwagVsPa" 
            width="480" 
            height="271" 
            frameBorder="0" 
            className="giphy-embed" 
            allowFullScreen>
          </iframe>
          <Link to="product">
            <div data-tooltip="Price: $550" className="button">
              <div className="button-wrapper">
                <div className="text">Buy Now</div>
                <span className="icon">
                  <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="giphy-container">
          <iframe 
            src="https://giphy.com/embed/Sl1PEQk8fKeqcPDCEl" 
            width="480" 
            height="271" 
            frameBorder="0" 
            className="giphy-embed" 
            allowFullScreen>
          </iframe>
          <Link to="product">
            <div data-tooltip="Price: $500" className="button">
              <div className="button-wrapper">
                <div className="text">Buy Now</div>
                <span className="icon">
                  <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="giphy-container">
        <iframe 
          src="https://giphy.com/embed/8sJgpqqYTlOPm" 
          width="480" 
          height="271" 
          frameBorder="0" 
          className="giphy-embed" 
          allowFullScreen>
        </iframe>
        <Link to="product">
          <div data-tooltip="Price: $900" className="button">
            <div className="button-wrapper">
              <div className="text">Buy Now</div>
              <span className="icon">
                <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>
      <div className="giphy-container">
        <iframe 
          src="https://giphy.com/embed/irSg1eFKZVIfkh958u"  
          width="480" 
          height="271" 
          frameBorder="0" 
          className="giphy-embed" 
          allowFullScreen>
        </iframe>
        <Link to="product">
          <div data-tooltip="Price: $700" className="button">
            <div className="button-wrapper">
              <div className="text">Buy Now</div>
              <span className="icon">
                <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>

    </div>
  );
}

export default Home