import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from "react-icons/bi"

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                pos={"fixed"}
                top={4}
                left={4}
                colorScheme="purple"
                p={0}
                w={10}
                h={10}
                borderRadius={'full'}
                onClick={onOpen}
                zIndex={"overlay"}
            >
                <BiMenuAltLeft size={20} />
            </Button>

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement={'left'}>

                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Video Hub</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={"flex-start"}>
                            <Button
                                onClick={onClose}
                                variant={"ghost"}
                                colorScheme={"purple"}>
                                <Link to={"/"}>Home</Link>
                            </Button>
                            <Button
                                onClick={onClose}
                                variant={"ghost"}
                                colorScheme={"purple"}>
                                <Link to={"/videos"}>Videos</Link>
                            </Button>
                            <Button
                                onClick={onClose}
                                variant={"ghost"}
                                colorScheme={"purple"}>
                                <Link to={"/videos?category=free"}>Free Videos</Link>
                            </Button>
                            <Button
                                onClick={onClose}
                                variant={"ghost"}
                                colorScheme={"purple"}>
                                <Link to={"/upload"}>Upload Videos</Link>
                            </Button>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter>
                        <HStack w={"100%"} justifyContent={"space-evenly"}>
                            <Button
                                onClick={onClose}
                                colorScheme={"purple"}>
                                <Link to={"/login"}>Log In</Link>
                            </Button>
                            <Button
                                onClick={onClose}
                                variant={"outline"}
                                colorScheme={"purple"}>
                                <Link to={"/signup"}>Sign Up</Link>
                            </Button>
                        </HStack>
                    </DrawerFooter>
                </DrawerContent>

            </Drawer>
        </>
    )
}

export default Header
