import { useCollection } from '../hooks/useCollection';

// components
import Avatar from './Avatar';

// styles
import './OnlineUsers.scss';

export default function OnlineUsers() {
  const { documents, error } = useCollection('users');

  return (
    <div className='user-list'>
      <h2>All Users</h2>

      {error && <div className='error'>{error}</div>}

      {documents &&
        documents.map(({ id, displayName, photoURL }) => (
          <div className='user-list-item' key={id}>
            <span>{displayName}</span>
            <Avatar src={photoURL}></Avatar>
          </div>
        ))}
    </div>
  );
}
