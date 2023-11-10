import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { Form,Link } from "react-router-dom";
// import { customFetch } from "./index";
// import {toast} from 'react-toastify'


const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    <Link to='/home' className=" link link-hover link-primary capitalize"></Link>
  }
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='POST'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 '
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type='text' label='username' name='username' />
        <FormInput type='integer' label='Year' name='Year' />
        <FormInput type='password' label='password' name='password' />
        <div className='mt-4'>
        <Link to='/home' className=" link link-hover link-primary capitalize btn btn-primary btn-block text-white hover:text-white">Register</Link>
        </div>

        <p className='text-center'>
          Already a member?
          <Link
            to='/login'
            className='ml-2 link link-hover link-primary capitalize'
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Register