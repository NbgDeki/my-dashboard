import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom/cjs/react-router-dom.min';
import { useAuthContext } from './hooks/useAuthContext';

// styles
import './App.scss';

// pages and component
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import Create from './pages/create/Create';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Sidebar></Sidebar>
          <div className='container'>
            <Navbar></Navbar>
            <Switch>
              <Route exact path='/'>
                {!user && <Redirect to='/login'></Redirect>}
                {user && <Dashboard></Dashboard>}
              </Route>

              <Route path='/create'>
                {!user && <Redirect to='/login'></Redirect>}
                {user && <Create></Create>}
              </Route>

              <Route path='/projects/:id'>
                {!user && <Redirect to='/login'></Redirect>}
                {user && <Project></Project>}
              </Route>

              <Route path='/login'>
                {!user && <Login></Login>}{' '}
                {user && <Redirect to='/'></Redirect>}
              </Route>

              <Route path='/signup'>
                {user && <Redirect to='/'></Redirect>}
                {!user && <Signup></Signup>}
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
