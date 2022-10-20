import React from 'react';
import {Route, Routes} from 'react-router-dom';
import ChatPage from "./pages/ChatPage";
import AuthPage from "./pages/AuthPage";

/**
 * Routes component containing routes for the whole application
 * @returns {JSX}
 */
const Switch = () => (
    <Routes>
        <Route  path='/' element={<AuthPage/>} />
        <Route  path='/chat' element={<ChatPage/>} />
    </Routes>
);

export default Switch;

