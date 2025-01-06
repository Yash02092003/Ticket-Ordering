import { useEffect, useState } from "react";
import { UseRequest } from "../../hooks/UseRequest"; // Your custom hook
import Router from "next/router"; // Don't forget to import Router
import { useUser } from "../../api/UserContext";

const SignOut = () => {
    // Client-side check: track if the component is mounted
    const [isMounted, setIsMounted] = useState(false);
    const { signOut } = useUser(); // Use the UserContext hook
    
    // Initialize UseRequest hook with parameters
    const { doRequest } = UseRequest({
        url: '/api/users/signout',
        method: 'get',
        body: {},
        onSuccess: () => {
            signOut(); // Clear the user context
            Router.push('/'); // Redirect to homepage after sign-out
        },
    });

    useEffect(() => {
        // Only run the sign-out logic after the component has mounted (on the client-side)
        setIsMounted(true);
    }, []); // This useEffect runs only once on mount (client-side)

    useEffect(() => {
        if (isMounted) {
            console.log('Signing out...');
            doRequest(); // Trigger the sign-out request
        }
    }, [isMounted]); // Trigger the second useEffect after the component is mounted

    return (
        <div>
            <h1>Signing you out...</h1>
        </div>
    );
};

export default SignOut;
