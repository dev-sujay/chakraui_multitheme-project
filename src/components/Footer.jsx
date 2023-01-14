import React from 'react'
import { Box, Button, Heading, HStack, Input, Stack, VStack, Text } from '@chakra-ui/react'
import { AiOutlineSend } from "react-icons/ai"

const Footer = () => {
    return (
        <Box
            bg={"blackAlpha.900"}
            minH={"40"}
            w={"100%"}
            p={"16"}
            color={"white"}
            className="footer"
        >
            <Stack direction={["column", "row"]}>
                <VStack
                    alignItems={"stretch"}
                    w={"full"}
                    px={"4"}>
                    <Heading size={"md"} textTransform={"uppercase "} textAlign={["center", "left"]}>
                        subscribe to get updates
                    </Heading>
                    <HStack
                        borderBottom={"2px solid white"}>
                        <Input
                            placeholder='Enter Email Here...'
                            border={"none"}
                            borderRadius={"none"}
                            outline={"none"}
                            focusBorderColor={"none"}
                            variant='flushed'
                        />
                        <Button
                            p={"0"}
                            colorScheme={"purple"}
                            variant={"ghost"}
                            borderRadius={"0 20px 20px 0"}
                        >
                            <AiOutlineSend />
                        </Button>
                    </HStack>
                </VStack>
                <VStack w={"full"} borderLeft={["none", "1px solid white"]}
                    borderRight={["none", "1px solid white"]}>
                    <Heading textTransform={"uppercase"} textAlign={"center"}>
                        Video Hub
                    </Heading>
                    <Text>All Rights Reserved</Text>
                </VStack>
                <VStack w={"full"}>
                    <Heading size={"md"} textTransform={"uppercase"}>
                        Socieal Media
                    </Heading>

                    <Button variant={"link"} colorScheme={"white"}>
                        <a href="https://youtube.com" target={"blank"} >Youtube</a>
                    </Button>

                    <Button variant={"link"} colorScheme={"white"}>
                        <a href="https://instagram.com" target={"blank"} >Instagram</a>
                    </Button>

                    <Button variant={"link"} colorScheme={"white"}>
                        <a href="https://github.com" target={"blank"} >Github</a>
                    </Button>
                </VStack>
            </Stack>

        </Box>
    )
}

export default Footer
