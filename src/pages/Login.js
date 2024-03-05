// import React from "react";
// import { Link } from "react-router-dom";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";

// import CustomInput from "../components/CustomInput";
import "./Login.css";


// import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import React, { useState } from "react";
import { Col, Row, Button, FormGroup, Input } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { storeUser } from "../components/helper";

const initialUser = { password: "", identifier: "" };

const Login = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = `http://localhost:1337/api/auth/local/`;
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          toast.success("Logged in successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate("/");
          // window.location.reload();
        }
      }
    } catch (error) {
      console.log("An error occurred:", error.response);
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };
  return (
    <>
      {/* <Meta title={"Login"} />
      <BreadCrumb title="Login" /> */}
     

      <Row className="login-wrapper py-5 bg-[#f5f5f7]">
        <Col className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <FormGroup className="d-flex flex-column gap-15">
                <Input
                  type="email"
                  name="identifier"
                  value={user.identifier}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </FormGroup>
              <FormGroup className="d-flex flex-column gap-15">
                <Input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                />
              </FormGroup>
              <Link className="text-[#1c1c1b]" to="/forgot-password ">
                      Forgot Password?
                    </Link>
              <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">

              <Button color="primary" className="button border-0 hover:bg-[#318e4c]" onClick={handleLogin}>
                Login
              </Button>
              
                 <Link to="/singup" className="button signup text-white hover:bg-[#206c43]">
                  Sing Up</Link> 
              
              </div>
             
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Login;
