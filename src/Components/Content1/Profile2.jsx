import React from 'react';
import {
    Box,
    Divider,
    Select,
    Stat,
    StatHelpText,
    StatNumber,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import BarGraph from './BarGraph/BarGraph';
import CircularProgressBar from './ProgressBar/ProgressBar';
import '../../App.css';

const Profile2 = () => {
    const isMobile = useBreakpointValue({ base: true, lg: false });

    return (
        <>
            <Box bg="white" m={isMobile ? 12 : 12} mb={0}>
                <Text
                    color="#3e2edf"
                    fontSize={{ base: "1rem", lg: "1.4rem" }}
                    style={{ fontFamily: 'Lora' }}
                    ml={{ base: "0", lg: "8" }}
                    mb={{ base: "2", lg: "3" }}
                >
                    Retirement Income
                </Text>
                <Text
                    color="black"
                    fontSize={{ base: "1.4rem", lg: "1.8rem" }}
                    style={{ fontFamily: 'Lora' }}
                    ml={{ base: "0", lg: "8" }}
                    fontWeight="bold"
                    mb={{ base: "2", lg: "3" }}
                >
                    Starting Year 2056
                </Text>

                <Box display={{ base: "block", lg: "flex" }} mb={5}>
                    <Stat ml={{ base: "0", lg: "8" }} color="black" mb={2.5}>
                        <StatNumber fontSize="2rem">$300,000</StatNumber>
                        <StatHelpText color="gray">My Goal</StatHelpText>
                        <Divider width={{ base: "100%", lg: "200px" }} mb={2} mr={0} ml={0} borderColor="#3e2edf" />
                    </Stat>
                    <Box display={{ base: "flex" }}>
                        <Stat ml={{ base: "0", lg: "2" }} color="black" mb={2.5}>
                            <StatNumber fontSize="2rem">59%</StatNumber>
                            <StatHelpText color="gray">Goal Achieved</StatHelpText>
                            <Divider width={{ base: "100%", lg: "200px" }} mb={2} mr={0} ml={0} borderColor="#3e2edf" />
                        </Stat>
                        <Stat ml={{ base: "0", lg: "14" }} color="black" mb={3.5}>
                            <StatNumber fontSize="2rem">$300</StatNumber>
                            <StatHelpText color="gray">Est. Monthly Income</StatHelpText>
                            <Divider width={{ base: "100%", lg: "200px" }} mb={2} mr={0} ml={0} borderColor="#3e2edf" />
                        </Stat>
                    </Box>
                </Box>

                <Text
                    color="black"
                    fontSize={{ base: "1.4rem", lg: "1.8rem" }}
                    style={{ fontFamily: 'Lora' }}
                    ml={{ base: "0", lg: "8" }}
                    fontWeight="bold"
                    mb={{ base: "2", lg: "3" }}
                >
                    Starting Year 2056
                </Text>

                <Box className='graph'>
                    <Box display={{ base: "flex", lg: "flex" }} >
                        <Box display={{ base: "block", lg: "flex" }}>
                            <Text
                                color="gray"
                                fontSize="1rem"
                                ml={{ base: "0", lg: "8" }}
                                fontWeight="bold"
                                mb={2}
                            >
                                Exployer:
                            </Text>
                            <Text
                                color="black"
                                fontSize="1rem"
                                ml={{ base: "2", lg: "2" }}
                                mr="15"
                                fontWeight="bold"
                                ml={{ base: "", lg: "2" }}
                            >
                                K 73,500
                            </Text>
                        </Box>
                        <Box display={{ base: "block", lg: "flex" }}>
                            <Text
                                color="gray"
                                fontSize="1rem"
                                ml={{ base: "4", lg: "8" }}
                                fontWeight="bold"
                                mb={2}
                            >
                                Exployee:
                            </Text>
                            <Text
                                color="black"
                                fontSize="1rem"
                                ml={{ base: "2", lg: "2" }}
                                mr="15"
                                fontWeight="bold"
                                ml={{ base: "4", lg: "2" }}
                            >
                                K 52,500
                            </Text>
                        </Box>
                        <Box display={{ base: "block", lg: "flex" }}>
                            <Text
                                color="gray"
                                fontSize="1rem"
                                ml={{ base: "4", lg: "8" }}
                                fontWeight="bold"
                                mb={2}
                            >
                                Total Interest:
                            </Text>
                            <Text
                                color="black"
                                fontSize="1rem"
                                ml={{ base: "2", lg: "2" }}
                                mr="15"
                                fontWeight="bold"
                                mb={2}
                            >
                                K 244,500
                            </Text>
                        </Box>
                    </Box>
                    <BarGraph ml={{ base: "4", lg: "5" }} width={isMobile ? "140%" : "100%"} />
                </Box>
                <br />
                <Text
                    color="black"
                    fontSize="1.4rem"
                    style={{ fontFamily: 'Lora' }}
                    ml={{ base: "0", lg: "8" }}
                    fontWeight="bold"
                >
                    Starting Year 2056
                </Text>
                <Text
                    color="gray"
                    fontSize="1rem"
                    style={{ fontFamily: 'Lora' }}
                    ml={{ base: "0", lg: "8" }}
                    mb={5}
                >
                    These numbers represent current goal achievement
                </Text>

                <Box display={{ base: "block", lg: "flex" }}>
                    <Box>
                        <Box display="flex" mb={1}>
                            <Text
                                color="gray"
                                style={{ fontFamily: 'Lora' }}
                                ml={{ base: "0", lg: "8" }}
                                fontWeight="bold"
                                mb={2}
                            >
                                Age     :
                            </Text>
                            <Select
                                placeholder='Under 30 '
                                bg='#ffffff'
                                color='gray'
                                variant='solid'
                                mt={-2}
                                ml="3"
                                width={isMobile ? "83%" : "50%"}
                            >
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Box>
                        <Divider width={isMobile ? "100%" : "290px"} mb={2} mr={0} ml={{ base: "0", lg: "8" }} borderColor="gray.300" />

                        <Box display="flex" mt={3}>
                            <Text
                                color="gray"
                                style={{ fontFamily: 'Lora' }}
                                ml={{ base: "0", lg: "8" }}
                                fontWeight="bold"
                                mb={2}
                            >
                                Salary :
                            </Text>
                            <Select
                                placeholder='K 20 - K 30 '
                                bg='#ffffff'
                                color='gray'
                                variant='solid'
                                mt={-2}
                                ml="3"
                                width={isMobile ? "76.2%" : "55%"}
                            >
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Box>
                        <Divider width={isMobile ? "100%" : "290px"} mb={2} mr={0} ml={{ base: "0", lg: "8" }} borderColor="gray.300" />

                        <Box display="flex" mt={3}>
                            <Text
                                color="gray"
                                style={{ fontFamily: 'Lora' }}
                                ml={{ base: "0", lg: "8" }}
                                fontWeight="bold"
                                mb={2}
                            >
                                Gender :
                            </Text>
                            <Select
                                placeholder='Male '
                                bg='#ffffff'
                                color='gray'
                                variant='solid'
                                mt={-2}
                                ml="3"
                                width={isMobile ? "72.99%" : "35%"}
                            >
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Box>
                        <Divider width={isMobile ? "100%" : "290px"} mb={2} mr={0} ml={{ base: "0", lg: "8" }} borderColor="gray.300" />
                    </Box>
                    <Box display="flex" ml={{ base: isMobile ? "-4" : "-10", lg: "8" }} p={{ base: "2", lg: "4" }}>
                        <CircularProgressBar value={78} label="Loading..." />
                        <CircularProgressBar value={95} label="Loading..." />
                        <CircularProgressBar value={59} label="Loading..." />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Profile2;
