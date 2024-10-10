import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import OnlineUsers from './components/OnlineUsers';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar></Sidebar>}

          <div className='container'>
            <Navbar></Navbar>
            <Routes>
              <Route
                path='/'
                element={
                  user ? (
                    <Dashboard></Dashboard>
                  ) : (
                    <Navigate to='/login'></Navigate>
                  )
                }
              />

              <Route
                path='/create'
                element={
                  user ? <Create></Create> : <Navigate to='/login'></Navigate>
                }
              />

              <Route
                path='/projects/:id'
                element={
                  user ? <Project></Project> : <Navigate to='/login'></Navigate>
                }
              />

              <Route
                path='/login'
                element={user ? <Navigate to='/'></Navigate> : <Login></Login>}
              />

              <Route
                path='/signup'
                element={
                  user ? <Navigate to='/'></Navigate> : <Signup></Signup>
                }
              />
            </Routes>
          </div>

          {user && <OnlineUsers></OnlineUsers>}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
