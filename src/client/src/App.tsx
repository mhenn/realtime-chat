import { BrowserRouter as Router } from 'react-router-dom';
import { UserContextProvider, useUser } from './utils/UserContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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




const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <UserContextProvider>
                <div className="App min-h-screen bg-stone-900">
                    <header className="">
                    </header>
                    <Container />
                </div>
            </UserContextProvider>
        </QueryClientProvider >
    );
}

export default App;
