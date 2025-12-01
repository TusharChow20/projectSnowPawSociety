import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 p-10 md:flex md:justify-around items-center rounded-2xl">
        <aside className="flex flex-col items-center md:items-start">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="w-24 h-24 object-contain mb-4"
          />
          <p className="text-sm text-center md:text-left">
            Snow Paw Society
            <br />
            Providing reliable tech since 2024
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Company</h6>
          <NavLink to={"/aboutUs"} className="link link-hover">
            About us
          </NavLink>
          <NavLink to={"/contact"} className="link link-hover">
            Contact
          </NavLink>
          <NavLink to={"/jobs"} className="link link-hover">
            Jobs
          </NavLink>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <NavLink to={"/terms-use"} className="link link-hover">
            Terms of use
          </NavLink>
          <NavLink to={"/privacy-policy"} className="link link-hover">
            Privacy policy
          </NavLink>
          <NavLink to={"/cookie-policy"} className="link link-hover">
            Cookie policy
          </NavLink>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <a
            href="https://www.facebook.com/tushar.Chowdhury.20"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/tusharchowdhury20211/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/TusharChow20"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            GitHub
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
