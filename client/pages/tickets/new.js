import { UseRequest } from '../../hooks/UseRequest';
import { useState } from 'react';
import Router from 'next/router';  // Ensure you import Router

const NewTicket = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const { doRequest, errors } = UseRequest({
        url: '/api/tickets',
        method: 'post',
        onSuccess: () => Router.push('/')
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        if (doRequest) {
            await doRequest({
                title,
                price
            });  // Pass the dynamic body here
        }
    };

    const onBlur = () => {
        const value = parseFloat(price);
        if (isNaN(value)) {
            return;
        }
        setPrice(value.toFixed(2));  // Ensure price is always a valid number
    };

    return (
        <div>
            <h1>Create a Ticket</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        className="form-control"
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        className="form-control"
                        type="number"
                        step="0.01"  // Allow decimal input
                        value={price}
                        onChange={e => setPrice(parseFloat(e.target.value) || 0)}  // Handle the price change
                        onBlur={onBlur}  // Optional: Ensure correct formatting
                    />
                </div>
                {errors}
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default NewTicket;
