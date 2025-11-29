import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function RegisterPage() {
  const validationSchema = Yup.object({
    username: Yup.string().required(),

    email: Yup.string().required().email(),

    password: Yup.string()
      .required()
      .min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must be at most 20 characters')
      .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
      .matches(/[0-9]/, 'Must contain at least one number')
      .matches(/[^A-Za-z0-9]/, 'Must contain at least one special character'),
  });

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    let domain = 'http://82.112.241.233:1993';
    let endPoint = '/api/auth/local/register';
    let url = domain + endPoint;
    axios
      .post(url, values)
      .then((res) => {
        let token = res.data.jwt;
        sessionStorage.setItem('token', token);
        toast.success('Register Success');
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
      <Formik initialValues={{ email: '', password: '', username: '' }} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form className="bg-gray-900 shadow rounded-2xl p-4 flex flex-col gap-3 w-[400px] border">
          <h1>Welcome Please Register</h1>
          <Field className="w-full input" name="username" type="text" placeholder="Enter your username" />
          <ErrorMessage name="username" component={'p'} className="text-red-500" />

          <Field className="w-full input" name="email" type="text" placeholder="Enter your email" />
          <ErrorMessage name="email" component={'p'} className="text-red-500" />
          <Field className="w-full input" name="password" type="text" placeholder="Enter your password" />
          <ErrorMessage name="password" component={'p'} className="text-red-500" />
          <button type="submit" className="btn btn-success w-full">
            Register
          </button>
          <Link to={'/login'} className="btn btn-primary">
            Already have account ? Please Login
          </Link>
        </Form>
      </Formik>
    </div>
  );
}
