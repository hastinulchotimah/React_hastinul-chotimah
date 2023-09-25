
import React, { useState, useCallback } from "react";
import ContactUs from "./contactUs";
import AboutUs from "./aboutUs";

export default function LandingPage() {

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
<nav className="bg-white-600 ">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center">
      <h1 className="text-balck text-2xl">
        <a href="/"><strong>Aci</strong>MakeUp</a>
      </h1>
    </div>
    <ul className="space-x-6">
      <li className="inline-block">
        <a href="/" className="text-balck hover:text-gray-300">Home</a>
      </li>
      <li className="inline-block">
        <a href="/about" className="text-balck hover:text-gray-300">About</a>
      </li>
      <li className="inline-block">
        <a href="/services" className="text-balck hover:text-gray-300">Services</a>
      </li>
      <li className="inline-block">
        <a href="/contact" className="text-balck hover:text-gray-300">Contact</a>
      </li>
    </ul>
  </div>
</nav>
        <div className="bg-pink-600 text-white flex-grow p-40 text-center flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold mb-4">
            Welcome To Your Website <br /> MakeUp Artist
          </h1>
          Lorem ipsum dolor sit amet, consectetur
            <br />adipiscing elit, pellentesque ipsum nisi, bibendum
            <br /> id ornare in, ultricies ut sem, praesent non dictum
            <br /> massa
          
            <br />
          <div className="space-y-4">
            <input
              type="submit"
              name="submit"
              value="Book Now"
              className="rounded-full bg-white px-4 py-2 text-center font-bold text-black hover:bg-blue-500"
            />
            <strong className="underline cursor-pointer text-black">Watch Video</strong>
          </div>
        </div>
            <img
              src="page.avif"
              alt="gambar"
              width="500"
              height="400"
              className="mt-8  border border-gray-900 rounded-md "
            />
          </div>

          {/* contact us  */}
          <ContactUs />

          {/* AboutUs */}
          <AboutUs />
      {/* Footer */}
      <footer className="bg-pink-600 text-white text-center py-6">
        <div className="blockquote-footer">
          <h6>AciMakeUp</h6>
          <button type="button" className="rounded-full bg-white px-4 py-2 text-center font-bold text-black hover:bg-blue-500">
          <p><a href="http://localhost:5173" target="_blank">klik to website</a></p> </button>
          <p>No tlpn :+92 82288059080
            <br /><strong>Padang, Sumatra Barat</strong>
          </p>
        </div>
        <footer className="bg-pink-600 p-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="rounded-social-buttons flex items-center space-x-4">
          <p className="font-bold text-black">Follow Us</p> 
          <a className="social-button" href="https://instagram.com/hastinul_chotimah?igshid=YTQwZjQ0NmI0OA==" target="_blank">
          <img src="instagram.jpeg" width="30" height="60"></img>
          </a>
          <a className="social-button" href="https://www.facebook.com/" target="_blank">
          <img src="facebook.png" width="30" height="60"></img>
          </a>
          <a className="social-button" href="https://www.twitter.com/" target="_blank">
          <img src="twitter.png" width="30" height="60"></img>
          </a>
          <a className="social-button" href="https://www.linkedin.com/" target="_blank">
          <img src="linkid.png" width="30" height="60"></img>
          </a>
          <a className="social-button" href="https://www.youtube.com/" target="_blank">
          <img src="images.png" width="30" height="80"></img>
          </a>
         
        </div>
      </div>
        <div>
          <p className="text-sm text-black">&copy; {new Date().getFullYear()} Your Company</p>
        </div>
    </footer>
      </footer>
      <div className="copy bg-white-600 text-black  text-center py-3">
        Copyright <strong>AciMakeUp</strong>. All Rights Reserved
        <br />
        <p>designed by BoostrapMade</p>
      </div>
    </div>
  );
}
