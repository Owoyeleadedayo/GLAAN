import { Box, Flex, Image, Text } from "@chakra-ui/react";
import WWD from '../../assets/Images/whatwedo.png'
import WWa from "../../assets/Images/whatweare.png";

const WhatWeDo = () => {
  return (
    <>
      <Flex
        bgColor={"#FFFFFF"}
        width={"100%"}
        direction={{ base: "column" }}
        gap={"30px"}
        justifyContent={"center"}
        alignItems={"center"}
        pt={{ base: "30px", md: "50px", lg: "50px", xl: "150px" }}
        pb={{ base: "30px", md: "25px", lg: "30px", xl: "70px" }}
      >
        <Flex
          direction={{ base: "column", md: "row", lg: "row", xl: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={{ base: "0px", md: "20px", lg: "20px", xl: "30px" }}
        >
          <Flex
            width={{ base: "320px", md: "350px", lg: "400px", xl: "500px" }}
            height={{ base: "210px", md: "247px", lg: "247px", xl: "247px" }}
            direction={"column"}
            gap={"5px"}
          >
            <Text
              fontFamily={"Poppins"}
              fontSize={{ base: "20px", md: "22px", lg: "24px", xl: "28px" }}
              fontWeight={500}
              color={"#515151"}
              textAlign={{ base: "center", md: "start" }}
            >
              Who We Are
            </Text>
            <Text
              fontFamily={"Poppins"}
              fontSize={{ base: "13px", md: "13px", lg: "14px", xl: "16px" }}
              fontWeight={400}
              color={"#515151"}
              textAlign={{ base: "center", md: "start" }}
            >
              Our community is a thriving collective of individuals and
              organizations from Latin, African, and Arabian backgrounds, united
              by a shared passion for cultural celebration, mutual support, and
              collaborative growth. We celebrate our diversity, promote
              inclusivity, and strive to create opportunities for personal and
              communal empowerment.
            </Text>
          </Flex>
          <Box
            width={{ base: "320px", md: "350px", lg: "400px", xl: "500px" }}
            height={{ base: "220px", md: "230px", lg: "250px", xl: "300px" }}
          >
            <Image
              src={WWD}
              width={"100%"}
              height={"100%"}
              objectFit={"cover"}
              borderRadius={"4px"}
            />
          </Box>
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={{ base: "0px", md: "20px", lg: "20px", xl: "30px" }}
          direction={{ base: "column", md: "row-reverse", lg: "row-reverse" }}
        >
          <Flex
            width={{ base: "320px", md: "350px", lg: "400px", xl: "500px" }}
            height={{ base: "170px", md: "247px", lg: "247px", xl: "247px" }}
            direction={"column"}
            gap={"5px"}
          >
            <Text
              fontFamily={"Poppins"}
              fontSize={{ base: "20px", md: "22px", lg: "24px", xl: "28px" }}
              fontWeight={500}
              color={"#515151"}
              textAlign={{ base: "center", md: "start" }}
            >
              What We Do
            </Text>
            <Text
              fontFamily={"Poppins"}
              fontSize={{ base: "13px", md: "13px", lg: "14px", xl: "16px" }}
              fontWeight={400}
              color={"#515151"}
              textAlign={{ base: "center", md: "start" }}
            >
              Our community is active and engaged in a wide range of cultural,
              educational, and economic activities. Whether you’re interested in
              attending events, joining educational programs, or collaborating
              on business ventures, there’s always something happening in our
              network.
            </Text>
          </Flex>
          <Box
            width={{ base: "320px", md: "350px", lg: "400px", xl: "500px" }}
            height={{ base: "220px", md: "230px", lg: "250px", xl: "300px" }}
          >
            <Image
              src={WWa}
              width={"100%"}
              height={"100%"}
              objectFit={"cover"}
              borderRadius={"4px"}
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default WhatWeDo;
