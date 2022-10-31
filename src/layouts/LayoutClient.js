import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const LayoutClient = ({children}) => {
return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
)}

export default LayoutClient;