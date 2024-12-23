import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Vis from "../../assets/Images/vision.png"
import Mis from "../../assets/Images/mission.png";

const Vision = () => {
    const slideInFromLeft = {
      hidden: { x: -200, opacity: 0 }, 
      visible: { x: 0, opacity: 1 },
    };
    const slideInFromRight = {
      hidden: { x: 200, opacity: 0 },
      visible: { x: 0, opacity: 1 },
      
    };
  return (
    <>
      <Flex
        pt={{ base: "50px", md: "80px", lg: "80px", xl: "100px" }}
        pb={"50px"}
        gap={{ base: "40px", md: "20px", lg: "20px", xl: "40px" }}
        direction={{ base: "column", md: "row", lg: "row", xl: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <motion.div
          animate="visible"
          whileInView={{ opacity: 1, x: 0 }}
          variants={slideInFromLeft}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <Flex
            width={{ base: "320px", md: "350px", lg: "400px", xl: "450px" }}
            height={{ base: "400px", md: "400px", lg: "400px", xl: "350px" }}
            bgColor={"#FAF7F7CC"}
            borderRadius={"8px"}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            p={"20px"}
            gap={"20px"}
            transition={"all 0.3s ease-in-out"}
            boxShadow={"0px 8px 15px rgba(0, 0, 0, 0.2)"}
            cursor={"pointer"}
            _hover={{
              bg: "#F9E6E0",
            }}
          >
            <Box width={"70px"} height={"55px"}>
              <Image
                src={Vis}
                alt="vision"
                width={"100%"}
                height={"100%"}
                objectFit={"cover"}
              />
            </Box>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
            >
              <Text
                fontSize={{ base: "20px", md: "22px", lg: "24px", xl: "24px" }}
                fontWeight={600}
                fontFamily={"Poppins"}
                color={"#515151"}
              >
                Vision
              </Text>
              <Text
                fontSize={{ base: "14px", md: "13px", lg: "13px", xl: "15px" }}
                fontWeight={400}
                fontFamily={"Poppins"}
                color={"#515151"}
                textAlign={"center"}
              >
                To build a dynamic, interconnected community that honors the
                rich heritage and shared histories of Black races across Latin,
                African, and Arabian cultures, fostering mutual understanding,
                economic empowerment, and a collective future of prosperity.
              </Text>
            </Flex>
          </Flex>
        </motion.div>

        <motion.div
          animate="visible"
          whileInView={{ opacity: 1, x: 0 }}
          variants={slideInFromRight}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Flex
            width={{ base: "320px", md: "350px", lg: "400px", xl: "450px" }}
            height={{ base: "420px", md: "400px", lg: "400px", xl: "350px" }}
            bgColor={"#FAF7F7CC"}
            borderRadius={"8px"}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            px={"20px"}
            gap={"10px"}
            transition={"all 0.3s ease-in-out"}
            boxShadow={"0px 8px 15px rgba(0, 0, 0, 0.2)"}
            cursor={"pointer"}
            _hover={{
              bg: "#F9E6E0",
            }}
          >
            <Box width={"80px"} height={"80px"} mb={"10px"} mt={"20px"}>
              <Image
                src={Mis}
                alt="vision"
                width={"100%"}
                height={"100%"}
                objectFit={"cover"}
              />
            </Box>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
            >
              <Text
                fontSize={{ base: "20px", md: "22px", lg: "24px", xl: "24px" }}
                fontWeight={600}
                fontFamily={"Poppins"}
                color={"#515151"}
              >
                Mission
              </Text>
              <Text
                fontSize={{ base: "14px", md: "13px", lg: "13px", xl: "15px" }}
                fontWeight={400}
                fontFamily={"Poppins"}
                color={"#515151"}
                textAlign={"center"}
              >
                Our mission is to celebrate and strengthen the bonds between
                Latin, African, and Arabian communities through cultural events,
                educational programs, and collaborative investments. We aim to
                promote diversity, inclusivity, and financial literacy, drawing
                on our shared histories and cultural legacies to build a
                vibrant, empowered community.
              </Text>
            </Flex>
          </Flex>
        </motion.div>
      </Flex>
    </>
  );
}

export default Vision;
