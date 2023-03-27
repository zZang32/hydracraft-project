import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';

// Contexts
import { CollapseContext } from '../Contexts';

// css
import "./style.css";

// images
import HydraBedrock from '../../assets/img/hydrabedrock.png';
import HydraLogo from '../../assets/img/hydralogo.jpg';
import McIcon from '../../assets/img/the_marzy_ic.png';
import TorchIcon from '../../assets/img/torch-icon.png';
import DcIcon from '../../assets/img/dcicon.png';
import TwIcon from '../../assets/img/twicon.png';
import YtIcon from '../../assets/img/yticon.png';

// Components
import ButtonCollapse from '../ButtonCollapse';

/**
 * This component represents the sidebar that appears on the left side of the
 * screen. It contains links to different pages, as well as buttons to open 
 * external links and social media links.
 * 
 * @return {JSX.Element} The component as a JSX Element.
 */
export default function index() {

    const { isCollapse } = useContext(CollapseContext);

    /**
     * Redirects to the provided URL in a new tab.
     * 
     * @param  {String} url - The URL to redirect to.
     * @return {Void}
     */
    const redirect = (url) => {
        return window.open(url, '_blank');
    }
    if (!isCollapse) {
        return (
            <>
                <div className='py-4 col-auto d-none d-md-flex d-sm-none flex-column justify-content-start align-items-start background-sidebar ' id="get-menu-lg">

                    {/* BOTÓN ACTIVO POR LA CLASE "ACTIVE" */}

                    <div className='p-sidebar position-relative'>
                        <div className='position-absolute top-0'>
                            <div className='d-flex text-light fuente-regular-mc flex-column align-items-start mx-4 text-center d-none d-md-block '>
                                <h5 className="my-0 py-0 ">HydraCraft Launcher</h5>
                            </div>
                            {window.location.pathname === "/" || window.location.pathname === "/server/hydracraft-java" ?
                                <div className="d-flex justify-content-start align-items-center w-100 my-2 button-div-mc active mt-5 ">
                                    <img src={HydraLogo} alt="Logo de Hydracraft Java" className="img-fluid rounded-1" />
                                    <div className="d-flex text-light flex-column align-items-start mx-4 text-center d-none d-md-block ">
                                        <h5 className="my-0 py-0">Java</h5>
                                        <p className='my-0 py-0 fuente-regular-mc text-info'>1.7-1.19</p>
                                    </div>
                                </div>
                                :
                                <Link to={"/"} className="fuente-regular-mc text-decoration-none">
                                    <div className="d-flex justify-content-start align-items-center w-100 my-2 button-div-mc mt-5 ">
                                        <img src={HydraLogo} alt="Logo de Hydracraft Java" className="img-fluid rounded-1" />
                                        <div className="d-flex text-light flex-column align-items-start mx-4 text-center d-none d-md-block ">
                                            <h5 className="my-0 py-0">Java</h5>
                                            <p className='my-0 py-0 fuente-regular-mc text-info'>1.7-1.19</p>
                                        </div>
                                    </div>
                                </Link>

                            }
                            <div className="d-flex justify-content-start align-items-center w-100 my-2 button-div-mc ">
                                <img src={HydraBedrock} alt="Logo de Hydracraft Bedrock" className="img-fluid rounded-1" />
                                <div className="d-flex text-light flex-column align-items-start mx-4 text-center d-none d-md-block">
                                    <h5 className="my-0 py-0 mx-0 px-0 fuente-regular-mc">Bedrock</h5>
                                    <center>
                                        <p className='my-0 py-0 fuente-regular-mc text-danger'>¡Pronto!</p>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className='position-absolute mb-5 top-50'>
                            <div className="d-flex justify-content-start align-items-center w-100 my-2 button-div-mc" onClick={() => {redirect("https://twitter.com/marzy_yt");}}>
                                <img src={TwIcon} alt="Logo de Hydracraft Java" className="img-fluid tw-mc-icon" />
                                <div className="d-flex text-light flex-column align-items-start mx-4 text-center d-none d-md-block">
                                    <h5 className="my-0 py-0 fuente-regular-mc twitter-font">@marzy_yt</h5>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center w-100 my-2 button-div-mc" onClick={() => {redirect("https://www.youtube.com/@TheMarZy");}} >
                                <img src={YtIcon} alt="Logo de Hydracraft Java" className="img-fluid yt-mc-icon" />
                                <div className="d-flex text-light flex-column align-items-start mx-4 text-center d-none d-md-block">
                                    <h5 className="my-0 py-0 fuente-regular-mc youtube-font">@TheMarZy</h5>
                                </div>
                            </div>
                        </div>

                        {/* Panel */}
                        <div className="position-absolute bottom-0">
                            {/* <div className="d-flex justify-content-start align-items-center w-100 my-2 button-div-mc ">
                                <img src={TorchIcon} alt="Logo de Hydracraft Java" className="img-fluid torch-icon" />
                                <div className="d-flex text-light flex-column align-items-start mx-4 text-center d-none d-md-block ">
                                    <h5 className="my-0 py-0 fuente-regular-mc">Novedades</h5>
                                </div>
                            </div> */}
                            <div className="d-flex justify-content-start align-items-center w-100 my-3 button-div-mc" onClick={() => {redirect("https://discord.gg/bCgkyzM5bg");}}>
                                <img src={DcIcon} alt="Logo de Hydracraft Bedrock" className="img-fluid dc-mc-icon" />
                                <div className="d-flex text-light flex-column align-items-start mx-4 text-center d-none d-md-block">
                                    <h5 className="my-0 py-0 fuente-regular-mc">Soporte</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='text-light mt-sm-auto pt-5 w-100 fuente-regular-mc'>
                        <div className="text-center ">
                            Hydracraft Social Networks
                            <hr className='minecraft-hr' />
                            <div className='icons-footer'>
                                <BsTwitter className='tw-footer-icon icon' onClick={() => {redirect("https://twitter.com/marzy_yt");}} />
                                <BsYoutube className='yt-footer-icon icon' onClick={() => {redirect("https://www.youtube.com/@TheMarZy");}} />
                                <img src={McIcon} className='img-fluid mc-icon icon' onClick={() => {redirect("/panel/");}} />
                                <FaDiscord className='dc-footer-icon icon' onClick={() => {redirect("http://discord.hydracraft.es");}} />
                                <BsTwitter className='tw-footer-icon icon' onClick={() => {redirect("https://twitter.com/hydracraft_es");}} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    /**
     * Returns a JSX element that renders a mobile menu for the Hydracraft website.
     * The mobile menu includes buttons to navigate to the home page, a Java version of the game, a Bedrock version of the game, the Hydracraft Twitter page, the Hydracraft YouTube page, and the Hydracraft Discord server.
     * @return {JSX.Element} The mobile menu JSX element.
     */
    return (
        <>
            <div className='py-4 col-auto vh-100 d-flex justify-content-center align-items-center z-1 w-100 d-md-none d-sm-flex flex-column background-sidebar mobile-menu' id="get-menu-mb">

                <div className="w-100 my-2 button-div-mc" onClick={() => { window.location.href = "/"; }}>
                    <div className='float-start my-auto'>
                        <img src={HydraLogo} alt="Logo de Hydracraft Java" className="img-fluid rounded-1 float-start" />
                    </div>
                    <div className="text-light d-flex h-100 ps-5 align-items-center">
                        <h5 className="my-auto py-0 fuente-regular-mc">Java</h5>
                    </div>
                </div>

                <div className="w-100 my-2 button-div-mc">
                    <div className="float-start my-auto">
                        <img src={HydraBedrock} alt="Logo de Hydracraft Bedrock" className="img-fluid rounded-1 text-start" />
                    </div>
                    <div className="text-light d-flex h-100 ps-5 align-items-center">
                        <h5 className="my-0 py-0 fuente-regular-mc">Bedrock</h5>

                    </div>
                </div>
                <div className="w-100 my-2 button-div-mc" onClick={() => {redirect("https://twitter.com/marzy_yt");}}>
                    <div className="float-start my-auto">
                        <img src={TwIcon} alt="Torch Icon" className="img-fluid tw-mc-icon" />
                    </div>
                    <div className="text-light d-flex h-100 ps-5 align-items-center">
                        <h5 className="my-0 py-0 fuente-regular-mc twitter-font ">@marzy_yt</h5>
                    </div>
                </div>
                <div className="w-100 my-2 button-div-mc" onClick={() => {redirect("https://www.youtube.com/@TheMarZy");}}>
                    <div className="float-start my-auto">
                        <img src={YtIcon} alt="Torch Icon" className="img-fluid yt-mc-icon" />
                    </div>
                    <div className="text-light d-flex h-100 ps-5 align-items-center ">
                        <h5 className="my-0 py-0 fuente-regular-mc youtube-font">@TheMarZy</h5>
                    </div>
                </div>
                {/* <div className="w-100 my-2 button-div-mc">
                    <div className="float-start my-auto ps-4">
                        <img src={TorchIcon} alt="Torch Icon" className="img-fluid torch-icon" />
                    </div>
                    <div className="text-light d-flex h-100 ps-5 align-items-center">
                        <h5 className="my-0 py-0 fuente-regular-mc">Novedades</h5>
                    </div>
                </div> */}
                <div className="w-100 my-2 button-div-mc">
                    <div className="float-start my-auto">
                        <img src={DcIcon} alt="Logo de Hydracraft Bedrock" className="img-fluid dc-mc-icon" />
                    </div>
                    <div className="text-light d-flex h-100 ps-5 align-items-center" onClick={() => {redirect("http://discord.hydracraft.es");}}>
                        <h5 className="my-0 py-0 fuente-regular-mc">Soporte</h5>
                    </div>
                </div>
                <div className="fixed-top text-white d-flex justify-content-center m-3 my-5">
                    <ButtonCollapse />
                </div>

                <div className='text-light fixed-bottom w-100 fuente-regular-mc'>
                    <div className="text-center ">
                        Hydracraft Social Networks
                        <hr className='minecraft-hr' />
                        <div className='icons-footer'>
                            <BsTwitter className='tw-footer-icon icon' onClick={() => {redirect("https://twitter.com/marzy_yt");}} />
                            <BsYoutube className='yt-footer-icon icon' onClick={() => {redirect("https://www.youtube.com/@TheMarZy");}} />
                            <img src={McIcon} className='img-fluid mc-icon icon' onClick={() => {redirect("/panel/");}} />
                            <FaDiscord className='dc-footer-icon icon' onClick={() => {redirect("http://discord.hydracraft.es");}} />
                            <BsTwitter className='tw-footer-icon icon' onClick={() => {redirect("https://twitter.com/hydracraft_es");}} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
