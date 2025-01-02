import {
  Box,
  Button,
  Flex,
  Image,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Link,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom"; 
import Logo from "../assets/Images/glaanLogo.png";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate()

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Events", href: "/events" },
    { name: "Community", href: "/community" },
    { name: "Contact", href: "/contact" },
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
        position="sticky"
        top="0px"
        zIndex={1000}
      >
        <Box
          width={{ base: "96px", md: "140px", lg: "156px" }}
          height={{ base: "28px", md: "38px", lg: "46px" }}
          cursor={"pointer"}
          onClick={() => navigate("/")}
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
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              color={location.pathname === item.href ? "#FF3D00" : "#FFFFFF"}
              fontSize={{ md: "16px", lg: "18px", xl: "18px" }}
              fontWeight={{ md: 500, lg: 600, xl: 600 }}
              cursor="pointer"
              _hover={{ color: "#FF3D00" }}
            >
              {item.name}
            </Link>
          ))}
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
          onClick={() => navigate("/community")}
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
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                fontSize="18px"
                cursor="pointer"
                onClick={onClose}
                color={location.pathname === item.href ? "#FF3D00" : "#FFFFFF"}
                _hover={{ color: "#FF3D00" }}
              >
                {item.name}
              </Link>
            ))}
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
              onClick={() => {
                onClose(); 
                navigate("/community");
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
