import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import AF from "../../assets/Images/af-guy.png";
import BAW from "../../assets/Images/baw.png";
import ams from "../../assets/Images/ams.png";
import { useEffect } from "react";
import WhatWeDo from "./WhatWeDo";
import Vision from "./Vision";
import Programs from "./Programs";
import Events from "./Events";
import Members from "./Members";
import BePart from "./BePart";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
// import Tag from "../Tag";

const Banner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const MotionFlex = motion(Flex);
  const MotionBox = motion(Box);
  const navigate = useNavigate();
  return (
    <>
      <Flex width={"100%"} height={"100%"} direction={"column"}>
        {/* <Tag /> */}
        <Flex
          bgColor={"#000000"}
          width={"100%"}
          height={{ base: "750px", md: "1000px", xl: "700px" }}
          justifyContent={"center"}
          alignItems={"center"}
          direction={{
            base: "column-reverse",
            md: "column-reverse",
            lg: "column-reverse",
            xl: "row",
          }}
          gap={{ base: 0, md: "10px", lg: "20px", xl: "20px" }}
          pt={{ base: 0, md: 0, lg: 0, xl: "80px" }}
          zIndex={1}
        >
          <MotionFlex
            justifyContent={{
              base: "center",
              md: "center",
              lg: "center",
              xl: "start",
            }}
            alignItems={{
              base: "center",
              md: "center",
              lg: "center",
              xl: "start",
            }}
            direction="column"
            mt={{ base: 0, md: 0, lg: 0, xl: "150px" }}
          >
            <MotionFlex
              initial={{ x: "-20%" }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              width={{ base: "300px", md: "500px", lg: "600px", xl: "550px" }}
              height={{ base: "100px", md: "90px", lg: "90px", xl: "100px" }}
              display="inline-flex"
              justifyContent={{
                base: "center",
                md: "center",
                lg: "center",
                xl: "start",
              }}
              alignItems={{
                base: "center",
                md: "center",
                lg: "center",
                xl: "start",
              }}
            >
              <Text
                fontFamily="Poppins"
                fontSize={{ base: "22px", md: "25px", lg: "30px", xl: "40px" }}
                fontWeight={500}
                color="#FFFFFF"
                textAlign={{
                  base: "center",
                  md: "center",
                  lg: "center",
                  xl: "start",
                }}
              >
                Uniting Latin, African, and Arabian Cultures for a Prosperous
                Tomorrow
              </Text>
            </MotionFlex>

            <MotionFlex
              initial={{ x: "30%" }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              width={{ base: "250px", md: "400px", lg: "500px", xl: "500px" }}
              height={{ base: "100px", md: "90px", lg: "90px", xl: "100px" }}
              display="inline-flex"
              justifyContent={{
                base: "center",
                md: "center",
                lg: "center",
                xl: "start",
              }}
              alignItems={{
                base: "center",
                md: "center",
                lg: "center",
                xl: "start",
              }}
              mt={{ base: 0, md: 0, lg: 0, xl: "100px" }}
            >
              <Text
                fontFamily="Poppins"
                fontSize={{ base: "16px", md: "18px", lg: "20px", xl: "20px" }}
                fontWeight={400}
                color="#FFFFFF"
                textAlign={{
                  base: "center",
                  md: "center",
                  lg: "center",
                  xl: "start",
                }}
              >
                Celebrate diversity. Empower communities. Shape our collective
                future.
              </Text>
            </MotionFlex>

            <MotionFlex
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              mt={{ base: "20px", md: "30px", lg: "30px", xl: "0px" }}
            >
              <Button
                width={{ base: "200px", md: "250px", lg: "250px", xl: "250px" }}
                height={{ base: "35px", md: "40px", xl: "40px" }}
                bgColor="#FF3D00"
                borderRadius="8px"
                fontFamily="Poppins"
                fontWeight={{ md: 500, lg: 600 }}
                fontSize={{ md: "15px", lg: "18px" }}
                color="#FFFFFF"
                _hover={{
                  bg: "#FFFFFF",
                  color: "#FF3D00",
                  border: "1px solid #FF3D00",
                }}
                onClick={() => navigate("/community")}
              >
                JOIN THE COMMUNITY
              </Button>
            </MotionFlex>
          </MotionFlex>

          <Flex
            gap={{ base: "5px", md: "15px", lg: "15px", xl: "15px" }}
            pt={{ base: 0, md: 0, lg: 0, xl: "50px" }}
            mb={{ base: "50px", md: 0, lg: 0, xl: 0 }}
          >
            <MotionFlex
              initial={{ y: "-30%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              pt={{ base: "40px", md: "70px", lg: "70px", xl: "80px" }}
            >
              <MotionBox
                width={{
                  base: "115.33px",
                  md: "200px",
                  lg: "200px",
                  xl: "220px",
                }}
                height={{
                  base: "296.4px",
                  md: "550px",
                  lg: "550px",
                  xl: "600px",
                }}
                bgColor={"#0BF3ED"}
                borderRadius={{
                  base: "30px",
                  md: "45px",
                  lg: "50px",
                  xl: "50px",
                }}
                overflow="hidden"
              >
                <Image
                  src={AF}
                  alt="african-guy"
                  width={"100%"}
                  height={"100%"}
                  objectFit={"cover"}
                />
              </MotionBox>
            </MotionFlex>
            <MotionFlex
              initial={{ y: "25%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <MotionBox
                width={{
                  base: "115.33px",
                  md: "200px",
                  lg: "200px",
                  xl: "220px",
                }}
                height={{
                  base: "296.4px",
                  md: "550px",
                  lg: "550px",
                  xl: "600px",
                }}
                bgColor={"#04C4DE"}
                borderRadius={{
                  base: "30px",
                  md: "45px",
                  lg: "50px",
                  xl: "50px",
                }}
                overflow="hidden"
              >
                <Image
                  src={BAW}
                  alt="african-guy"
                  width={"100%"}
                  height={"100%"}
                  objectFit={"cover"}
                />
              </MotionBox>
            </MotionFlex>
            <MotionFlex
              initial={{ y: "-30%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              pt={{ base: "40px", md: "70px", lg: "70px", xl: "80px" }}
            >
              <MotionBox
                width={{
                  base: "115.33px",
                  md: "200px",
                  lg: "200px",
                  xl: "220px",
                }}
                height={{
                  base: "296.4px",
                  md: "550px",
                  lg: "550px",
                  xl: "600px",
                }}
                bgColor={"#FF3D00"}
                borderRadius={{
                  base: "30px",
                  md: "45px",
                  lg: "50px",
                  xl: "50px",
                }}
                overflow="hidden"
              >
                <Image
                  src={ams}
                  alt="african-guy"
                  width={"100%"}
                  height={"100%"}
                  objectFit={"cover"}
                />
              </MotionBox>
            </MotionFlex>
          </Flex>
        </Flex>
        <Flex>
          <WhatWeDo />
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Vision />
        </Flex>
        <Flex>
          <Programs />
        </Flex>
        <Flex>
          <Events />
        </Flex>
        <Flex>
          <Members />
        </Flex>
        <BePart />
        <Footer />
      </Flex>
    </>
  );
};

export default Banner;
