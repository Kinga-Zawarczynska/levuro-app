import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import Input from './Input'
import { logIn } from '../utils/login'
import './LoginPage.scss'

function LoginPage() {
    const dispatch = useDispatch()
    const loginError = useSelector(({ error }) => error['login-failed']);
    const loginWithCredentials = ({email, password}) => {
        logIn({
        email: email,
        password: password
    }, dispatch)}
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
      });
     
    const myInput = (props) => <Input {...props} />
    return (
        <Formik
       initialValues={{
         email: '',
         password: ''
       }}
       validationSchema={SignupSchema}
       isInitialValid={false}
       onSubmit={values => {
         loginWithCredentials(values)
       }}
     >
       {({ errors, touched, isValid, dirty }) => (
         <Form className="form">
           {loginError && isValid && <div>{loginError}</div>}
           <Field name="email" type="email" placeholder="email" component={myInput} />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <Field name="password" type="password" placeholder="password" component={myInput} />
           {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}
           <button type="submit" disabled={!(isValid && dirty)}>Log in</button>
         </Form>
       )}
     </Formik>
    )
}

export default LoginPage
