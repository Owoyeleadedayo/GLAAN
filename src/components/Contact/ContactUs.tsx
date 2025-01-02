import { Button, Checkbox, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import BGI from "../../assets/Images/bgi.png";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "../Footer";

const ContactUs = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Flex
          width={{ base: "350px", md: "600px", lg: "800px", xl: "600px" }}
          height={{ base: "100%", md: "180px", lg: "180px", xl: "180px" }}
          justifyContent={"center"}
          alignItems={"center"}
          pt={{ base: "20px", md: "30px", lg: "30px", xl: "0px" }}
          mb={"80px"}
          direction={"column"}
          gap={"10px"}
        >
          <Text
            fontFamily={"Poppins"}
            fontWeight={600}
            fontSize={"35px"}
            color={"#515151"}
          >
            Contact Us
          </Text>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
            gap={"5px"}
          >
            <Text
              fontFamily={"Poppins"}
              fontWeight={600}
              fontSize={"18px"}
              color={"#515151"}
            >
              We’d Love to Hear from You
            </Text>
            <Text
              fontFamily={"Poppins"}
              fontWeight={400}
              fontSize={"16px"}
              color={"#515151"}
              textAlign={"center"}
            >
              Whether you have a question, want to collaborate, or simply want
              to learn more, feel free to reach out. We’re here to connect with
              you.
            </Text>
          </Flex>
        </Flex>
        <Flex
          width={"100%"}
          height={"100%"}
          bgImage={BGI}
          bgSize={"cover"}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          py={"80px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex
            width={{ base: "380px", md: "550px" }}
            height={"100%"}
            px={"20px"}
            py={"40px"}
            bg={"#FFFFFFA3"}
            direction={"column"}
            gap={"20px"}
            borderRadius={"8px"}
            boxShadow={"2xl"}
          >
            <Flex direction={"column"}>
              <Text
                fontFamily={"Poppins"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#515151"}
              >
                Name
              </Text>
              <Input
                type={"text"}
                width={"100%"}
                height={"40px"}
                bg={"#F2F2F2"}
                px={"7px"}
                border={"1px solid #515151"}
                borderRadius={"8px"}
                fontFamily={"Poppins"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#515151"}
              />
            </Flex>
            <Flex direction={"column"}>
              <Text
                fontFamily={"Poppins"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#515151"}
              >
                Email Address
              </Text>
              <Input
                type={"email"}
                width={"100%"}
                height={"40px"}
                bg={"#F2F2F2"}
                px={"7px"}
                border={"1px solid #515151"}
                borderRadius={"8px"}
                fontFamily={"Poppins"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#515151"}
              />
            </Flex>
            <Flex direction={"column"}>
              <Text
                fontFamily={"Poppins"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#515151"}
              >
                Message
              </Text>
              <Textarea
                width={"100%"}
                height={"180px"}
                p={"10px"}
                placeholder="Type your message..."
                bgColor={"#F2F2F2"}
                border={"1px solid #515151"}
                borderRadius={"8px"}
                fontFamily={"Poppins"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#515151"}
              />
            </Flex>
            <Flex alignItems="center" gap="5px">
              <Checkbox size="lg" />
              <Text
                fontFamily="Poppins"
                fontWeight={400}
                fontSize="14px"
                color="#515151"
              >
                I accept the Terms{" "}
              </Text>
            </Flex>
            <Flex>
              <Button
                width={"100px"}
                height={"40px"}
                bgColor={"#FF3D00"}
                color={"#FFFFFF"}
                border={"none"}
                fontFamily={"Poppins"}
                fontWeight={500}
                fontSize={"16px"}
                borderRadius={"8px"}
              >
                Submit
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width={"100%"}
          height={"150px"}
          bg={"#E0E0E0"}
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
          gap={"10px"}
          my={"50px"}
        >
          <Text
            fontFamily={"Poppins"}
            fontWeight={600}
            fontSize={"22px"}
            color={"#515151"}
          >
            Follow our social media
          </Text>
          <Flex gap={"15px"}>
            <MdFacebook fontSize={"32px"} color="#515151" />
            <FaInstagram fontSize={"30px"} color="#515151" />
            <FaXTwitter fontSize={"28px"} color="#515151" />
            <FaLinkedin fontSize={"30px"} color="#515151" />
            <FaYoutube fontSize={"32px"} color="#515151" />
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default ContactUs;
