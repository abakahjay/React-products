import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import {registerUser } from "../../utils/auth";
import useAuth from "../../hooks/useAuthw";
import useAuthStore from "../../store/useAuthStore";
export default function Signup({onAuth}) {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [username, setUsername] = useState("");
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const navigate = useNavigate();
        const [showPassword, setShowPassword] = useState(false);
		// const {registerUser,error,user,isLoading,logoutUser,loginUser}=useAuth()
		const {registerUser,error,user,isLoading,logoutUser,loginUser}=useAuthStore();

		// console.log({registerUser,error,user,isLoading,logoutUser,loginUser})

        // const error ={message: "Signup failed"}

        const handleSubmit = async (e) => {
                e.preventDefault();
                // try {
                    registerUser(email, password,firstName,lastName,username)
                    onAuth(user);
                    console.log(user)
					if (user){
						localStorage.setItem(`token`, user.token);
						navigate(`/?userId=${user.userId}&token=${user.token}`);
					}
                // } catch (err) {
                //     console.error("Signup error:", err.message);
                // }
        };
		// console.log(error)
    return (
        <>
			<Input
					placeholder='First Name'
					fontSize={14}
					size={"sm"}
					type='text'
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
			<Input
					placeholder='Last Name'
					fontSize={14}
					size={"sm"}
					type='text'
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
			<Input
					placeholder='User Name'
					fontSize={14}
					size={"sm"}
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			<Input
					placeholder='Email'
					fontSize={14}
					type='email'
					size={"sm"}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			<InputGroup>
            <Input
				placeholder='Password'
				fontSize={14}
				size={"sm"}
				type={showPassword ? "text" : "password"}
				value={password}
				onChange={(e) => setPassword(e.target.value)}
            />
				<InputRightElement h='full'>
					<Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? <ViewIcon /> : <ViewOffIcon />}
					</Button>
				</InputRightElement>
			</InputGroup>
			{error && (
				<Alert status='error' fontSize={13} p={2} borderRadius={4}maxW={300}>
					<AlertIcon fontSize={12} />
					<Text flexWrap={'wrap'}>{error}</Text>
					
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
				Sign Up
			</Button>
        </>
    )
}
