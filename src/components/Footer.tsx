import { Box, Flex, Image, Input, Link, Text } from "@chakra-ui/react";
import Logo from "../assets/Images/glaanLogo.png";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const linkItem = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Events", href: "/events" },
    { name: "Community", href: "/community" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        bgColor={"#000000"}
        py={{ base: "20px", md: "30px", lg: "30px" }}
        // justifyContent={"center"}
        // alignItems={"center"}
        direction={"column"}
      >
        <Flex
          width={"100%"}
          px={{ base: "30px", md: "25px", lg: "100px" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={{ base: "column", md: "row" }}
          gap={{ base: "20px" }}
        >
          <Flex
            width={{ base: "100%", md: "50%", lg: "50%", xl: "50%" }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Flex mb={"80px"}>
              <Box width={"100%"}>
                <Image src={Logo} width={"100%"} height={"100%"} />
              </Box>
            </Flex>
            <Flex direction={"column"} mb={"30px"}>
              <Flex mb={"5px"}>
                <Text
                  fontFamily={"Poppins"}
                  fontSize={"16px"}
                  fontWeight={600}
                  color={"#FFFFFF"}
                >
                  Quick Access
                </Text>
              </Flex>
              {linkItem.map((item, index) => (
                <Link key={index} href={item.href} cursor={"pointer"}>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={"14px"}
                    fontWeight={300}
                    color={"#FFFFFF"}
                  >
                    {item.name}
                  </Text>
                </Link>
              ))}
            </Flex>
          </Flex>
          <Flex justifyContent={"flex-end"} alignItems={"flex-end"}>
            <Flex
              direction={"column"}
              width={{ base: "100%", md: "300px" }}
              height={"100%"}
              px={{ base: "20px", md: 0 }}
              gap={"15px"}
            >
              <Text
                fontFamily={"Poppins"}
                fontSize={{ base: "13px", md: "14px", lg: "14px", xl: "14px" }}
                fontWeight={500}
                color={"#FFFFFF"}
              >
                Subscribe to our newsletter for the latest news, events, and
                programs
              </Text>
              <Flex position="relative" width={{ base: "100%", md: "300px" }}>
                <Input
                  variant="none"
                  width="100%"
                  fontFamily="Poppins"
                  fontSize="14px"
                  fontWeight={500}
                  color="#000000"
                  bgColor="#FFFFFF"
                  border="1px solid #FFFFFF"
                  borderRightRadius={"8px"}
                  paddingRight="100px"
                />

                <Flex
                  border="1px solid red"
                  px="12px"
                  py="8px"
                  borderRadius="8px"
                  position="absolute"
                  right="0px"
                  top="50%"
                  transform="translateY(-50%)"
                  bgColor="#FF3D00"
                  cursor="pointer"
                >
                  <Text
                    fontSize="14px"
                    fontWeight={500}
                    color="#FFFFFF"
                    textAlign="center"
                  >
                    Subscribe
                  </Text>
                </Flex>
              </Flex>
              <Flex
                justifyContent={{ base: "center", md: "flex-start" }}
                alignItems={{ base: "center", md: "flex-start" }}
                gap={"15px"}
              >
                <MdFacebook fontSize={"32px"} color="#FFFFFF" />
                <FaInstagram fontSize={"32px"} color="#FFFFFF" />
                <FaXTwitter fontSize={"30px"} color="#FFFFFF" />
                <FaLinkedin fontSize={"32px"} color="#FFFFFF" />
                <FaYoutube fontSize={"32px"} color="#FFFFFF" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box
            mt="30px"
            mb="10px"
            width="100%"
            height="0.1px"
            bgColor="#FFFFFF"
          />
        </Flex>
        <Flex
          width={"100%"}
          px={{ base: "20px", md: "20px", lg: "100px" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={{ base: "column", md: "row" }}
          gap={{ base: "20px" }}
        >
          <Flex>
            <Text
              fontFamily={"Poppins"}
              fontSize={"14px"}
              fontWeight={400}
              color={"#FFFFFF"}
            >
              © 2024 GLAAN. All rights reserved.
            </Text>
          </Flex>
          <Flex gap={"30px"} mr={{ base: 0, md: "35px" }}>
            <Flex>
              <Text
                fontFamily={"Poppins"}
                fontSize={"14px"}
                fontWeight={400}
                color={"#FFFFFF"}
                textDecoration={"underline"}
              >
                Privacy Policy
              </Text>
            </Flex>
            <Flex>
              <Text
                fontFamily={"Poppins"}
                fontSize={"14px"}
                fontWeight={400}
                color={"#FFFFFF"}
                textDecoration={"underline"}
              >
                Terms & Conditions
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
