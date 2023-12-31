import { React, useState } from 'react'
import { Flex, Box, Button, Input, Heading, Stack } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ProfileUpdate() {
    const [name, setUserName] = useState("")
    const [email, setEmail] = useState("")

    const Navigate = useNavigate()
    const Edit = () => {
        const id = localStorage.getItem("id")
        axios.put(`https://64876d1ebeba62972790a0f0.mockapi.io/data/users/${id}`, {
            name,
            email,

        }).then(res => {
            localStorage.setItem("id", res.data.id)
            localStorage.setItem("name", res.data.name)
            localStorage.setItem("email", res.data.email)
            console.log(res.data)
        })
        Navigate('./Profile.jsx')
    }

    return (
        <>
            <Flex gap='5'>
                <Box w="40.5em" h="30em" bg="gray.100" mt="5em" borderRadius="20" >
                    <Heading textAlign="center" mt="1em" color="black"> Edit</Heading>
                    <br></br>
                    <Flex justifyContent="center" borderRadius="20">
                        <Stack spacing={3} w="16em" borderRadius="20">
                            <Input bg="white" name="name" placeholder={localStorage.getItem("name")} onChange={(e) => setUserName(e.target.value)} />
                            <Input bg="white" name="email" type="email" placeholder={localStorage.getItem("email")} onChange={(e) => setEmail(e.target.value)} />
                            <Button bg="purple.100"  onClick={() => Edit()}> Edit</Button>
                        </Stack>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}
