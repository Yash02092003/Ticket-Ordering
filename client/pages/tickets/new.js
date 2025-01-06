import { UseRequest } from '../../hooks/UseRequest';
import { useState } from 'react';
const NewTicket = () => {
    const [title , setTitle] = useState('');
    const [price , setPrice] = useState('');
    const { doRequest , errors } = UseRequest({
        url : '/api/tickets',
        method : 'post' ,
        onSuccess : () => Router.push('/')
    })

    const onSubmit = async (event) => {
        event.preventDefault();
        if (doRequest) {
            await doRequest({
                title , price
            });  // Pass the dynamic body here
        }
    }

    const onBlur = () => {
        const value = parseFloat(price);
        if(isNaN(value)){
            return;
        }
        setPrice(value.toFixed(2));
    }

    return (
        <div>
            <h1>Create a Ticket</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" onChange={e => setTitle(e.target.value)} value={title}/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input className="form-control"/>
                </div>
                {errors}
                <button className="btn btn-primary" onChange={e => setTitle(e.target.value)} onBlur={onBlur} value={price}>Submit</button>
            </form>
        </div>
    )
}

export default NewTicket;