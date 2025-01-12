import { useUser } from "../api/UserContext";
import Link from "next/link";
import buildClient from "../api/build-client";

// Named component to display tickets
const Named = ({ currentUser, tickets }) => {
  // Render ticket list dynamically
  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td> {/* Correctly display title */}
        <td>{ticket.price}</td> {/* Correctly display price */}
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            <a>View</a>
          </Link>
        </td>
      </tr>
    );
  });

  const { user, signOut } = useUser(); // Assuming this context is used for user state management

  return (
    <div>
      <h1>Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
  );
};

// Fetch data server-side
export async function getServerSideProps(context) {
  const client = buildClient(context); // Instantiate your client

  let data = null;
  try {
    const response = await client.get("/api/users/currentuser");
    data = response.data; // Fetch current user
  } catch (error) {
    // Handle error (user might be null if not signed in)
    data = null;
  }

  // Fetch tickets
  let tickets = [];
  try {
    const response = await client.get("/api/tickets");
    tickets = response.data; // Fetch tickets
  } catch (error) {
    // Handle error (could show a fallback or empty ticket list)
    tickets = [];
  }

  return {
    props: { currentUser: data, tickets },  // Return both currentUser and tickets
  };
}

export default Named;
