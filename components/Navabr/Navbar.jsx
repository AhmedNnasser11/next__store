import {
  AnchorName,
  CustomContainer,
  Icons,
  CustomMenu,
  LItem,
  Logo,
  NavbarContainer,
  UList,
  ResponsiveDrawer
} from "./NavbarStyle";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Favorite, ShoppingBag, Search } from "@mui/icons-material";
import axios from "axios";
import { IconButton } from "@mui/material";

const Navbar = () => {
  const [nav, setNavbar] = useState([]);
  useEffect(async () => {
    const res = await axios(
      "https://api.npoint.io/b26ab1faa1fc63f27d5d/navbar"
    );
    const data = res.data;
    setNavbar(data);
  }, []);

  return (
    <NavbarContainer>
      <CustomContainer>
        <Logo>next_store</Logo>
        <UList>
          {nav.map((item, i) => (
            <LItem key={i}>
              <Link href={item.path}>
                <AnchorName>{item.title}</AnchorName>
              </Link>
            </LItem>
          ))}
        </UList>
        <Icons>
          <Favorite />
          <ShoppingBag />
          <Search />
          <IconButton className="menu">
            <CustomMenu />
          </IconButton>
        </Icons>
      </CustomContainer>

    </NavbarContainer>
  );
};

export default Navbar;
