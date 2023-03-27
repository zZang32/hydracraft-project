import React from 'react';
import {Outlet} from 'react-router-dom';

// Context
import { CollapseProvider } from "../../components/Contexts";

// Components
import Menu from "../../components/Menu";
import ButtonCollapse from "../../components/ButtonCollapse";
import Footer from '../../components/Footer';
import BannerLoader from '../BannerLoader';

/**
 * Main layout of the application, includes a menu, a collapsible sidebar,
 * a content area, and a footer.
 * @return {JSX.Element} The main layout component.
 */
export default function Index() {
    return (
        <>
          <div className="App overflow-hidden">
            <BannerLoader />
            <CollapseProvider>
              <div className="container-fluid">
                <div className="row min-vh-100">
                  <Menu />
                  <div className="col px-0 bg-main position-relative">
                    <div className="py-3 m-0 background-main d-flex text-white justify-content-start">
                      <ButtonCollapse />
                    </div>
                    <div className="w-100 overflow-home">
                      <Outlet />
                    </div>
                    <Footer />
                  </div>
                </div>
              </div>
            </CollapseProvider>
          </div>
        </>
      );
}
