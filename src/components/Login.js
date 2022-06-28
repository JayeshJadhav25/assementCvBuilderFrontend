import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { message } from "antd";

const { REACT_APP_PUBLIC_URL } = process.env;


const LoginPage=()=> { 

    const [formData,setFormData] = useState({
        username:'',
        password:''
    })
    const navigate = useNavigate()

    const { username,password } = formData;
    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value})
    
    const onsubmit=async (e) => {
        
            e.preventDefault();
           
            try {

            const newData = {
                username: username,
                password:password
            }

            const config = {
                headers: {
                    'Content-Type':'application/json'
                }
            }
            const body = JSON.stringify(newData);
            const res = await axios.post(`${REACT_APP_PUBLIC_URL}/user/login`,body , config)
            
            //storing token to local storage
            // alert('login succes')
            localStorage.setItem('token',res.data.token)  
            navigate('/home')            
        } catch(err) {
            console.log('errr',err)
            // if(err.response.status === 400) {
                message.error('Username or password are wrong')
                setFormData({
                    username:'',
                    password:''
               })
            // }
           
        }

}
    
    return (
        <div className="login">
            <section className="container-fluid bg">
            <section className="row justify-content-center">
            <section className="col-12 col-sm-6 col-md-3"> 
                <div className="container">
                    <form className="form-container" action="#" method="POST">
                        <div className="form-group">
                        <label for="exampleInputEmail1">User Name</label>
                            <input type="text"
                             placeholder="username"
                             required 
                             className="form-control"
                             id="exampleInputEmail1" 
                             name='username'
                             value={username}
                             onChange={e=>onChange(e)}

                             aria-describedby="emailHelp">
                             </input>
                     
                    </div>
                    <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" 
                     placeholder="*********"   
                     required
                     className="form-control" 
                     name='password'
                     value={password}
                     onChange={e=>onChange(e)}
                     
                     id="exampleInputPassword1">
      
                     </input>
                    </div>
                    
                    
                    <button type="submit" className="btn btn-danger btn-block" onClick={(e) => onsubmit(e)}>Log in</button>
                   <hr></hr> <p id="ptext">New User ?<Link to='/register' className="btn">Register</Link>
            </p>
                </form>  
            </div>
          </section>
          </section>
          </section>
        </div>
    )
}

export default LoginPage;