import { redirect } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";

export const action = async ({ request }) => {
  // For submitting to the server
  // console.log("inside action");
  const form = await request.formData();
  const title = form.get('title');
  const body  = form.get('body');

  const field = { title, body }
  console.log(field, 'field');  

  // @todo - submit to database (send to via POST API or else...)

  return redirect('/news');
} 

function News() {
  const actionData = useActionData();
  // console.log(actionData, 'actionData');
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>This is Nested New News Route. (With Folder Routing)</h1>
        <div className='page-header'>
          <h1>New News</h1>
          <Link to='/news' className='btn btn-reverse'>
            Back
          </Link>
        </div>
        <div className='page-content'>
          <Form method='POST'>
            <div className='form-control'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                name='title'
                id='title'
                defaultValue={actionData?.fields?.title}
              />
              <div className='error'>
                {actionData?.fieldErrors?.title ? (
                  <p
                    className='form-validation-error'
                    role='alert'
                    id='title-error'
                  >
                    {actionData.fieldErrors.title}
                  </p>
                ) : null}
              </div>
            </div>
            <div className='form-control'>
              <label htmlFor='body'>News Body</label>
              <textarea
                name='body'
                id='body'
                defaultValue={actionData?.fields?.body}
              />
              <div className='error'>
                {actionData?.fieldErrors?.body ? (
                  <p
                    className='form-validation-error'
                    role='alert'
                    id='body-error'
                  >
                    {actionData.fieldErrors.body}
                  </p>
                ) : null}
              </div>
            </div>
            <button type='submit' className='btn btn-block'>
              Add News
            </button>
          </Form>
        </div>
    </div>
  );
}

export function ErrorBoundary({ error }) {
  console.log(error, 'error');
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p> 
    </div>
  )
}

export default News;