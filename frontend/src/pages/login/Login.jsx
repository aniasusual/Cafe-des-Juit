
import React, {useState} from 'react'

import "./login.scss";
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {

    const [credentials, setCredentials] = useState({email:"", password:""})

    let navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        // const response = await fetch("http://localhost:4000/api/loginuser",{
        const response = await fetch("https://cafejuit.onrender.com/api/loginuser",{

            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:credentials.email, password: credentials.password})
        });

        const json = await response.json()
        console.log(json);

        if(json.success){
            localStorage.setItem("userEmail", credentials.email);

            localStorage.setItem("authToken", json.authToken);
            navigate("/")
        }
        else 
        {
            alert("Invalid Credentials")
        }

    }

    const onChange=(e)=>{
        setCredentials({...credentials, [e.target.name]:e.target.value})
    }



    return (
        <div className="contain">

            <h1>Cafe des Juit</h1>
            <div className="login">
                <div className="left">
                    <h2>Food and gossip.</h2>
                    <h3>
                        We welcome you to the cafe of JUIT. 
                        We help you to order food without standing 
                        in long queues and share gossips.
                    </h3> 
                    <span>This project is developed by Animesh 201567</span>
                </div>

                <div className="right">

                    <h3>Login</h3>

                    <form className="form" onSubmit={handleSubmit}>
                        
                        <input type="username" name='email' className="email" placeholder="Username" value={credentials.email} onChange={onChange}/>
                        <input type="password" name='password' className="password" placeholder="Password" value={credentials.password} onChange={onChange}/>
                        <Link to="/Register">
                            <span>Don't have an account?</span>
                        </Link>
                        <button type="submit">Submit</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
