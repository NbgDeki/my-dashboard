// styles
import './ProjectList.scss';

export default function ProjectList({ projects }) {
  return (
    <div>
      {projects.length < 1 ? (
        <p>No projects yet</p>
      ) : (
        projects.map(({ name, id }) => <div key={id}>{name}</div>)
      )}
    </div>
  );
}
