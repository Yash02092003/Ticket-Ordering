import axios from "axios";
import buildClient from "../api/build-client";
import { useUser } from "../api/UserContext";

const Named = ({ currentUser }) => {
    const { user, signOut } = useUser();
    return (
        user ? <h1>You are signed in</h1> : <h1>You are Not signed in</h1>
    )
}

export async function getServerSideProps(context) {
    const client = buildClient(context);
    let data = null;
  
    try {
      const response = await client.get("/api/users/currentuser");
      data = response.data; // This will be null or an empty object after sign-out
    } catch (error) {
      // If no user is signed in, the data will be null
      data = null;
    }
  
    return {
      props: { currentUser: data },  // Send the currentUser as null after sign-out
    };
    return {};
  }
  

// Named.getInitalProps = async (context) => {
//     // if(typeof window === 'undefined'){
//     //     //we are on the server!
//     //     //requests should be made to http://SERVICE_NAME.NAMESPACE.svc.cluster.local
//     //     //NameSpace :- ingress-nginx
//     //     //Service Name :- ingress-nginx-controller
//     //     const { data } = await axios.get('http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser' , {
//     //         headers : req.headers
//     //     });

//     // }
//     // else{
//     //     //we are on the browser!
//     //     //requests can be made with a base url of ''
//     //     const { data } = await axios.get('/api/users/currentuser');
//     //     // { currentUser } is the same as currentUser : currentUser
//     //     return data;
//     // }

//     //Getting an Instance of axios with some preConfigured properties
//     const client = buildClient(context);
//     const { data } = await client.get('/api/users/currentuser');
//     return data;
// }


export default Named;