import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PP from "../../assets/Images/pro.png"
import EDU from "../../assets/Images/educate.png";
import Collab from "../../assets/Images/collab.png";
import FIN from "../../assets/Images/financial.png";

const Programs = () => {
    const prog = [
      {
        Image: PP,
        title: "Events",
        text: "Empowering Our Communities through Action",
      },
      {
        Image: EDU,
        title: "Educational Programs",
        text: "Enhancing mutual understanding through education and storytelling.",
      },
      {
        Image: Collab,
        title: "Collaborative Investments",
        text: "Building wealth through cooperative investments and entrepreneurship.",
      },
      {
        Image: FIN,
        title: "Financial Literacy Workshops",
        text: "Empowering our community with the knowledge to achieve economic freedom.",
      },
    ];
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        pt={{ base: "30px", md: "50px", lg: "50px", xl: "50px" }}
        pb={{base: "100px", }}
        direction={"column"}
        gap={{ base: "20px", md: "30px", lg: "35px", xl: "40px" }}
      >
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"5px"}
        >
          <Text
            fontFamily={"Poppins"}
            fontWeight={600}
            fontSize={"28px"}
            color={"#515151"}
          >
            Programs
          </Text>
          <Text
            fontFamily={"Poppins"}
            fontWeight={500}
            fontSize={{ base: "14px", md: "15px", lg: "15px", xl: "16px" }}
            color={"#515151"}
          >
            Empowering Our Communities through Action
          </Text>
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={"25px"}
          flexWrap={"wrap"}
        >
          {prog.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Flex
                width={"280px"}
                height={"380px"}
                bgColor={"#D9D9D9"}
                direction={"column"}
                gap={"20px"}
                borderRadius={"8px"}
                boxShadow={"0px 8px 15px rgba(0, 0, 0, 0.2)"}
                position={"relative"}
                overflow={"hidden"}
              >
                <Box width={"280px"} height={"180px"}>
                  <Image
                    src={item.Image}
                    width={"100%"}
                    height={"100%"}
                    alt="programs"
                    objectFit={"cover"}
                    borderTopRadius={"8px"}
                  />
                </Box>
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  direction={"column"}
                  gap={"4px"}
                  px={"10px"}
                >
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={"16px"}
                    fontWeight={500}
                    color={"#515151"}
                  >
                    {item.title}
                  </Text>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={"14px"}
                    fontWeight={500}
                    color={"#515151"}
                    textAlign={"center"}
                  >
                    {item.text}
                  </Text>
                </Flex>
                <motion.div
                  //   initial={{ opacity: 0 }}
                  //   whileHover={{ opacity: 1 }}
                  //   transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <Button variant={"none"} bg={"#FF3D00"} color={"#FFFFFF"}>
                    Explore
                  </Button>
                </motion.div>
              </Flex>
            </motion.div>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

export default Programs;
