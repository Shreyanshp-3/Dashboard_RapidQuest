import { Box, Divider, Select, Show, Stat, StatHelpText, StatNumber, Text } from '@chakra-ui/react'
import React from 'react'
import BarGraph from './BarGraph/BarGraph'
import CircularProgressBar from './ProgressBar/ProgressBar'
import '../../App.css'

const Profile2 = () => {

    return (
        <>


            <Box

                bg={"white"}
                m={12}
                mb={0}

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
                        <Divider width={{ base: "280px", lg: "230px" }} mr={0} ml={0} borderColor="#3e2edf" />

                    </Stat>
                    <Box display={{ base: "flex" }}>

                        <Stat
                            ml={{ base: "0", lg: "2" }}
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
                            ml={{ base: "0", lg: "14" }}
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
                            display={{ base: "block", lg: "flex" }}
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
                            display={{ base: "block", lg: "flex" }}
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
                            display={{ base: "block", lg: "flex" }}
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
                    <BarGraph ml={{ base: "4", lg: "5" }} width={{ sm: "140%", lg: "100%" }} />
                </Box>
                <br />
                <Text
                    color="black"
                    fontSize="1.4rem"
                    style={{ fontFamily: 'Lora' }}
                    ml={{ base: "0", lg: "8" }}
                    fontWeight="bold"
                // mb={"2"}
                >
                    Starting Year 2056
                </Text>
                <Text
                    color="gray"
                    fontSize="1rem"
                    style={{ fontFamily: 'Lora' }}
                    ml={{ base: "0", lg: "8" }}
                    // fontWeight="bold"
                    mb={"5"}
                >
                    These number represent current goal achievement
                </Text>
                {/* <br/> */}
                <Box display={{ base: "block", lg: "flex" }}>
                    <Box >
                        <Box display={"flex"}
                            mb={1}>
                            <Text
                                color="gray"
                                style={{ fontFamily: 'Lora' }}
                                ml={{ base: "0", lg: "8" }}
                                fontWeight="bold"
                                mb={"2"}
                            >
                                Age     :
                            </Text>
                            <Select
                                placeholder='Under 30 '
                                bg='#ffffff'  // Background color
                                color='gray'    // Text color
                                variant='solid'
                                mt={-2}
                                ml="3"
                                width={{ base: "83%", lg: "50%" }}
                            >
                                <option value='option1'
                                    bg='#ffffff'  // Background color
                                    color='gray'    // Text color
                                >Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Box>
                        <Divider width={{ base: "290px", lg: "210px" }} mb={{ base: "2" }} mr={0} ml={{ base: "0", lg: "8" }} borderColor="gray.300" />
                        <Box display={"flex"}
                            mt={3}>
                            <Text
                                color="gray"
                                style={{ fontFamily: 'Lora' }}
                                ml={{ base: "0", lg: "8" }}
                                fontWeight="bold"
                                mb={"2"}
                            >
                                Salary :
                            </Text>
                            <Select
                                placeholder='K 20 - K 30 '
                                bg='#ffffff'  // Background color
                                color='gray'    // Text color
                                variant='solid'
                                mt={-2}
                                ml="3"
                                width={{ base: "76.2%", lg: "55%" }}
                            >
                                <option value='option1'
                                    bg='#ffffff'  // Background color
                                    color='gray'    // Text color
                                >Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Box>
                        <Divider width={{ base: "290px", lg: "210px" }} mb={{ base: "2" }} mr={0} ml={{ base: "0", lg: "8" }} borderColor="gray.300" />
                        <Box display={"flex"}
                            mt={3}>
                            <Text
                                color="gray"
                                style={{ fontFamily: 'Lora' }}
                                ml={{ base: "0", lg: "8" }}
                                fontWeight="bold"
                                mb={"2"}
                            >
                                Gender :
                            </Text>
                            <Select
                                placeholder='Male '
                                bg='#ffffff'  // Background color
                                color='gray'    // Text color
                                variant='solid'
                                mt={-2}
                                ml="3"
                                width={{ base: "72.99%", lg: "35%" }}
                            >
                                <option value='option1'
                                    bg='#ffffff'  // Background color
                                    color='gray'    // Text color
                                >Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </Box>
                        <Divider width={{ base: "290px", lg: "210px" }} mb={{ base: "2" }} mr={0} ml={{ base: "0", lg: "8" }} borderColor="gray.300" />

                    </Box>
                    <Box display={"flex"} ml={{ base: "-10", lg: "8" }} p={{ base: "2", lg: "4" }}>
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