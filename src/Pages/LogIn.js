import "./LogIn.css";
import { useFormik } from "formik";
import * as yup from 'yup'
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const LogIn = () => {

    const formik= useFormik({
        initialValues:{
            email: '',
            password: '',
            },

        validationSchema: yup.object({
            email: yup.string().email().required('Email is required'),
            password: yup.string().required('Password is required'), 
        }),
        
            onSubmit: (values, formik ) => {
                fetch("http://localhost:8080/user/" + formik.values.email)
                .then((res)=>{
                 return res.json()
                })
                .then((resp)=>{
                  console.log(resp)
                  if(Object.keys(resp).length===0){
                    toast.error('invalid username')
                  }
                }).catch((err)=>{
                  toast.error('login failed due to:' + err.message)
                })
            }
    })



  return (
    <div className="signup">
      <form className="signup-form" onSubmit={formik.handleSubmit}>
        <h1>Login In</h1>
        <div>
          
          <div className="email">
            <label htmlFor="email" style={formik.touched.email && formik.errors.email ? {color:'red'}:  {color:'black'}}>{formik.touched.email && formik.errors.email ? formik.errors.email : 'Email'}</label>
            <input 
            type="email" 
            placeholder="Enter your Email" 
            id="email" 
            value={formik.values.email} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
          </div>
          <div className="password">
            <label htmlFor="password" style={formik.touched.password && formik.errors.email ? {color:'red'}:  {color:'black'}}>{formik.touched.password && formik.errors.password ? formik.errors.password : 'Password'}</label>
            <input type="password" placeholder="Password" id="password" value={formik.values.password} 
            onChange={formik.handleChange}
            />
          </div>

          <button className="signupbtn">Submit</button>
          <p>Don't have an account? <Link to='/signup'>Sign Up here</Link></p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
