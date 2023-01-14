import { Button,  HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from "react-icons/ai"

const Upload = () => {
    return (
        <VStack maxW={"VStack.xl"} h={"100vh"} p={"16"} justifyContent={"center"}>
            <VStack color={"purple.500"} justifyContent={"center"} >
                <AiOutlineCloudUpload size={"10vmax"}/>
            </VStack>

            <form>
                <HStack maxW={"300px"} m={"0 auto"}>
                    <Input required type={"file"} css={{
                       "&::file-selector-button":{
                        border:"none",
                        width:"calc(100% + 36px)",
                        height:"100%",
                        marginLeft:"-18px",
                        color:"purple",
                        backgroundColor:"white",
                        cursor:"pointer"
                       } 
                    }} />
                    <Button colorScheme={"purple"} type={"submit"}>Upload</Button>
                </HStack>
            </form>
        </VStack>
    )
}

export default Upload
