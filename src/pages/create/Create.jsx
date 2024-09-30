import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useCollection } from '../../hooks/useCollection';

// styles
import './Create.scss';

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' }
];

export default function Create() {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setsetDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  const { documents } = useCollection('users');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });

      setUsers(options);
    }
  }, [documents]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError(null);

    if (!category) {
      setFormError('Please select a project category');
      return;
    }

    if (assignedUsers.length < 1) {
      setFormError('Please assigne the project to at least one user');
      return;
    }

    console.log(name, details, dueDate, category.value, assignedUsers);
  };

  return (
    <div className='create-form'>
      <h2 className='page-title'>Create a new project</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input
            type='text'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          <span>Project details:</span>
          <textarea
            type='text'
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </label>

        <label>
          <span>Set due date:</span>
          <input
            type='date'
            required
            value={dueDate}
            onChange={(e) => setsetDueDate(e.target.value)}
          />
        </label>

        <label>
          <span>Project category:</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          ></Select>
        </label>

        <label>
          <span>Assign to:</span>
          <Select
            options={users}
            onChange={(option) => setAssignedUsers(option)}
            isMulti
          ></Select>
        </label>
        <button className='btn'>Add Project</button>

        {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  );
}
