import { React, useState, useEffect } from 'react'
import { Box, Flex, Grid, Card, Stack, Heading, CardBody, Divider, CardFooter, Button, ButtonGroup, Image, Input } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Galary() {
    const [msg, setMsg] = useState("Nothing matches :( ")
    const [search, setSearch] = useState([])
    const [data, setData] = useState([])
    const Navigate = useNavigate()
 
    useEffect(() => {
        axios.get("https://64876d1ebeba62972790a0f0.mockapi.io/data/imges").then((res) => {
            setData(res.data)
            setSearch(res.data)
            console.log(res.data)
        })
    }, [])

    const handleChange = event => {
        setSearch(data.filter(item => (item.name.toLowerCase().includes(event.target.value))));

    };
    return (
        <>
            <br></br>
            <Flex justifyContent="center" alignItems="center" m="1.5em">
                <Box>
                    <Input m="10" width={1000} height={10} name="search" placeholder="search..." onChange={handleChange} />
                </Box>

            </Flex>

            <Flex alignItems="center" justifyContent="center" id="flexCard">
                <Grid templateColumns='repeat(2, 1fr)' gap={6} id="cardGrid">
                    {
                        search == "" ? msg :
                            search.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <Card maxW='sm'>
                                            <CardBody>
                                                <Image
                    src={item.avatar}
                                                    borderRadius='ms'
                                                />
                                                <Stack mt='3' spacing='3'>
                                                    <Heading size='md'>{item.name}</Heading>
            </Stack>
                                            </CardBody>
                                            <Divider />
                                            <CardFooter>
      <Button onClick={() => Navigate(`/cards/${item.id}`)}>
                                                    More
                                                </Button>
                                            </CardFooter>
                                        </Card>

                                    </div>
                                )
                            })}

                </Grid>
            </Flex>
        </>

    )
}
