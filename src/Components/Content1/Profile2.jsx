import { Box, Divider, Select, Show, Stat, StatHelpText, StatNumber, Text } from '@chakra-ui/react'
import React from 'react'
import BarGraph from './BarGraph/BarGraph'
import CircularProgressBar from './ProgressBar/ProgressBar'
import '../../App.css'

const Profile2 = () => {

    return (
        <>


            <Box
                // mt={0}
                bg={"white"}
                m={12}

            >
                <Text
                    color="#3e2edf"
                    fontSize="1rem"
                    style={{ fontFamily: 'Lora' }}
                    ml={{ base: "0", lg: "8" }}
                    mb={"2"}
                >
                    Retirement Income
                </Text>
                <Text
                    color="black"
                    fontSize="1.4rem"
                    style={{ fontFamily: 'Lora' }}
                    ml={{ base: "0", lg: "8" }}

                    fontWeight="bold"

                    mb={"2"}
                >
                    Starting Year 2056
                </Text>

                <br />
                {/* @media only screen and (max-width: 600px) {
                } */}

                <Box
                    display={{ base: "block", lg: "flex" }}
                    mb={5}
                >
                    <Stat
                        ml={{ base: "0", lg: "8" }}

                        color={"black"}
                        mb={"2.5"}
                    >
                        <StatNumber fontSize={"2rem"}>$300,000</StatNumber>
                        <StatHelpText
                            color="gray"
                        >
                            My Goal
                        </StatHelpText>
                        <Divider width={{ base: "300px", lg: "230px" }} mr={0} ml={0} borderColor="#3e2edf" />

                    </Stat>
                    <Box display={{ base: "flex" }}>

                        <Stat
                            ml={{ base: "0", lg: "8" }}
                            color={"black"}
                            mb={"2.5"}
                        >
                            <StatNumber fontSize={"2rem"}>59%</StatNumber>
                            <StatHelpText
                                color="gray"
                            >
                                Goal Achieved
                            </StatHelpText>
                            <Divider width={{ base: "130px", lg: "230px" }} mr={0} ml={0} borderColor="#3e2edf" />

                        </Stat>
                        <Stat
                            ml={{ base: "0", lg: "8" }}
                            color={"black"}
                            mb={"3.5"}
                        >
                            <StatNumber fontSize={"2rem"}>$300</StatNumber>
                            <StatHelpText
                                color="gray"
                            >
                                Est. Monthly Income
                            </StatHelpText>
                            <Divider width={{ base: "150px", lg: "230px" }} mr={0} ml={0} borderColor="#3e2edf" />

                        </Stat>
                    </Box>
                </Box>
                <Text
                    color="black"
                    fontSize="1.4rem"
                    style={{ fontFamily: 'Lora' }}
                    ml={{ base: "0", lg: "8" }}
                    fontWeight="bold"
                    mb={"2"}
                >
                    Starting Year 2056
                </Text>
                <Box className='graph'>
                    {/* <Text> for the names</Text> */}
                    <Box
                        display={{ base: "flex", lg: "flex" }} >
                        <Box
                            display={{ base: "block", lg: "flex" }} >
                        >

                            <Text
                                color="gray"
                                fontSize="1rem"
                                ml={{ base: "0", lg: "8" }}
                                fontWeight="bold"
                                mb={"2"}
                            >
                                Exployer:
                            </Text>
                            <Text
                                color="black"
                                fontSize="1rem"
                                ml="2"
                                mr="15"
                                fontWeight="bold"
                                ml={{ base: "", lg: "2" }}
                            >
                                K 73,500
                            </Text>

                        </Box>
                        <Box
                            display={{ base: "block", lg: "flex" }} >
                        >
                            <Text
                                color="gray"
                                fontSize="1rem"
                                ml={{ base: "4", lg: "8" }}
                                fontWeight="bold"
                                mb={"2"}
                            >
                                Exployee:
                            </Text>
                            <Text
                                color="black"
                                fontSize="1rem"
                                ml="2"
                                mr="15"
                                fontWeight="bold"
                                ml={{ base: "4", lg: "2" }}

                            >
                                K 52,500
                            </Text>
                        </Box>
                        <Box
                            display={{ base: "block", lg: "flex" }} >
                        >
                            <Text
                                color="gray"
                                fontSize="1rem"
                                ml={{ base: "4", lg: "8" }}

                                fontWeight="bold"
                                mb={"2"}
                            >
                                Total Interest:
                            </Text>
                            <Text
                                color="black"
                                fontSize="1rem"
                                ml={{ base: "4", lg: "2" }}

                                mr="15"
                                fontWeight="bold"
                                mb={"2"}
                            >
                                K 244,500
                            </Text>
                        </Box>

                    </Box>
                    <BarGraph />
                </Box>
                <br />
                <Text
                    color="black"
                    fontSize="1.4rem"
                    style={{ fontFamily: 'Lora' }}
                    ml="8"
                    fontWeight="bold"
                // mb={"2"}
                >
                    Starting Year 2056
                </Text>
                <Text
                    color="gray"
                    fontSize="1rem"
                    style={{ fontFamily: 'Lora' }}
                    ml="8"
                    // fontWeight="bold"
                    mb={"5"}
                >
                    These number represent current goal achievement
                </Text>
                {/* <br/> */}
                <Box display={"flex"}>
                    <Box >
                        <Box display={"flex"}
                            mb={1}>
                            <Text
                                color="gray"
                                style={{ fontFamily: 'Lora' }}
                                ml="8"
                                fontWeight="bold"
                                mb={"2"}
                            >
                                Age:
                            </Text>
                            <Select
                                placeholder='Under 30 '
                                bg='#ffffff'  // Background color
                                color='gray'    // Text color
                                variant='solid'
                                mt={-2}
                                ml="3"
                                width={"45%"}
                            >
                                <option value='option1'
                                    bg='#ffffff'  // Background color
                                    color='gray'    // Text color
                                >Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Box>
                        <Divider width={"210px"} mr={0} ml={12} borderColor="gray.300" />
                        <Box display={"flex"}
                            mt={3}>
                            <Text
                                color="gray"
                                style={{ fontFamily: 'Lora' }}
                                ml="8"
                                fontWeight="bold"
                                mb={"2"}
                            >
                                Salary:
                            </Text>
                            <Select
                                placeholder='K 20 - K 30 '
                                bg='#ffffff'  // Background color
                                color='gray'    // Text color
                                variant='solid'
                                mt={-2}
                                ml="3"
                                width={"50%"}
                            >
                                <option value='option1'
                                    bg='#ffffff'  // Background color
                                    color='gray'    // Text color
                                >Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Box>
                        <Divider width={"210px"} mr={0} ml={8} borderColor="gray.300" />
                        <Box display={"flex"}
                            mt={3}>
                            <Text
                                color="gray"
                                style={{ fontFamily: 'Lora' }}
                                ml="8"
                                fontWeight="bold"
                                mb={"2"}
                            >
                                Gender:
                            </Text>
                            <Select
                                placeholder='Male '
                                bg='#ffffff'  // Background color
                                color='gray'    // Text color
                                variant='solid'
                                mt={-2}
                                ml="3"
                                width={"35%"}
                            >
                                <option value='option1'
                                    bg='#ffffff'  // Background color
                                    color='gray'    // Text color
                                >Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Box>
                        <Divider width={"210px"} mr={0} ml={8} borderColor="gray.300" />

                    </Box>
                    <Box display={"flex"} ml={8} p={1}>
                        <CircularProgressBar value={78} label="Loading..." />
                        <CircularProgressBar value={95} label="Loading..." />
                        <CircularProgressBar value={59} label="Loading..." />
                    </Box>
                </Box>
                {/* <br /> */}

            </Box >



        </>
    )
}

export default Profile2