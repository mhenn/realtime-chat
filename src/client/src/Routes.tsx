import { Route, Routes } from 'react-router-dom';
import ChatPage from "./pages/ChatPage";
import ConfigPage from "./pages/ConfigPage";

const Switch = () => (
    <Routes>
        <Route path='/' element={<ChatPage />} />
        <Route path='/config' element={<ConfigPage />} />
    </Routes>
);

export default Switch;

