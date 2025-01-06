import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';
import { UserProvider } from '../api/UserContext';

const MyApp = ({ Component, pageProps, currentUser }) => {
    return (
        // Wrap the entire application in the UserProvider and pass the currentUser as the initial state
        <UserProvider initialUser={currentUser}>
            <Header />
            <div className='container'>
            <Component {...pageProps} currentUser = {currentUser}/>
            </div>
        </UserProvider>
    );
};

MyApp.getInitialProps = async (appContext) => {
    const client = buildClient(appContext.ctx);
    const { data } = await client.get('/api/users/currentuser');

    let pageProps = {};
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx ,client , data.currentUser);
    }

    return {
        pageProps,
        currentUser: data || null,  // Pass currentUser from getInitialProps
    };
};

export default MyApp;
