import React,{useState} from 'react';
// import './register.css';
import axios from 'axios';
import { Link, Navigate,useNavigate } from 'react-router-dom';
import { message } from "antd";

const { REACT_APP_PUBLIC_URL } = process.env;


const RegisterPage=()=> { 
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        email:'',
        password:'',
        username:'',
        contactNumber:'',
        confirmPassword:''
    })
    const { email,password,username,contactNumber,confirmPassword } = formData;
    // let history = useHistory();

    // const onChange = e => setFormData({...formData,[e.target.name]:e.target.value})
    const onChange = (e) => {
        // console.log(e.target.name,e.target.value)
        const re = /^[0-9\b]+$/;
    
        if (
          e.target.name == 'contactNumber' &&
          (!re.test(e.target.value) || e.target.value.length == 11)
        ) {
          if (e.target.value != '') {
            return;
          }
        }

        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const onsubmit=async (e) => {
        
            e.preventDefault();
            // console.log(email,password,username)
            if(email == "" || password == "" || username == "" || contactNumber == "" || confirmPassword == "") {
                message.error('All fields are compulsory');
                return;

            }
            if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            {
                message.error('You have entered an invalid email address');
                return;
            }
            if(password != confirmPassword ) {
                message.error('password does not match');
                return;
            }
            if(password.length < 6  || password.length > 12) {
                message.error('password length must be between 6 to 12');
                return;
            }
            if(contactNumber.length > 11 ) {
                message.error('password length must be between 6 to 12');
                return;
            }
            try {
            const newData = {
                email: email,
                password:password,
                username:username,
                contactNumber:contactNumber
            }
            const config = {
                headers: {
                    'Content-Type':'application/json'
                }
            }

            const body = JSON.stringify(newData);
            const res = await axios.post(`${REACT_APP_PUBLIC_URL}/user/register`,body , config)

            message.success('Registered Succcesfully')
            navigate('/login');
        } catch(err) {
            console.log('err',err.response);
                message.error(err.response.data.msg)
                setFormData({
                    email:'',
                    password:'',
                    username:'',
                    contactNumber:'',
                    confirmPassword:""
               })
        } 
        
    }

    return (
        <div>
        <section class="container-fluid bg">
        <section class="row justify-content-center">
          <section class="col-12 col-sm-6 col-md-3"> 
            <div class="container">
                <form class="form-container" action="signup_teacher.php" method="POST">
                   
                    <div class="form-group">
                    <label for="username">Username</label>
                        <input type="text" 
                         placeholder="Username"
                         required 
                         class="form-control" 
                         id="teacher_name"
                         name="username" 
                         value={username}
                         onChange={e=>onChange(e)}

                         >
                         </input>
                    </div>

                     <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email"
                         placeholder="name@gmail.com"
                         class="form-control" 
                         id="exampleInputEmail1" 
                         aria-describedby="emailHelp"
                         name="email"
                         value={email}
                         onChange={e=>onChange(e)}
                         required="required"
                         >

                         </input>
                    </div>
                      
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <div class="input-group">
                            <input type="password" 
                            placeholder="********"
                            required 
                            class="form-control" 
                            data-toggle="password"
                            id="exampleInputPassword1"
                            name="password"
                            value={password}
                            onChange={e=>onChange(e)}
                            />
                        </div>

                        <label for="exampleInputPassword1">Confirm Password</label>
                        <div class="input-group">
                            <input type="password" 
                            placeholder="********"
                            required 
                            class="form-control" 
                            data-toggle="password"
                            id="exampleInputPassword1"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={e=>onChange(e)}
                            />
                        </div>



                    <div class="form-group">
                    <label for="contactNumber">Contact Number</label>
                        <input type="text" 
                         placeholder="8899112233"
                         required 
                         class="form-control" 
                         id="teacher_name"
                         name="contactNumber" 
                         value={contactNumber}
                         onChange={e=>onChange(e)}

                         >
                         </input>
                    </div>

                   </div>
                   <button type="submit" className="btn btn-danger btn-block" onClick={(e) => onsubmit(e)}>Sign up</button>
                   <hr></hr> <p id="ptext">Already have an account?<Link to='/login' className="btn">login</Link>
                            </p>
                </form>  
            </div>
          </section>
          </section>
          </section>
        </div>
    )
}

export default RegisterPage;