import React from 'react';
import Alerts from '../Alerts';

/**
 * Component representing the play button for the game.
 *
 * @function
 * @returns {JSX.Element} A React JSX element representing the play button component.
 */
export default function index() {

    /**
     * Function to copy the server IP to the clipboard and show a success alert.
     *
     * @function
     */
    const copyText = () => {
        navigator.clipboard.writeText("mc.hydracraft.es").then(() => {
            Alerts("success", "copyText");
        }).catch(() => {
            console.log("There was an error copying the IP.");
        });
        
    }

    return (
        <>
            {/* Desktop footer */}
            <div className="d-none d-md-block d-sm-none">
                <div className="position-absolute d-flex justify-content-center w-100 h-5 align-items-start bottom-0 background-main">
                <div className="justify-content-center">
                        <div className=" mb-5 play-button" onClick={() => { copyText(); }}>JUGAR</div>
                    </div>
                </div>
            </div>
            {/* Mobile footer */}
            <div className='d-md-none d-sm-block'>
                <div className="position-absolute d-flex justify-content-center w-100 h-5 align-items-start bottom-0 background-main">
                    <div className="mb-5 play-button" onClick={() => { copyText(); }}>JUGAR</div>
                </div>
            </div>
        </>
    );
}
