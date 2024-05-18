import React, { useEffect, useState } from 'react';

// Utils
import ServerStatus from '../../util/ServerStatus';

// css
import "animate.css";
import './style.css';

// images

import backgroundImage from "../../assets/img/fondo.png";
import logowbackground from "../../assets/img/logo_wbackground.png";
import chest from "../../assets/img/cofre.png";
import DragonHead from "../../assets/img/DragonHead.gif";
import DcIcon from '../../assets/img/dcicon.png';
import MyIcon from '../../assets/img/the_marzy_ic.png';

// Components
import Spinner from '../Spinners';

/**
 * The HydracraftHome component displays the home page of the HydraCraft
 * server. It uses the ServerStatus utility function to fetch server
 * information and displays it along with links to Discord and the server
 * store.
 *
 * @return {JSX.Element} The rendered home page of the HydraCraft server.
 */
export function HydracraftHome() {

    /**
     * State variable that holds the API status of the server.
     *
     * @type {Object}
     */
    const [apiStat, setApiStat] = useState(false);

    /**
     * A side effect that fetches the status of the HydraCraft server
     * using the ServerStatus utility function and updates the apiStat
     * state variable.
     */
    useEffect(() => {
        ServerStatus("mc.hydracraft.es").then((res) => {
            let version = res.version;
            let motd = `${res.motd.html[0]}<br />${res.motd.html[1]}`;
            let players = `${res.players.online}/${res.players.max}`;

            let serverInfo = {
                version: version,
                motd: motd,
                players: players
            };

            console.log(res);

            setApiStat(serverInfo);

        }).catch((err) => {
            console.log(err);
        });
    }, []);

    /**
     * If the apiStat state variable is false (i.e., no server status has been
     * fetched yet), the Spinner component is displayed until server information
     * is available.
     *
     * @return {JSX.Element} The Spinner component.
     */
    if (!apiStat) {
        return (
            <div className="row justify-content-center">
                <Spinner />
            </div>
        );
    }

    /**
     * A utility function that opens a new tab with the given URL.
     *
     * @param {string} url The URL to open.
     * @return {Window} The new window object.
     */
    const redirect = (url) => {
        return window.open(url, '_blank');
    }

    /**
     * The HydracraftHome component is rendered with an image background,
     * a logo, and a scoreboard with links to Discord, the server store,
     * and the server panel.
     *
     * @return {JSX.Element} The rendered home page of the HydraCraft server.
     */
    return (
        <>
            <img
                src={backgroundImage}
                alt="banner"
                className="background-image position-absolute"
            />
            <div className="row justify-content-center">

                <img
                    src={logowbackground}
                    alt="logowbackground"
                    className="img-fluid mx-auto animate__animated animate__infinite infinite animate__pulse logo-hydracraft"
                />
                <div className="d-none d-lg-block d-md-none scoreboard">
                    <div className="row justify-content-center w-100 d-flex">
                        <div className="row w-75 justify-content-center d-flex scoreboard-line">
                            <div className='text-center py-1 fuente-regular-mc'>
                                <span className='motd' dangerouslySetInnerHTML={{ __html: apiStat.motd }}></span>
                            </div>
                            <div className="col text-center head-menu" onClick={() => {redirect("http://discord.hydracraft.es");}}>
                                <img src={DcIcon} alt="Icono de discord" className="img-fluid menu-dc-icon" />
                                <span className='fuente-regular-mc text-info'>Discord</span>
                            </div>
                            <div className="col text-center head-central-menu dragon-head" onClick={() => {redirect("https://tienda.hydracraft.es");}}>
                                <div className='store-animation'>
                                    <span className='fuente-regular-mc text-danger mx-5'>¡Tienda!</span>
                                    <img src={DragonHead} alt="cofre" className="img-fluid dragon-icon" />
                                </div>
                            </div>
                            <div className="col text-center head-menu " onClick={() => {redirect("/panel/");}}>
                                <img src={MyIcon} alt="Marzy Icon" className="img-fluid menu-my-icon" />
                                <span className='fuente-regular-mc text-success'>Panel</span>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className='text-center w-50 py-1 scoreboard-line fuente-regular-mc'>
                                <span className='players-description'>¡Entra ya! </span><span className="text-info players-counter">mc.hydracraft.es</span>
                            </div>
                        </div>
                        <div className="row justify-content-center">

                            <div className='text-center w-50 py-1 scoreboard-line fuente-regular-mc'>
                                <span className='text-info players-description'>Jugadores: </span><span className="players-counter">{apiStat.players}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Design for sizes < 1020px */}
                <div className='d-none d-lg-none d-md-block scoreboard w-100'>
                    <div className="row justify-content-center">
                        <div className='text-center w-100 py-2 scoreboard-line fuente-regular-mc'>
                            <span className='display-6' dangerouslySetInnerHTML={{ __html: apiStat.motd }}></span>
                        </div>
                    </div>
                    
                    <div className="row justify-content-center scoreboard-line">
                        <div className="col" onClick={() => {redirect("http://discord.hydracraft.es");}}>
                            <div className='text-center fuente-regular-mc'>
                                <span className='text-info'>Discord</span>
                            </div>
                            <div className='text-center fuente-regular-mc'>
                                <img src={DcIcon} className="img-fluid menu-dc-icon" />
                            </div>
                        </div>
                        <div className="col" onClick={() => {redirect("https://tienda.hydracraft.es");}}>
                            <div className='text-center fuente-regular-mc'>
                                <span className='text-danger'>¡Tienda!</span>
                            </div>
                            <div className='text-center fuente-regular-mc'>
                                <img src={DragonHead} className="img-fluid dragon-icon-tablet" />
                            </div>
                        </div>
                        <div className="col" onClick={() => {redirect("/panel/");}}>
                            <div className='text-center fuente-regular-mc'>
                                <span className='text-success'>Panel</span>
                            </div>
                            <div className='text-center fuente-regular-mc'>
                                <img src={MyIcon} className="img-fluid menu-my-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className='text-center w-75 py-1 scoreboard-line fuente-regular-mc'>
                            <span className='players-description'>¡Entra ya! </span><span className="text-info players-counter">mc.hydracraft.es</span>
                        </div>
                    </div>
                    <div className="row justify-content-center">

                        <div className='text-center w-75 py-1 scoreboard-line fuente-regular-mc'>
                            <span className='text-info players-description'>Jugadores: </span><span className="players-counter">{apiStat.players}</span>
                        </div>
                    </div>
                </div>

                {/* Mobile Design */}
                <div className='d-lg-none d-md-none d-sm-block scoreboard w-100'>
                    <div className="row justify-content-center">
                        <div className='text-center w-100 py-2 scoreboard-line fuente-regular-mc'>
                            <span className='display-6' dangerouslySetInnerHTML={{ __html: apiStat.motd }}></span>
                        </div>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className='text-center w-100 py-1 scoreboard-line fuente-regular-mc'>
                            <span className='text-info display-6'>Discord: </span><span className="display-6 text-url" onClick={() => {redirect("http://discord.hydracraft.es");}}>discord.hydracraft.es</span>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className='text-center w-100 py-1 scoreboard-line fuente-regular-mc'>
                            <span className='text-info display-6'>Tienda: </span><span className="display-6 text-url" onClick={() => {redirect("https://tienda.hydracraft.es");}}>tienda.hydracraft.es</span>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className='text-center w-100 py-1 scoreboard-line fuente-regular-mc pb-4'>
                            <span className='text-info display-6'>Panel: </span><span className="display-6 text-url" onClick={() => {redirect("/panel/");}}>¡Inicia sesión aquí!</span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
