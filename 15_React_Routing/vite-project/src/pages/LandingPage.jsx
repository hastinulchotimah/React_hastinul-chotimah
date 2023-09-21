import React from "react";

export default function LandingPage() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl">
            <a href="/">Navbar</a>
          </h1>
          <ul className="space-x-6">
            <li className="inline-block">
              <a href="/" className="text-white hover:text-gray-300">Home</a>
            </li>
            <li className="inline-block">
              <a href="/about" className="text-white hover:text-gray-300">About</a>
            </li>
            <li className="inline-block">
              <a href="/services" className="text-white hover:text-gray-300">Services</a>
            </li>
            <li className="inline-block">
              <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="bg-blue-600 text-white flex-grow p-8 text-center flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold mb-4">
            Butter Solutions For Your Business
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
            <strong className="underline cursor-pointer text-black">Watch Video</strong>
          </div>
        </div>
            <img
              src="/EnterpriseWebDesignServices.png"
              alt="gambar"
              width="460"
              height="345"
              className="mt-8 sm:mt-0"
            />
          </div>

      
        <div className=" text-center mx-auto mt-4">
        <h4><strong>Join Our Newsletter</strong></h4>
        <p>Tamen quae legam multos aute sint culpa legam noster magna</p>
        <input type="text" id="fname" name="fname" />
        <input
              type="submit"
              name="submit"
              value="Get Started"
              className="rounded-full bg-black px-4 py-2 text-center font-bold text-white hover:bg-blue-700"
            />
       </div>
       <br />

        {/* Footer */}
      <div className="bg-blue-600 text-white py-4 text-center">
        Copyright <strong>Arsha.</strong> All Rights Reserved
        <br />
        <p>designed by BoostrapMade</p>
        <br />
      </div>
    </div>
  );
}
