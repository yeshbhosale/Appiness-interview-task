import React,{useState} from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../../appiness-logo.png';
import { WELCOME_MESSGAE, LOGIN_MESSGAE, FORGOT_CREDENTIAL_MESSGAE, INCORRECT_PASSWORD_MESSGAE,
    USERNAME_ERROR_MESSGAE, SERVICE_MESSGAE } from '../../utils/constants';

const UserLogin = (props) => {
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [ismatch, setIsmatch] = useState(false);

    const userData = {
        username: "hruday@gmail.com",
        password: "hruday123",
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsmatch(true);
        const credential = {
            username,
            password
        }

        if(JSON.stringify(userData) === JSON.stringify(credential)){
            localStorage.setItem('UserInfo', JSON.stringify(userData.username));
            props.history.push('/');
        }
    }
    return(
        <div className="user_login_popup">
            <div className="container">
                <div className="company_details">
                    <div className="company_logo">
                    <img src={logo} alt="" />
                    </div>
                    <h2>{WELCOME_MESSGAE}</h2>
                    <p>{SERVICE_MESSGAE}</p>
                    <h4><span>Appiness</span> All Around</h4>
                </div>
                <form className="form"
                onSubmit={handleFormSubmit}>
                    <h2>{LOGIN_MESSGAE}</h2>
                    <h2><i className="fas fa-sign-in-alt"></i></h2>
                    <div className="form-control">
                    <label>Username</label>
                    <input 
                        type="email" required
                        placeholder="Enter username" 
                        value={username} 
                        name="username"
                        onChange={e => setUsername(e.target.value)}
                    />
                    {ismatch && username && username !== userData.username &&
                        <div className="error">{USERNAME_ERROR_MESSGAE}</div>
                    }
                    </div>

                    <div className="form-control">
                    <label>Password</label>
                    <input 
                        type="password" required
                        placeholder="Enter password" 
                        value={password} 
                        name="password"
                        onChange={e=> setPassword(e.target.value)}
                    />
                    {ismatch && password  && password !== userData.password  &&
                    <div className="error">{INCORRECT_PASSWORD_MESSGAE}</div>
                    }
                    </div>
                    
                    <button type="submit">SUBMIT</button>
                    <p className="forget_password">{FORGOT_CREDENTIAL_MESSGAE}</p>
                </form>
            </div>
        </div>



    )
}

export default withRouter(UserLogin);