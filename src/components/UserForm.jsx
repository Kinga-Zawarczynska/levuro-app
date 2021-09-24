import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import Input from './Input';
import Button from './Button';
import { logOut } from '../utils/logOut';
import { addUser } from '../utils/add-user';
import './UserForm.scss'
import { UPDATE_USER, MAIN } from '../constants/flows';
import { setFlow } from '../state-management/actions/flowActions';
import { updateUser } from '../utils/update-user';

function UserForm({ flow, user, setRememberedUserToken, setPath }) {
	const dispatch = useDispatch();
	const token = useSelector(({ user }) => user.token)
	const userError = useSelector(({ error }) => error['user-failed']);
	const myInput = (props) => <Input {...props} />;

	const isUpdateFlow = flow === UPDATE_USER

	const SignupSchema = Yup.object().shape({
		firstName: Yup.string().required('Required'),
		lastName: Yup.string().required('Required'),
		email: Yup.string().email('Invalid email').required('Required')
	});
	return (
		<Fragment>
            <div className="buttons">
                <Button name="BACK" onClick={() => {
					setPath(MAIN)
					dispatch(setFlow(MAIN))} }/>
                <Button name="LOGOUT" onClick={() => logOut(dispatch, setRememberedUserToken)} />
            </div>
			<Formik
				initialValues={{
					firstName: user?.first_name || '',
					lastName: user?.last_name || '',
					email: user?.email || ''
				}}
				validationSchema={SignupSchema}
				isInitialValid={isUpdateFlow}
				validateOnMount
				onSubmit={(values) => {
					!isUpdateFlow ? addUser(token, values) : updateUser(token, values)
				}}
			>
				{({ errors, touched, isValid, dirty }) => (
					<Form className="form">
						{userError && isValid && <div>{userError}</div>}
						<Field name="firstName" type="firstName" placeholder="firstName" component={myInput} />
						{errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
						<Field name="lastName" type="lastName" placeholder="lastName" component={myInput} />
						{errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
						<Field name="email" type="email" placeholder="email" component={myInput} />
						{errors.email && touched.email ? <div>{errors.email}</div> : null}
						<button type="submit" disabled={!(isValid && dirty)}>
							{flow}
						</button>
					</Form>
				)}
			</Formik>
		</Fragment>
	);
}

export default UserForm;
