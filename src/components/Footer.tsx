import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const footer = () => {
    return (
        <nav className="navbar fixed-bottom navbar-dark bg-dark text-light">
            <div className="container-fluid d-flex justify-content-around">
                <div>©️ 2021 Beto Dávila</div><span style={{ cursor: 'pointer' }}><a href="https://github.com/betoDavila86" ><GitHubIcon color="inherit" /></a></span>
                <span style={{ cursor: 'pointer' }}><a href="https://www.linkedin.com/in/alberto-davila-gomez/" ><LinkedInIcon color="inherit" /></a></span>
            </div>
        </nav>
    );
};

export default footer;
