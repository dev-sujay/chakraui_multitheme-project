import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p: '4'
};

const MyCarousel = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={1000}
            showStatus={false}
            showArrows={false}
            dynamicHeight
        >
            <Box w={'full'} h={'100vh'} >
                <Image src={img1} h={"full"} w={"full"} objectFit={"cover"}/>
                <Heading bg={'blackAlpha.600'}
                    color={'white'} {...headingOptions} top={["15%", "50%"]}>Watch the future</Heading>
            </Box>
            <Box w={'full'} h={'100vh'}>
                <Image src={img2} h={"full"} w={"full"} objectFit={"cover"}/>
                <Heading bg={'whiteAlpha.900'}
                    color={'black'} {...headingOptions} top={["15%", "50%"]}>Future is gaming</Heading>
            </Box>
            <Box w={'full'} h={'100vh'}>
                <Image src={img3} h={"full"} w={"full"} objectFit={"cover"}/>
                <Heading bg={'whiteAlpha.600'}
                    color={'black'} {...headingOptions} top={["15%", "50%"]}>Gaming on Console</Heading>
            </Box>
            <Box w={'full'} h={'100vh'}>
                <Image src={img4} h={"full"} w={"full"} objectFit={"cover"}/>
                <Heading bg={'whiteAlpha.600'}
                    color={'black'} {...headingOptions} top={["15%", "50%"]}>Night life is cool</Heading>
            </Box>
        </Carousel>
    );
};

const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container minH={"100vh"} maxW={"Container.xl"} p={"16"}
            className="services-container"
            >
                <Heading textTransform={"uppercase"} py={2}
                    w={"fit-content"} borderBottom={'2px solid'}
                    m={"auto"}>
                    Services
                </Heading>

                <Stack
                    h={"full"}
                    p={"4"}
                    alignItems={"center"}
                    direction={["column", "row"]}
                >
                    <Image src={img5} filter={"hue-rotate(-130deg)"} h={["40", "359"]} />

                    <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={"center"} >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et tempore, accusantium temporibus, nulla pariatur nemo assumenda optio rem iste quidem velit mollitia dolor obcaecati quia animi ullam adipisci perferendis numquam quos porro deserunt. Assumenda iure eaque officiis error! Eius natus deserunt maxime, suscipit, voluptate tempora libero numquam maiores aperiam harum atque velit excepturi rerum! Laborum dignissimos tempora distinctio a et veniam eveniet exercitationem obcaecati quam sit ratione porro consequatur.
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
};

export default Home;
