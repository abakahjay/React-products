
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../utils/auth";

export function Authpage ({ onAuth }){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = isRegistering
                ? await registerUser(email, password)
                : await loginUser(email, password);
            onAuth(user);
            navigate("/");
        } catch (err) {
            console.error("Authentication error:", err.message);
        }
    };

    return (
        <div>
            <h1>{isRegistering ? "Register" : "Login"}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">{isRegistering ? "Register" : "Login"}</button>
            </form>
            <button onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? "Switch to Login" : "Switch to Register"}
            </button>
        </div>
    );
};
