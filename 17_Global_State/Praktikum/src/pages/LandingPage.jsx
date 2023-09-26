import React from "react";
import { useSelector } from "react-redux";

export default function LandingPage() {
  const panggilData = useSelector((state) => state.list.product);
  console.log(panggilData);

  return (
    <div className="flex h-screen flex-col">
      {/* Navbar */}
      <nav className="bg-white-600 p-2">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl text-black">
            <a href="/">Navbar</a>
          </h1>
          <ul className="space-x-6">
            <li className="inline-block">
              <a href="/" className="text-black hover:text-blue-600">
                Home
              </a>
            </li>
            <li className="inline-block">
              <a href="/about" className="text-black hover:text-blue-600">
                About
              </a>
            </li>
            <li className="inline-block">
              <a href="/services" className="text-black hover:text-blue-600">
                Services
              </a>
            </li>
            <li className="inline-block">
              <a href="/contact" className="text-black hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="flex flex-grow flex-col items-center bg-blue-600 p-40 text-center text-white sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <h1 className="mb-4 text-4xl font-bold">
            Butter Solution Bussiness for Your Bussiness
          </h1>
          <p>
            We are a team of talented designers making websites with
            <br />
            Bootstrap
          </p>
          <div className="space-y-4">
            <input
              type="submit"
              name="submit"
              value="Get Started"
              className="rounded-full bg-white px-4 py-2 text-center font-bold text-black hover:bg-blue-700"
            />
            <strong className="cursor-pointer text-black underline">
              Watch Video
            </strong>
          </div>
        </div>
        <img
          src="/EnterpriseWebDesignServices.png"
          alt="gambar"
          width="500"
          height="345"
          className="mt-8 sm:mt-0"
        />
      </div>

      <div className=" mx-auto mt-4 text-center">
        <h4>
          <strong>Join Our Newsletter</strong>
        </h4>
        <p>Tamen quae legam multos aute sint culpa legam noster magna</p>
        <input type="text" id="fname" name="submit" />
        <input
          type="submit"
          name="submit"
          value="Get Started"
          className="rounded-full bg-black px-4 py-2 text-center font-bold text-white hover:bg-blue-700"
        />
      </div>
      <br />

      {/* Footer */}
      <div className="bg-blue-600 py-4 text-center text-white">
        Copyright <strong>Arsha.</strong> All Rights Reserved
        <br />
        <p>designed by BoostrapMade</p>
        <br />
      </div>
    </div>
  );
}
