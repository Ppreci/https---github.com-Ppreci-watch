import "./SignUp.css";
import { useFormik } from "formik";
import * as yup from 'yup'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from "react-toastify";



const SignUp = () => {

  const navigate = useNavigate()

    const formik= useFormik({
        initialValues:{
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },

        validationSchema:yup.object({
            username: yup.string().max(20, 'Name must not be more than 20').required('Name is required'),
            email: yup.string().email('Enter a Valid Email').required('Email is required'),
            password: yup.string().min(5, 'password is too short').required('Password is required'),
            confirmPassword: yup.string().oneOf([yup.ref('password',), null], 'passwords do not match').required('Confirm Password is required')
        }),


        
            onSubmit: (values) => {
                
                // console.log(values);
                
                fetch(' http://localhost:8080/user',{
                    method: "POST",
                    headers: {'content-type':'application/json'},
                    body: JSON.stringify(values)
                }).then((res)=>{
                  console.log(values);
                    toast.success('Sign Up Succesful')
                    navigate('/login')
                }).catch((err)=>{

                })
            }
    });


  return (
    <div className="signup">
      <form className="signup-form" onSubmit={formik.handleSubmit}>
        <h1>Sign Up</h1>
        <div>
          <div className="username">
            <label htmlFor="username" style={formik.touched.username && formik.errors.username ? {color:'red'}:  {color:'black'}}>
                {formik.touched.username && formik.errors.username ? formik.errors.username : 'Name'}
            </label>
            <input 
            type="text" 
            placeholder="Username" 
            id="username" 
            value={formik.values.username} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
          </div>
          <div className="email">
            <label htmlFor="email" style={formik.touched.email && formik.errors.email ? {color:'red'}:  {color:'black'}}>
                {formik.touched.email && formik.errors.email ? formik.errors.email : 'Email'}
            </label>
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
            <label htmlFor="password" style={formik.touched.password && formik.errors.password ? {color:'red'}:  {color:'black'}}>
                {formik.touched.password && formik.errors.password ? formik.errors.password : 'Password'}
            </label>
            <input 
            type="password" 
            placeholder="Password" 
            id="password" 
            value={formik.values.password} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
          </div>
          <div className="password">
            <label htmlFor="confirmPassword" style={formik.touched.confirmPassword && formik.errors.confirmPassword ? {color:'red'}:  {color:'black'}}>
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : 'Confirm Password'}
            </label>
            <input 
            type="password" 
            placeholder="Confirm Password" 
            id="confirmPassword" 
            value={formik.values.confirmPassword} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
          </div>
          <button className="signupbtn">Sign Up</button>
          <p>Already have an account? <Link to='/login'>Sign In here</Link></p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
