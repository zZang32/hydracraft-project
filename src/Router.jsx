import * as React from 'react';
import {
    BrowserRouter, Routes, Route
} from 'react-router-dom';

// Importar páginas
import Home from './pages/Home';
import Error404 from './pages/Errors';

// Importar componentes
import { HydracraftHome } from './components/Home';

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>                
                <Route path="/" element={<Home />}>
                    <Route path="/" element={<HydracraftHome />} />
                    <Route path="/server/hydracraft-java" element={<HydracraftHome />} />
                    <Route path='*' element={<Error404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );


}