import React, {createContext, useState} from 'react';

/**
 * A context object for the collapsible component.
 *
 * @type {object}
 * @property {boolean} isCollapse - The current collapsible state.
 * @property {function} setIsCollapse - A function to set the collapsible state.
 */
export const CollapseContext = createContext();

/**
 * A provider component for the CollapseContext.
 *
 * @function
 * @param {object} props - React props object.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {JSX.Element} A React JSX element representing the context provider.
 */
export const CollapseProvider = ({children}) => {

    /**
     * State variable that holds the API status of the server.
     *
     * @type {Object}
     */
    const [isCollapse, setIsCollapse] = useState(false);

    return (

        <CollapseContext.Provider value={{isCollapse, setIsCollapse}}>
            {children}
        </CollapseContext.Provider>

    );
}