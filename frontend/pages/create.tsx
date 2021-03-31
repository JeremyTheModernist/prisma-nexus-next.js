import { useCreateDraftMutation } from '../graphql/generated/graphql';
import {useForm, useMount} from '../hooks'


export default function Home() {
  const [addTodo, { loading, data }] = useCreateDraftMutation();
  const {formData,handleFormInput} = useForm();
  const isMounted = useMount();
  if (loading) return <li>loading</li>;
  if (!isMounted) return null;
  return (
    <div style={formStyles}>
      <h1>Create something fun!</h1>
      <form >
          <div style={inputStyles}>
              <label htmlFor="title">Title</label>
              <input id="title" name="title" placeholder="title" onChange={handleFormInput}/>
          </div>
          <div style={inputStyles}>
              <label htmlFor="body">body</label>
              <textarea id="body" name="body" placeholder="body text" onChange={handleFormInput}>

              </textarea>
          </div>
      <button
        onClick={() =>
          addTodo({
            variables: {
              title: formData.title,
              body: formData.body,
            },
          })
        }
      >
        Create Draft!
      </button>
      </form>

    </div>
  );
}


const inputStyles = {
    display: 'flex',
    flexFlow: 'column wrap',
    marginBottom: '30px'
}

const formStyles = {
    display: 'flex',
    flexFlow: 'column wrap',
    width: '500px',
    margin: 'auto'
}