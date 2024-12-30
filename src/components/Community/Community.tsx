import { Button, Checkbox, Flex, Input, Select, Text, Textarea } from "@chakra-ui/react";
import Footer from "../Footer";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Flex width={"100%"} height={"100%"} bg={"#F2F2F2"} direction={"column"}>
        <Flex
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
        >
          <Flex
            width={{ base: "350px", md: "600px", lg: "800px", xl: "800px" }}
            height={{ base: "100%", md: "180px", lg: "180px", xl: "180px" }}
            justifyContent={"center"}
            alignItems={"center"}
            pt={{ base: "20px", md: "30px", lg: "30px", xl: "0px" }}
            direction={"column"}
            gap={"10px"}
          >
            <Text
              fontFamily={"Poppins"}
              fontWeight={600}
              fontSize={"35px"}
              color={"#515151"}
            >
              Become a member
            </Text>
            <Text
              fontFamily={"Poppins"}
              fontWeight={400}
              fontSize={"16px"}
              color={"#515151"}
              textAlign={"center"}
            >
              We’re always excited to welcome new members to our community.
              Whether you’re passionate about culture, education, or business,
              there’s a place for you here. By becoming a member, you gain
              access to exclusive events, mentorship opportunities, and a
              network of like-minded individuals.
            </Text>
          </Flex>
          <Flex
            width={"100%"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
            gap={"10px"}
            mt={"30px"}
            mb={"50px"}
          >
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Text
                fontFamily={"Poppins"}
                fontWeight={600}
                fontSize={"35px"}
                color={"#515151"}
              >
                Membership Form
              </Text>
            </Flex>
            <Flex
              width={{ base: "380px", md: "500px" }}
              height={"100%"}
              bgColor={"#FFFFFF"}
              px={"20px"}
              py={"40px"}
              direction={"column"}
              borderRadius={"8px"}
              boxShadow="xl"
              gap={"20px"}
            >
              <Flex direction={"column"}>
                <Text
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#515151"}
                >
                  Full Name
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
                  Phone Number
                </Text>
                <Input
                  type={"number"}
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
                  Date of Birth
                </Text>
                <Input
                  type={"date"}
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
                  Occupation
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
                  Which Cultural Group Do You Identify With?
                </Text>
                <Select>
                    <option></option>
                </Select>
              </Flex>
              <Flex direction={"column"}>
                <Text
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#515151"}
                >
                  How Did You Hear About Us?
                </Text>
                <Textarea
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
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default Banner;
