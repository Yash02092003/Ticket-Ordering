import { useUser } from '../api/UserContext';  // Import the custom User context
import Router from 'next/router';  // For redirecting after sign-out

const Header = () => {
    // Access user state and signOut function from context
    const { user, signOut } = useUser();

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">MyApp</a>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {/* If user is signed in, show "Sign Out", else show "Sign In" */}
                            {user ? (
                                <>
                                    <li className="nav-item">
                                        <span className="navbar-text">
                                            Welcome, {user.email} {/* Display user email */}
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <button 
                                            className="btn btn-outline-danger" 
                                            onClick={() => Router.push('/auth/signout')}>
                                            Sign Out
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                <li className="nav-item">
                                    <button 
                                        className="btn btn-outline-primary" 
                                        onClick={() => Router.push('/auth/signin')}>
                                        Sign In
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button 
                                        className="btn btn-outline-primary" 
                                        onClick={() => Router.push('/auth/signup')}>
                                        Sign Up
                                    </button>
                                </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
