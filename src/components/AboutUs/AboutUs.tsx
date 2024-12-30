import { Flex, Text } from '@chakra-ui/react';
import Vision from '../Home/Vision';
import OurStory from './OurStory';
import BePart from '../Home/BePart';
import Footer from '../Footer';

const AboutUs = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        bgColor={"#FFFFFF"}
        direction={"column"}
      >
        <Flex
          width={{ base: "350px", md: "600px", lg: "800px", xl: "800px" }}
          height={{ base: "100%", md: "180px", lg: "180px", xl: "180px" }}
          justifyContent={"center"}
          alignItems={"center"}
          pt={{ base: "20px", md: "30px", lg: "30px", xl: "30px" }}
          direction={"column"}
          gap={"10px"}
        >
          <Text
            fontFamily={"Poppins"}
            fontWeight={600}
            fontSize={"35px"}
            color={"#515151"}
          >
            About Us
          </Text>
          <Text
            fontFamily={"Poppins"}
            fontWeight={400}
            fontSize={"16px"}
            color={"#515151"}
            textAlign={"center"}
          >
            Our mission is to celebrate and strengthen the bonds between Latin,
            African, and Arabian communities through cultural events,
            educational programs, and collaborative investments. We aim to
            promote diversity, inclusivity, and financial literacy, drawing on
            our shared histories and cultural legacies to build a vibrant,
            empowered community.
          </Text>
        </Flex>
        <Flex>
          <Vision />
        </Flex>
        <Flex>
          <OurStory />
        </Flex>
        <BePart />
        <Footer />
      </Flex>
    </>
  );
}

export default AboutUs;
