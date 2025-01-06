import axios from 'axios';
import { useState, useEffect } from 'react';

function UseRequest({ url, method, onSuccess }) {
    const [errors, setErrors] = useState(null);
    const [isClient, setIsClient] = useState(false);  // Track if we're on the client

    useEffect(() => {
        setIsClient(true);  // Set to true after component mounts
    }, []);

    const doRequest = async (body) => {
        console.log('doRequest called with body:', body);
        if (!isClient) return; // Prevent server-side execution
        try {
            console.log('doRequest called with body:', body);
            setErrors(null);
            const response = await axios[method](url, body);  // Use the dynamic body
            if (onSuccess) {
                onSuccess(response.data);
            }
            return response.data;
        } catch (err) {
            setErrors(
                <div className="alert alert-danger">
                    <h4>Oooops...</h4>
                    <ul className="my-0">
                        {err.response?.data?.errors?.map((err) => (
                            <li key={err.message}>{err.message}</li>
                        ))}
                    </ul>
                </div>
            );
        }
    };

    return { doRequest, errors };
}

export { UseRequest };
