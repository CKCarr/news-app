import React from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,

} from "@material-tailwind/react";

const NavMenu = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white">

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-white"
      >
        <a href="#" className="flex items-center">
          Resources
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-white"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-white"
      >
        <a href="#" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded px-4 py-4 lg:px-8 lg:py-4 bg-teal-700 text-white">
        <div className="flex items-center justify-between text-white">
          <Typography
            as="a"
            href="#"
            className=" text-lg mr-4 cursor-pointer py-1.5 font-medium text-white"
          >
            News App
          </Typography>
          <div className="flex items-center gap-4 ">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {/* <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block text-white"
              >
                <span>Register</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button>
            </div> */}
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
        </div>
        <MobileNav open={openNav}>
          {navList}
          {/* <div className="flex items-center gap-x-1 ">
            <Button fullWidth variant="text" size="sm" className="text-white">
              <span>Register</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="text-white">
              <span>Sign in</span>
            </Button>
          </div> */}
        </MobileNav>
      </Navbar>
  )
}

export default NavMenu
