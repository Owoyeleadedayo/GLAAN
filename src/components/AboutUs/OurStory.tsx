import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Story1 from "../../assets/Images/story1.png"
import Story2 from "../../assets/Images/story2.png";
import Story3 from "../../assets/Images/story3.png";
import Story4 from "../../assets/Images/story4.png";

const OurStory = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        px={"15px"}
        my={{ base: "30px", md: "50px", lg: "50px", xl: "80px" }}
      >
        <Flex
          width={{ base: "100%", md: "100%", lg: "1000px" }}
          height={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={{ base: "column", md: "column", lg: "column", xl: "row" }}
          gap={{ base: "10px", md: "20px", lg: "20px", xl: 0 }}
        >
          <Flex
            direction={"column"}
            gap={"5px"}
            width={{ base: "100%", md: "600px", lg: "600px", xl: "450px" }}
            height={{ base: "100%", md: "100%", lg: "100%", xl: "350px" }}
          >
            <Text
              fontFamily={"Poppins"}
              fontWeight={600}
              fontSize={{ base: "28px", md: "30px", lg: "30px", xl: "35px" }}
              color={"#515151"}
              textAlign={{
                base: "center",
                md: "center",
                lg: "center",
                xl: "start",
              }}
            >
              Our Story
            </Text>
            <Text
              fontFamily={"Poppins"}
              fontWeight={400}
              fontSize={{ base: "13px", md: "15px", lg: "15px", xl: "16px" }}
              color={"#515151"}
              textAlign={{
                base: "center",
                md: "center",
                lg: "center",
                xl: "start",
              }}
            >
              Our community was founded with a simple yet powerful idea: to
              bring together people of Latin, African, and Arabian heritage and
              create a space where their shared histories, values, and ambitions
              can thrive. Through our programs and initiatives, we aim to bridge
              the cultural divides, promote understanding, and foster
              collaboration between these diverse communities. By drawing on our
              collective heritage, we believe we can build a brighter future for
              all
            </Text>
          </Flex>
          <Flex gap={"10px"}>
            <Flex
              direction={"column"}
              gap={"10px"}
              pt={{ base: "20px", md: "30px", lg: "30px", xl: "30px" }}
            >
              <Flex>
                <Box width={{ base: "140px", md: "250px" }} height={"100%"}>
                  <Image
                    src={Story1}
                    alt="story"
                    width={"100%"}
                    height={"100%"}
                    objectFit={"contain"}
                  />
                </Box>
              </Flex>
              <Flex>
                <Box width={{ base: "140px", md: "250px" }} height={"100%"}>
                  <Image
                    src={Story2}
                    alt="story"
                    width={"100%"}
                    height={"100%"}
                    objectFit={"contain"}
                  />
                </Box>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={"10px"}>
              <Flex>
                <Box width={{ base: "140px", md: "250px" }} height={"100%"}>
                  <Image
                    src={Story3}
                    alt="story"
                    width={"100%"}
                    height={"100%"}
                    objectFit={"contain"}
                  />
                </Box>
              </Flex>
              <Flex>
                <Box width={{ base: "140px", md: "250px" }} height={"100%"}>
                  <Image
                    src={Story4}
                    alt="story"
                    width={"100%"}
                    height={"100%"}
                    objectFit={"contain"}
                  />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default OurStory;
