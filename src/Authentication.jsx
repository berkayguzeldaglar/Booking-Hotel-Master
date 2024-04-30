import { useContext } from "react";
import { UserContext } from "./App";
import { supabase } from "./main";
import { useNavigate } from "react-router-dom";

export default function Authentication() {
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    async function handleRegister(e) {

        e.preventDefault();
        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);
        console.log(formObj)
        
        let { data, error } = await supabase.auth.signUp(formObj)
  
    }

    async function handleLogin(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);
        console.log(formObj)

        
        let { data, error } = await supabase.auth.signInWithPassword(formObj)
        if(!error) {
            setUser(data.user);
            navigate('/')
        }
        
    }

    return (
        <div className="outlet-page">
            <div className="authentication">

            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="line"></div>
                <input name="email" placeholder="Email" type="email" />
                <input name="password" placeholder="Password" type="password" />
                <button>Login</button>
            </form>
            <form onSubmit={handleRegister}>
                <h1>Register</h1>
                <div className="line"></div>
                <input name="name" placeholder="Name" type="text" required/>
                <input name="lastname" placeholder="Last Name" type="text" required />
                <input name="email" placeholder="Email" type="email" required />
                <input name="password" placeholder="Password" type="password" required />
                <button>Register</button>
            </form>

            </div>
        </div>
    )
}