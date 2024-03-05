// import React from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import { Link } from "react-router-dom";
// import Container from "../components/Container";
// import CustomInput from "../components/CustomInput";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { Col, Row, Button, FormGroup, Input } from "reactstrap";

const initialUser = { email: "", password: "", username: "" };
const Signup = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const url = `http://localhost:1337/api/auth/local/register`;
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        if (!!res) {
          toast.success("Registered successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };
  return (
    <>
      {/* <Meta title={"Sign Up"} /> */}
      {/* <BreadCrumb title="Sign Up" /> */}

    


      <Row className=" login-wrapper py-5 bg-[#f5f5f7]">
      <Col className="row">
        <div className="col-12">
          <div className="auth-card">
          <h3 className="text-center mb-3">Sign up</h3>
          <FormGroup className="d-flex flex-column gap-15">
            <Input
              type="text"
              name="username"
              value={user.username}
              onChange={handleUserChange}
              placeholder="Enter your full name"
            />
          </FormGroup>
          <FormGroup className="d-flex flex-column gap-15">
            <Input
              type="email"
              name="email"
              value={user.email}
              onChange={handleUserChange}
              placeholder="Enter your email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={handleUserChange}
              placeholder="Enter password"
            />
          </FormGroup>
          <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
          <Button color="primary" className="button border-0 hover:bg-[#318e4c]" onClick={signUp}>
            Sign up
          </Button>
          </div>
          
          </div>
          
        </div>
      </Col>
    </Row>
    
    </>
  );
};

export default Signup;
