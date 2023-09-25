import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
      <div className="about-us-image">
        <img
          src="aboutus.avif" // Ganti dengan URL atau path gambar Anda
          alt="About Us"
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="about-us-text mt-4">
        <p className="text-gray-600">
        Afraid of wearing the wrong color make up? Nothing will happen if you consult with us directly. <br />
        Apart from being able to make up according to your wishes, you can also get tips on choosing <br />
         make-up colors that match the tone of your face.
        </p>
      </div>
    </div>
  );
}
