import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom/cjs/react-router-dom.min';

// styles
import './App.scss';

// pages and component
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import Create from './pages/create/Create';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Dashboard></Dashboard>
            </Route>

            <Route path='/create'>
              <Create></Create>
            </Route>

            <Route path='/projects/:id'>
              <Project></Project>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/signup'>
              <Signup></Signup>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
