import { NavLink } from 'react-router-dom';

// styles & images
import './Sidebar.scss';
import DashboardIcon from '../assets/dashboard_icon.svg';
import AddIcon from '../assets/add_icon.svg';
import Avatar from './Avatar';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Sidebar() {
  const { user } = useAuthContext();
  const { photoURL, displayName } = user;

  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='user'>
          <Avatar src={photoURL}></Avatar>
          <p>Hey, {displayName}</p>
        </div>

        <nav className='links'>
          <ul>
            <li>
              <NavLink exact to='/'>
                <img src={DashboardIcon} alt='dashboard icon' />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink to='/create'>
                <img src={AddIcon} alt='add project icon' />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
