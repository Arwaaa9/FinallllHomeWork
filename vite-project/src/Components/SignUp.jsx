import { React, useState } from 'react'
import { Flex, Box, Button, Input, Heading, Stack } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

 function SignUp() {
    const [name, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const Navigate = useNavigate()

    const SignUp = () => {
        let validtion = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (name === "" || email === "" || password === "") {
            alert("")
        } else if (password.length <= 3) {
            alert("password should be more than 3 entrey")
        } else if (email.match(validtion)) {
            axios.post("https://64876d1ebeba62972790a0f0.mockapi.io/data/users", {
                name,
                email,
                password
            }).then(res => {
                console.log(res.data)
                localStorage.setItem("id", res.data.id)
                localStorage.setItem("name", res.data.name)
                localStorage.setItem("email", res.data.email)
            })
            Navigate('/cards')
        }
    }
    return (
        <>
            <Flex gap='5'>
                <Box w="30.5em" h="30em" bg="gray.200" mt="5em" id="signUpBox"  borderRadius="20">
                    <Heading textAlign="center" mt="1em" > Sign Up </Heading>
                    <br></br>
                    <Flex justifyContent="center">
                        <Stack spacing={3} w="16em">
                            <Input bg="white" name="name" placeholder="Enter your username"onChange={(e) => setUserName(e.target.value)} />
                            <Input bg="white" name="email" type="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
                            <Input bg="white" name="password" type="password" placeholder="Enter your Password" onChange={(e) => setPass(e.target.value)} />
                            <Button bg="purple.100" onClick={() => SignUp()}> Sign Up</Button>
                        </Stack>
                    </Flex>
                </Box>
            </Flex>
        </>


    )
}
export default SignUp