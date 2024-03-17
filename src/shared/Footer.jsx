/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/logo.jpg"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-red-300/10 text-base">
            <aside>
                <img src={logo} width={170} height={170} alt=""  />
            </aside>
            <nav>
                <h6 className="footer-title text-xl font-bold text-red-500 hover:text-red-500 ">Services</h6>
                <a className="link link-hover hover:text-red-500 ">Branding</a>
                <a className="link link-hover hover:text-red-500 ">Design</a>
                <a className="link link-hover hover:text-red-500 ">Marketing</a>
                <a className="link link-hover hover:text-red-500 ">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title text-xl font-bold text-red-500 hover:text-red-500 ">Company</h6>
                <a className="link link-hover hover:text-red-500 ">About us</a>
                <a className="link link-hover hover:text-red-500 ">Contact</a>
                <a className="link link-hover hover:text-red-500 ">Jobs</a>
                <a className="link link-hover hover:text-red-500 ">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title text-xl font-bold text-red-500 hover:text-red-500 ">Legal</h6>
                <a className="link link-hover hover:text-red-500 ">Terms of use</a>
                <a className="link link-hover hover:text-red-500 ">Privacy policy</a>
                <a className="link link-hover hover:text-red-500 ">Cookie policy</a>
            </nav>
        </footer>
    )
}

export default Footer