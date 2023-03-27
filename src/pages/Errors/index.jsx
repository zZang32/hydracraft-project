import React from 'react';
import { Link } from 'react-router-dom';

// images
import backgroundImage from '../../assets/img/fondotierra.webp'

// css
import './style.css';

/**
 * Renders the Error 404 page.
 *
 * @returns JSX element
 */
export default function error404() {
    return (
        <>
            <img
                src={backgroundImage}
                alt="banner"
                className="background-image position-absolute"
            />
            <div className='h-100 d-flex justify-content-center align-items-center'>
                <div className='text-center'>
                    <span className="text-danger fuente-regular-mc display-2">Error 404</span>
                    <br />
                    <span className='text-info fuente-regular-mc display-6'>The page you have tried to access is either unavailable or does not exist.</span>
                    <br />
                </div>
            </div>
        </>
    );
}
