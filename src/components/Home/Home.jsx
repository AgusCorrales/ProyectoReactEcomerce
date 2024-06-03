import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import { Carousel } from 'antd';

const Home = () => {
    const contentStyle = {
        marginTop: '10px',
        height: '160px',
        lineHeight: '160px',
    };
    return (
        <div>
            <div>
                <Carousel autoplay>
                    <div>
                        <img src='https://images.pexels.com/photos/5632378/pexels-photo-5632378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            style={{ ...contentStyle, objectFit: 'cover', width: '100%', height: '500px', marginTop: '50px' }}></img>
                    </div>
                    <div>
                        <img src='https://images.pexels.com/photos/139038/pexels-photo-139038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            style={{ ...contentStyle, objectFit: 'cover', width: '100%', height: '500px', marginTop: '50px' }}></img>
                    </div>
                    <div>
                        <img src='https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            style={{ ...contentStyle, objectFit: 'cover', width: '100%', height: '500px', marginTop: '50px' }}></img>
                    </div>
                    <div>
                        <img src='https://images.pexels.com/photos/5624976/pexels-photo-5624976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            style={{ ...contentStyle, objectFit: 'cover', width: '100%', height: '500px', marginTop: '50px' }}></img>
                    </div>
                </Carousel>
            </div>

            <div className="giphy-container">
                <div className='xbox'>
                    <iframe
                        src="https://giphy.com/embed/gHWT7cA7rRxwagVsPa"
                        width="890"
                        height="500"
                        frameBorder="0"
                        className="giphy-embed"
                        allowFullScreen>
                    </iframe>
                    <Link to="product">
                        <div className="button" >
                            <div className="button-wrapper">
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

            <div className="giphy-container">
                <iframe
                    src="https://giphy.com/embed/Sl1PEQk8fKeqcPDCEl"
                    width="700"
                    height="400"
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen>
                </iframe>
                <Link to="product">
                    <div data-tooltip="Price: $500" className="button">
                        <div className="button-wrapper">
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
                    width="700"
                    height="400"
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen>
                </iframe>
                <Link to="product">
                    <div className="button">
                        <div className="button-wrapper">
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
                    width="500"
                    height="500"
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen>
                </iframe>
                <Link to="product">
                    <div className="button">
                        <div className="button-wrapper">
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
                    src="https://gifer.com/embed/2bsy"
                    width="900"
                    height="500"
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen>
                </iframe>
                <Link to="product">
                    <div className="button">
                        <div className="button-wrapper">
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