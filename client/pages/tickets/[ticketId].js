import { UseRequest } from "../../hooks/UseRequest";
import Router from 'next/router';
const TicketShow = ({ ticket }) => {
    const { doRequest, errors } = UseRequest({
        url: '/api/orders',
        method: 'post',
        onSuccess: (order) => Router.push('/orders/[orderId]', `/orders/${order.id}`)
    });

    const purchaseTicket = async () => {
        if(doRequest){
            await doRequest({ ticketId: ticket.id });
        }
    }

    return <div>
        <h1>{ticket.title}</h1>
        <h4>Price: {ticket.price}</h4>
        {errors}
        <button className='btn btn-primary' onClick={purchaseTicket}>Purchase</button>
    </div> ;
}

TicketShow.getInitalProps = async (context, client) => {
    const { ticketId } = context.query;
    const { data } = await client.get(`/api/tickets/${ticketId}`);
    return { ticket: data };
}

export default TicketShow;