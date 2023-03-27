import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Loader from "../../components/Loader";

// Images
import banner from "../../assets/img/bannerhydra.png";

/**
 * A component that displays a loading screen with a progress bar and an image banner.
 */
export default function BannerLoader() {

    const [loaded, setLoaded] = useState(false);
    const [bar, setBar] = useState(0);

    /**
     * Runs when the component mounts or when the 'bar' state variable changes.
     * If the progress bar is less than 100, it increases by 10% every 100ms.
     * If the progress bar is 100 or more, the loading screen is considered fully loaded after 1.5 seconds.
     */
    useEffect(() => {
        if (bar < 100) {
            setTimeout(() => setBar(bar + 10), 100);
        }
        if (bar >= 100) {
            setTimeout(() => setLoaded(true), 1500);
        }
    }, [bar, setBar]);

    /**
     * Renders the loading screen with the image banner and progress bar if it hasn't fully loaded yet.
     * Otherwise, returns null.
     *
     * @returns {JSX.Element|null} - The loading screen if it hasn't fully loaded yet, otherwise null.
     */
    if (!loaded) {
        return (
            <div className="d-flex vh-100 flex-column aligns-items-center justify-content-center text-center fondo">
                <div className="container">
                    <img src={banner} alt="banner" className="img-fluid" />
                    <br />
                    <br />
                    <Loader bar={bar} />
                </div>
            </div>
        );
    } else {
        return null;
    }
}
