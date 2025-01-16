import React, { useState } from "react";
import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import { loginUser} from "../../utils/auth";

import useAuthStore from "../../store/useAuthStore";
import useAuth from "../../hooks/useAuthw";
import useShowToast from "../../hooks/useShowToast";
export default function Login({onAuth}) {
		const { error,user,isLoading,loginUser} = useAuthStore();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate()
		const show =useShowToast()

        const handleSubmit = (e) => {
                e.preventDefault();
				loginUser(email, password);
				onAuth(user);
				console.log(user)
				if(user){
					localStorage.setItem(`token`, user.token);
					navigate(`/?userId=${user.userId}&token=${user.token}`);
				}
				if(error){
					show("Error", error, "error")
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
					{error}
				</Alert>
			)}
			<Button
				w={"full"}
				colorScheme='blue'
				size={"sm"}
				fontSize={14}
				isLoading={isLoading}
				onClick={(e) => handleSubmit(e)}
			>
				Log in
			</Button>
        </>
    )
}
