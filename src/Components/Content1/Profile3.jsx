import React, { useState } from 'react';
import {
    Box,
    Button,
    Divider,
    Input,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Spacer,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';

const Profile3 = () => {
    const [sliderValue, setSliderValue] = useState(12);
    const [sliderValue2, setSliderValue2] = useState(65);

    const handleSliderChange = (value) => {
        setSliderValue(value);
    };
    const handleSliderChange2 = (value) => {
        setSliderValue2(value);
    };

    const isMobile = useBreakpointValue({ base: true, lg: false });

    return (
        <>
            <Box mt={4} bg="white">
                <Box bg="#EDEDED" borderRadius="3%" m={10} mt={16}>
                    <Text
                        color="black"
                        pr={1}
                        style={{ fontFamily: 'Lora' }}
                        ml={{ base: "2", lg: "6" }}
                        fontSize={{ base: "1.5rem", lg: "1.8rem" }}
                        fontWeight="bold"
                        mb={{ base: "3", lg: "5" }}
                    >
                        Retirement Strategy
                    </Text>
                    <Text
                        color="black"
                        ml={{ base: "2", lg: "8" }}
                        fontSize={{ base: "1rem", lg: "1.2rem" }}
                        mb={{ base: "2", lg: "3" }}
                    >
                        Employee Contribution
                    </Text>
                    <Box ml={{ base: "2", lg: "8" }} mt={2} display="flex">
                        <Slider aria-label="slider-ex-2" color="#87c2f2" defaultValue={sliderValue} width={isMobile ? "100%" : "220px"} onChange={handleSliderChange}>
                            <SliderTrack bg="gray.200">
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                        <Text m={3} ml={4} color="black">
                            {sliderValue}%
                        </Text>
                    </Box>
                    <Text
                        color="black"
                        ml={{ base: "2", lg: "8" }}
                        fontSize={{ base: "1rem", lg: "1.2rem" }}
                        mb={{ base: "2", lg: "3" }}
                    >
                        Retirement Age
                    </Text>
                    <Box ml={{ base: "2", lg: "8" }} mt={2} display="flex">
                        <Slider aria-label="slider-ex-2" color="#87c2f2" defaultValue={sliderValue2} width={isMobile ? "100%" : "220px"} onChange={handleSliderChange2}>
                            <SliderTrack bg="gray.200">
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                        <Text m={3} ml={4} color="black">
                            {sliderValue2}
                        </Text>
                    </Box>
                    <br />
                    <Divider width={isMobile ? "100%" : "300px"} mr={0} ml={{ base: "2", lg: "8" }} borderColor="gray.300" />
                    <br />
                    <Box ml={{ base: "2", lg: "8" }} mr={5} display="flex">
                        <Text color="black" fontWeight="bold">
                            Employer Contribution
                        </Text>
                        <Spacer />
                        <Text color="black">8.4%</Text>
                    </Box>
                    <br />
                    <Box ml={{ base: "2", lg: "8" }} mr={5} display="flex">
                        <Text color="black" fontWeight="bold">
                            Interest Rate
                        </Text>
                        <Spacer />
                        <Text color="black">5%</Text>
                    </Box>
                    <br />
                    <Button ml={{ base: "2", lg: "8" }} width={isMobile ? "100%" : { base: "280px", lg: "85%",xl:"330" }} height={50} bg="#4935ff" variant="solid">
                        Update
                    </Button>
                    <br />
                    <br />
                    <a>
                        <Text ml={{ base: "2", lg: "8" }} fontSize="strong" align="center" color="#4935ff" width={isMobile ? "100%" : "315px"} height={50}>
                            View Help Docs >
                        </Text>
                    </a>
                </Box>
                <Box>
                    <Stack direction="row" h="130px" ml={isMobile ? 10 : 10}>
                        <Divider orientation="vertical" borderColor="#4935ff" borderWidth="2px" />
                        <Box flexDirection="column" p={1}>
                            <Text color="black" ml={isMobile ? 2 : 7} fontSize="1rem" mb={2}>
                                Are you considering a
                            </Text>
                            <Text color="black" ml={isMobile ? 2 : 7} fontSize="1rem" fontWeight="bold" mb={2.5}>
                                Housing Advance ?
                            </Text>
                            <Text color="gray.400" ml={isMobile ? 2 : 7} fontSize="1rem" mb={2}>
                                Limited time reduced interest
                            </Text>
                            <a>
                                <Text ml={isMobile ? 2 : 7} fontWeight="bold" color="#4935ff" width={isMobile ? "100%" : "315px"} height={50}>
                                    View Help Docs >
                                </Text>
                            </a>
                        </Box>
                    </Stack>
                </Box>
                <br />
                <br />
                <br />
                <br />
                <br />
            </Box>
        </>
    );
};

export default Profile3;
