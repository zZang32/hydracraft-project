import React, {useContext} from 'react';
import {HiOutlineBars3BottomLeft, HiOutlineBars3BottomRight} from 'react-icons/hi2';
// Contexts
import {CollapseContext} from '../Contexts';

/**
 * A React functional component that displays a collapsible button.
 *
 * @function
 * @returns {JSX.Element} A React JSX element representing the button.
 */

export default function index() {

    const {isCollapse, setIsCollapse} = useContext(CollapseContext);

    const handleCollapse = () => {
        
        setIsCollapse(!isCollapse);

    }

    if(isCollapse) {
        return (
            <div>
                <div onClick={handleCollapse} className='d-flex justify-content-center py-1 align-items-center mx-2 d-md-none d-sm-flex shadow-lg minecraft-button text-black'>
                    <HiOutlineBars3BottomRight />
                </div>
            </div>
        );
    } 
    
    return (
        <div>
            <div onClick={handleCollapse} className='d-flex justify-content-center py-1 align-items-center mx-2 d-md-none d-sm-flex shadow-lg minecraft-button text-black'>
                <HiOutlineBars3BottomLeft />
            </div>
        </div>
    );
}
