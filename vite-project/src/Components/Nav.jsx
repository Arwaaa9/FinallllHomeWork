import React from 'react'
import { Button, Flex, Heading, Box, Spacer } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
export default function Nav() {
    const id = localStorage.getItem("id")
    const Navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        Navigate('/')
    }
    return (
        <div>
            <Flex bg="purple.100" alignItems="center" gap="5" h="8em ">

                <Heading textAlign="center" ml="1em"> ARWA </Heading>
                <Spacer />
                {
     id ? <Box direction="column"><h1> hello ! </h1> <Button  onClick={() => Navigate('/Profile')}>{localStorage.getItem("name")}</Button>  <Button m="2em" onClick={() => logout()}>Logout</Button> </Box> : <Button m="2em" onClick={() => Navigate('/SignUp')}>  Sign Up </Button>
                }
            </Flex>
        </div>
    )
}
