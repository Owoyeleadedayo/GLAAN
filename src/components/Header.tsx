import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import Logo from "../assets/Images/glaanLogo.png";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const link = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Events", link: "" },
    { name: "Community", link: "" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <Flex
        width="100%"
        height={{ md: "60px", lg: "80px" }}
        bgColor="#000000"
        px={{ base: "20px", md: "40px", lg: "100px" }}
        justifyContent="space-between"
        alignItems="center"
        position={"sticky"}
        top="0px"
        zIndex={1000}
      >
        <Box
          width={{ base: "96px", md: "140px", lg: "156px" }}
          height={{ base: "28px", md: "38px", lg: "46px" }}
        >
          <Image src={Logo} width="100%" height="100%" objectFit="contain" />
        </Box>

        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          icon={<IoMenu />}
          variant="none"
          color="white"
          onClick={onOpen}
        />

        <Flex
          display={{ base: "none", md: "flex" }}
          gap="20px"
          alignItems="center"
        >
          {link.map(
            (item, index) =>
              item.name && (
                <Text
                  key={index}
                  color="#FFFFFF"
                  fontSize={{ md: "16px", lg: "18px", xl: "18px" }}
                  fontWeight={{ md: 500, lg: 600, xl: 600 }}
                  cursor="pointer"
                  _hover={{ color: "#FF3D00" }}
                >
                  {item.name}
                </Text>
              )
          )}
        </Flex>

        <Button
          width={{ md: "80px", lg: "80px", xl: "100px" }}
          height={{ md: "30px", lg: "35px", xl: "40px" }}
          bgColor="#FF3D00"
          fontFamily="Poppins"
          fontWeight={{ md: 500, lg: 600 }}
          fontSize={{ md: "15px", lg: "18px" }}
          color="#FFFFFF"
          _hover={{
            bg: "#FFFFFF",
            color: "#FF3D00",
            border: "1px solid #FF3D00",
          }}
          display={{ base: "none", md: "flex" }}
        >
          Sign Up
        </Button>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="#000000">
          <DrawerCloseButton color="#FFFFFF" />
          <VStack
            align="start"
            spacing="20px"
            mt="80px"
            pl="20px"
            color="#FFFFFF"
          >
            {link.map(
              (item, index) =>
                item.name && (
                  <Text
                    key={index}
                    fontSize="18px"
                    cursor="pointer"
                    onClick={onClose}
                    _hover={{ color: "#FF3D00" }}
                  >
                    {item.name}
                  </Text>
                )
            )}
            <Button
              width="100px"
              height="40px"
              bgColor="#FF3D00"
              fontFamily="Poppins"
              fontWeight={600}
              color="#FFFFFF"
              _hover={{
                bg: "#FFFFFF",
                color: "#FF3D00",
                border: "1px solid #FF3D00",
              }}
            >
              Sign Up
            </Button>
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
