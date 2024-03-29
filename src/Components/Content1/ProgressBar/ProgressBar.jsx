import { CircularProgress, CircularProgressLabel, Box, Text } from "@chakra-ui/react";

const CircularProgressBar = ({ value, label }) => {
  return (
    <Box textAlign="center" >
      <CircularProgress
        value={value}
        size={{base:"80px",lg:"120px"}}
        thickness="8px"
        textColor={"black"}
        color="#22d6aa"
        fontSize={{base:"4rem",lg:"6rem"}}
        fontWeight={"bold"}
        trackColor="gray.100"
        pl={7}
      >
        <CircularProgressLabel pl={7} >{value}%</CircularProgressLabel>
      </CircularProgress>
      {label && <Text mt="2">{label}</Text>}
    </Box>
  );
};

export default CircularProgressBar;
