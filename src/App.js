import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import { ToastContainer ,toast } from "react-toastify";
import  { Toaster } from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import Success from "./Success";
import Logout from "./pages/Login"
import Login from "./pages/Login";
import Singup from "./pages/Signup"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Mainpage from "./pages/Mainpage";
function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                < ToastContainer />
    <Toaster position='top-center' />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="Success" element={<Success />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="Logout" element={<Logout />} />
                    <Route path="Singup" element={<Singup />} />
                    <Route path="About" element={<About />} />
                    <Route path="Contact" element={<Contact />} />
                    <Route path="Mainpage" element={<Mainpage />} />
                   
                </Routes>
               
    <WhatsAppWidget
        phoneNo="918490059352"
        position="right"
        widgetWidth="300px"
        widgetWidthMobile="300px"
        autoOpen={true}
        autoOpenTimer={5000}
        messageBox={true}
        messageBoxTxt=""
        iconSize="50"
        iconColor="white"
        iconBgColor="#206c43"
        headerIcon="./images/rntalhub.jpg"
        headerIconColor="pink"
        headerTxtColor="white"
        headerBgColor="#206c43"
        headerTitle="RentalHub"
        headerCaption="Welcome To Rental Hub"
        bodyBgColor=""
        chatPersonName="Support"
        chatMessage={
          <>
            Hi there 👋
            <br />
            How can I help you?
          </>
        }
        footerBgColor="#999"
        btnBgColor="#206c43"
        btnTxtColor="white"
        btnTxt="Start Chat"
      />

                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
