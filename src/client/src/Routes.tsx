import React from 'react';
import {Route, Routes} from 'react-router-dom';
import ChatPage from "./pages/ChatPage";
import ConfigPage from "./pages/ConfigPage";

/**
 * Routes component containing routes for the whole application
 * @returns {JSX}
 */
const Switch = () => (
    <Routes>
        <Route  path='/' element={<ChatPage/>} />
        <Route  path='/config' element={<ConfigPage/>} />
    </Routes>
);

export default Switch;

