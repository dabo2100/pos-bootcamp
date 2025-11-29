import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function LoginPage() {
  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    let domain = 'http://82.112.241.233:1993';
    let endPoint = '/api/auth/local';
    let url = domain + endPoint;
    let dataToSend = { identifier: values.email, password: values.password };
    // Request to the backend
    axios
      .post(url, dataToSend)
      .then((res) => {
        let token = res.data.jwt;
        values.isChecked ? localStorage.setItem('token', token) : sessionStorage.setItem('token', token);
        toast.success('Login Success');
        navigate('/');
      })
      .catch((err) => {
        toast.error(err.response.data.error.message);
      });
  };

  useEffect(() => {
    let token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, []);

  return (
    <div className={`w-full h-dvh flex items-center justify-center bg-gray-900 text-white`}>
      <Formik initialValues={{ email: '', password: '', isChecked: false }} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form className="bg-gray-900 shadow rounded-2xl p-4 flex flex-col gap-3 w-[400px] border">
          <h1>Please Login To The System</h1>
          <Field className="w-full input" name="email" type="text" placeholder="Enter you email" />
          <ErrorMessage name="email" component={'p'} className="text-red-500" />
          <Field className="w-full input" name="password" type="text" placeholder="Enter you password" />
          <ErrorMessage name="password" component={'p'} className="text-red-500" />

          <label className="flex gap-3">
            <Field name="isChecked" className="checkbox checkbox-primary" type="checkbox" />
            Remember Me
          </label>

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
          <Link to={'/register'} className="btn btn-success">
            Don't have account ? Create New
          </Link>
        </Form>
      </Formik>
    </div>
  );
}

// Login => (email - passowrd)
// Token From Backend

// New Requests (Posts of my Account)
// Request + Token

// jwt => json web token
// localStorage
// sessionStorage
