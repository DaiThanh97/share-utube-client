import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ROUTES } from './configs/routes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
    const generateRoutes = () => {
        return ROUTES.map((route, index) => {
            return <Route {...route} key={index} />
        });
    }

    return (
        <BrowserRouter>
            <CssBaseline />
            <NavBar />
            <div className="spaceTop">
                <Switch>
                    {generateRoutes()}
                </Switch>
            </div>

        </BrowserRouter>
    );
}

export default App;
