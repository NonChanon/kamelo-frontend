import React, { useState } from "react";
import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import KameloLogo from "../assets/images/kamelo.png";
import { Link } from "react-router-dom";

const navList = (
  <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <Typography
      as="li"
      variant="small"
      color="white"
      className="p-1 font-normal"
    >
      <Link className="flex items-center">Search Rates</Link>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="white"
      className="p-1 font-normal"
    >
      <a href="#" className="flex items-center">
        Service
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="white"
      className="p-1 font-normal"
    >
      <a href="#" className="flex items-center">
        Industry
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="white"
      className="p-1 font-normal"
    >
      <a href="#" className="flex items-center">
        Company
      </a>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="white"
      className="p-1 font-normal"
    >
      <a href="#" className="flex items-center">
        Tools
      </a>
    </Typography>
  </ul>
);

export default function NavigatorBar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-primary bg-opacity-100 border-none">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <img src={KameloLogo} width={100} />
          <div className="mr-4 hidden lg:block">{navList}</div>
        </div>
        <div className="flex items-center gap-x-3">
          <Button
            color="white"
            variant="filled"
            size="sm"
            className="hidden lg:inline-block rounded-full"
          >
            <span>sign in</span>
          </Button>
          <Button
            color="secondary"
            variant="filled"
            size="sm"
            className="hidden lg:inline-block rounded-full"
          >
            <span>get quote</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Button fullWidth variant="text" size="sm" className="">
            <span>Log In</span>
          </Button>
          <Button fullWidth variant="gradient" size="sm" className="">
            <span>Sign in</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}