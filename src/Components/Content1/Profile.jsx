import React from 'react';
import { WrapItem, Avatar, Flex, Text, Box, Stat, StatNumber, StatHelpText, Select, Divider } from '@chakra-ui/react';
import '../../App.css'

const UserProfile = () => {
    return (
        <>
            <Box
                bg={"#fafafa"}
            // pb={"12"}
            >
                <WrapItem>
                    <Flex align="center" m={14} mb={10}>
                        <Avatar size='lg' name='Christian Nwamba' src='https://bit.ly/code-beast' />

                        <Flex direction="column" ml="4">
                            <Text
                                fontWeight="bold"
                                color="black"
                                fontSize="1.5rem"
                                lineHeight={1.5}
                                style={{ fontFamily: 'Lora' }}
                            >
                                Hi Mike,
                            </Text>
                            <Text color="gray.500">Welcome back!</Text>
                        </Flex>
                    </Flex>
                </WrapItem>
                <Box bg={"#fafafa"}
                    mb={"10"}>
                    <Text
                        color="black"
                        fontSize="1.2rem"
                        style={{ fontFamily: 'Lora' }}
                        ml="14"
                        mb={"2"}
                    >
                        Today
                    </Text>

                    <Stat
                        ml="14"
                        color={"black"}
                        mb={"2.5"}
                    >
                        <StatNumber fontSize={"2rem"}>$19,892</StatNumber>
                        <StatHelpText
                            color="gray"
                        >
                            Account Balance
                        </StatHelpText>
                    </Stat>
                    <Box display={{ base: "flex", lg: "  block" }}>

                        <Stat
                            ml="14"
                            color={"black"}
                            mb={"2.5"}
                        >
                            <StatNumber fontSize={"1rem"}>$4,000</StatNumber>
                            <StatHelpText
                                color="gray"
                            >
                                Year-to-Date Contributions
                            </StatHelpText>
                        </Stat>
                        <Stat
                            ml={{ base: "4", lg: "14" }}
                            color={"black"}
                            mb={"3.5"}
                        >
                            <StatNumber fontSize={"1rem"}>$19,892</StatNumber>
                            <StatHelpText
                                color="gray"
                            >
                                Total Interest
                            </StatHelpText>
                        </Stat>
                    </Box>

                    <Select
                        placeholder='I want to '
                        bg='#3e2edf'  // Background color
                        color='white'    // Text color
                        variant='solid'
                        m={"3"}
                        ml="14"
                        width={{ base: "70%", lg: "34%" }}
                    >
                        <option value='option1'
                            bg='#3e2edf'  // Background color
                            color='white'    // Text color
                        >Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <br />
                    <br />
                    <Text
                        color="black"
                        fontSize="1.2rem"
                        // bg={}
                        style={{ fontFamily: 'Lora' }}
                        ml="14"
                        mb={"2"}
                    >
                        Recent Transactions
                    </Text>
                    <br />


                    {/* the last transcation section */}
                    <Stat ml="14" mr={"5"} color="black" mb="3.5">
                        <StatHelpText color="gray">2020-08-07</StatHelpText>
                        <StatNumber fontSize="1rem">Withdrawal Transfer to Bank-XXX11</StatNumber>
                    </Stat>
                    <Divider width={"253px"} mr={0} ml={14} borderColor="gray.300" />
                    <br />
                    <Stat ml="14" color="black" mb="3.5">
                        <StatHelpText color="gray">2020-08-06</StatHelpText>
                        <StatNumber fontSize="1rem">Withdrawal Transfer to Bank-XXX11</StatNumber>
                    </Stat>
                    <Divider width={"253px"} mr={0} ml={14} borderColor="gray.300" />
                    <br />
                    <Stat ml="14" color="black" mb="4">
                        <StatHelpText color="gray">2020-07-16</StatHelpText>
                        <StatNumber fontSize="1rem">Withdrawal Transfer to Bank-XXX11</StatNumber>
                    </Stat>
                    <Divider width={"253px"} mr={0} ml={14} borderColor="gray.300" />
                    <br />
                    {/* <br />
                <br /> */}
                </Box>
            </Box>
        </>
    );
};

export default UserProfile;
