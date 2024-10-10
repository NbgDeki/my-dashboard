// styles
import Avatar from './Avatar';
import './ProjectList.scss';

import { Link } from 'react-router-dom';

export default function ProjectList({ projects }) {
  return (
    <div className='project-list'>
      {projects.length < 1 ? (
        <p>No projects yet</p>
      ) : (
        projects.map(({ name, id, dueDate, assignedUsersList }) => (
          <Link to={`/projects/${id}`} key={id}>
            <h4>{name}</h4>
            <p>Due by {dueDate.toDate().toDateString()}</p>

            <div className='assigned-to'>
              <ul>
                {assignedUsersList.map(({ photoURL }) => (
                  <li key={photoURL}>
                    <Avatar src={photoURL}></Avatar>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
