import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ChakraProvider, Flex, Image, Text, Box, Heading } from '@chakra-ui/react'
export default function imgDetail() {
    const { id } = useParams()
    const [name, setName] = useState()
    const [avatar, setAvatar] = useState()
    const [desc, setDesc] = useState()

    useEffect(() => {
        axios.get(`https://64876d1ebeba62972790a0f0.mockapi.io/data/imges/${id}`).then(res => {
            setName(res.data.name)
            setAvatar(res.data.avatar)
            setDesc(res.data.desc)
        })
    })
    return (
        <>
            <Flex justifyContent="center" alignItems="center" direction='column-reverse' mt="5em">
                <Flex w="30em">
                    <Box>
                        <Heading>{name}</Heading>
                        <br></br>
                        <Text>{desc}</Text>
                    </Box>
                    <br></br>
                    <Image src={avatar} borderRadius="16em" w="25em"></Image>
                </Flex>
            </Flex>

        </>
    )
}
