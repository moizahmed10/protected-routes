import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthUserProvider , useAuth } from '../context/AuthUserContext.';

function MyApp({ Component, pageProps }) {
  return <AuthUserProvider><Component {...pageProps} /></AuthUserProvider>
}

export default MyApp