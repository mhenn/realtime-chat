import { BrowserRouter as Router } from 'react-router-dom';
import { UserContextProvider, useUser } from './utils/UserContext';
import { QueryContext } from './utils/QueryContext';
import AuthPage from './pages/AuthPage';
import './App.css';
import Switch from './Routes';

const Base = () => {
    return (
        <Router basename="/">
            <Switch />
        </Router>
    );
}

const Container = () => {
    const { user } = useUser()
    return user ? <Base /> : <AuthPage />
}

function App() {
    return (
        <QueryContext>
            <UserContextProvider>
                <div className="App min-h-screen bg-stone-900">
                    <header className="">
                    </header>
                    <Container />
                </div>
            </UserContextProvider>
        </QueryContext>
    );
}

export default App;
