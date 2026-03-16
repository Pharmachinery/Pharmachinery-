import React, { useState } from "react";
import logo from "../assets/pharmachinery-logo.png";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { Sling } from "hamburger-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="container mx-auto flex justify-between items-center ">
      <Link to="/" className="img-wrapper py-2 px-2">
        <img src={logo} alt="logo" />
      </Link>
      <div className="desktop-menu hidden lg:block">
        <ul className="flex align-center text-[#021224]">
          <DesktopLink to="/">Home</DesktopLink>
          <DesktopLink to="/services">Services</DesktopLink>
          <DesktopLink to="/events">Events</DesktopLink>
          <DesktopLink to="/projects">Projects</DesktopLink>
          <DesktopLink to="/innovative">Innovative Machines</DesktopLink>
          <DesktopLink to="/odf">ODF Machines</DesktopLink>
          <DesktopLink to="/partners">Partners</DesktopLink>
          <DesktopLink to="/about">About</DesktopLink>
          <DesktopLink to="/contact">Contact</DesktopLink>
        </ul>
      </div>
      <div className="mobile-toggler  lg:hidden lg:bg-white">
        <Sling
          duration={0.8}
          toggled={isMenuOpen}
          color="red"
          direction="right"
          onToggle={(toggled) => {
            if (toggled) {
              // open a menu
              setIsMenuOpen(true);
            } else {
              // close a menu
              setIsMenuOpen(false);
            }
          }}
        />
      </div>
      <div
        className={`${
          isMenuOpen ? `block` : `hidden`
        } duration-200 mobile-menu lg:hidden absolute right-0 bottom-4 left-0  z-30 flex justify-center items-center w-full bg-white`}
      >
        <ul className="text-[#021224] flex flex-col w-full h-full p-2">
          
          <MobileLink to="/" setIsMenuOpen={setIsMenuOpen}>
            Home
          </MobileLink>
          <MobileLink to="/services" setIsMenuOpen={setIsMenuOpen}>
            Services
          </MobileLink>
          <MobileLink to="/events" setIsMenuOpen={setIsMenuOpen}>
            Events
          </MobileLink>
          <MobileLink to="/innovative" setIsMenuOpen={setIsMenuOpen}>
          Innovative Machines
          </MobileLink>
          <MobileLink to="/odf" setIsMenuOpen={setIsMenuOpen}>
          ODF Machines
          </MobileLink>
          <MobileLink to="/projects" setIsMenuOpen={setIsMenuOpen}>
            Projects
          </MobileLink>
          <MobileLink to="/partners" setIsMenuOpen={setIsMenuOpen}>
            Partners
          </MobileLink>
          <MobileLink to="/about" setIsMenuOpen={setIsMenuOpen}>
            About
          </MobileLink>
          <MobileLink to="/contact" setIsMenuOpen={setIsMenuOpen}>
            Contact
          </MobileLink>
        </ul>
      </div>
    </nav>
  );
};

const DesktopLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <>
      <li className={isActive ? "text-[red]" : ""}>
        <Link
          className="pr-4 text-sm font-medium hover:text-[red] duration-200"
          to={to}
          {...props}
        >
          {children}
        </Link>
      </li>
    </>
  );
};
const MobileLink = ({ to, children, setIsMenuOpen, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <>
      <li
        className={`text-center py-3 ${isActive ? "text-[red]" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <Link
          className="pr-4 font-medium hover:text-[red] duration-200 text-xl"
          to={to}
          {...props}
        >
          {children}
        </Link>
      </li>
    </>
  );
};

export default Navbar;
