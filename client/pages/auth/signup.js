import { useState } from 'react';
import Router from 'next/router';
import { UseRequest } from '../../hooks/UseRequest';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Call the UseRequest hook at the top level of the component
    const { doRequest, errors } = UseRequest({
        url: '/api/users/signup',
        method: 'post',
        onSuccess: () => Router.push('/'),
    });

    // Handle form submission
    const onSubmit = async (event) => {
        event.preventDefault();

        // Ensure doRequest is available and call it with dynamic body
        if (doRequest) {
            await doRequest({ email, password });  // Pass the dynamic body here
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <h1>Sign Up</h1>
            <div className="form-group">
                <label>Email Address</label>
                <input
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {errors && <div className="alert alert-danger">{errors}</div>}
            <button className="btn btn-primary">Sign Up</button>
        </form>
    );
};

export default SignUp;
