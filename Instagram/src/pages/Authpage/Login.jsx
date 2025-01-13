import React, { useState } from "react";
import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { loginUser} from "../../utils/auth";
export default function Login({onAuth}) {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const error ={message: "Login failed"}
        const loading =false;
        const navigate = useNavigate()

        const handleSubmit = async (e) => {
                e.preventDefault();
                try {
                    const user = await loginUser(email, password);
                    onAuth(user);
                    console.log(user)
                    localStorage.setItem(`token`, user.token);
                    navigate(`/?userId=${user.userId}&token=${user.token}`);
                } catch (err) {
                    console.warn("Login Authentication error:", err.response.data);
                }
            };
    return (
        <>
                <Input
				placeholder='Email'
				fontSize={14}
				type='email'
				size={"sm"}
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<Input
				placeholder='Password'
				fontSize={14}
				size={"sm"}
				type='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			{error && (
				<Alert status='error' fontSize={13} p={2} borderRadius={4}>
					<AlertIcon fontSize={12} />
					{error.message}
				</Alert>
			)}
			<Button
				w={"full"}
				colorScheme='blue'
				size={"sm"}
				fontSize={14}
				isLoading={loading}
				onClick={(e) => handleSubmit(e)}
			>
				Log in
			</Button>
        </>
    )
}
