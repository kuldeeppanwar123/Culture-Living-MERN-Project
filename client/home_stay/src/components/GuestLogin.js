import React from "react";
// import { Container } from 'react-bootstrap';
// import { Col, Container, Row } from 'react-bootstrap'
import styles from "../styles/HostLogin.module.css";
import { useFormik } from "formik";
import{Link, useNavigate} from 'react-router-dom'
import { loginGuest } from "../services/homestayService.js";
import { Toaster, toast } from "react-hot-toast";

export default function GuestLogin() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate: "",
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async function (value) {
      console.log(value);
       let responsePromise =  loginGuest(value);
       console.log(responsePromise);
       toast.promise(responsePromise ,{
        loading:"Login...",
        success: <b>Login Successfully</b>,
        error: <b>Wrong Email or Password</b>
       })

       responsePromise.then((res)=>{
        setTimeout(() => {
          let token = res.data.token;
          localStorage.setItem('token',token);
          // sessionStorage.setItem('token',token);
          navigate('/homestays');   
        }, 2000);
       })
    },
  });

  return (
    <div style={{ marginTop: "120px" }}>
      <Toaster position='top-center' reverseOrder={false}/>
      <div className={`${styles.container}`}>
        <h5 className={styles.heading}>Guest Login</h5>
        {/* <h2>hyy</h2> */}
      <form onSubmit={formik.handleSubmit}>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Link className={styles.link} to="/recovery">Forgot Password?</Link>
        <button className={styles.btn}>Login</button>
      </form>
      <div className={styles.line}><span> or </span></div>
      <div className={styles.link}>Don't have an Account? <Link to="/guestsignup">signup</Link></div>
      </div>
    </div>

    // <div style={{marginTop:"120px"}}>
    //     <Container>
    //       {/* <R */}
    //     </Container>
    // </div>
  );
}
