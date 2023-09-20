import React from 'react';
import EnterpriseWebDesignServices from '../public/EnterpriseWebDesignServices.png'; 


function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Landing page</title>
      </head>
      <body>
        <div>
          <h1>
            Butter Solutions For Your
            <br /> Business
          </h1>
          <p>
            We are team talented designer making websites with
            <br />
            Bootstrap
          </p>
          <p>
            <input type="submit" name="submit" value="Get Started" />
            <strong>Watch Video</strong>
          </p>
          <img src={EnterpriseWebDesignServices} alt="gambar" width="460" height="345" /> 
          <h3>Join Our Newsletter</h3>
          <p>Tamen quae legam multos aute sint culpa legam noster magna</p>
          <input type="text" id="fname" name="fname" />
          <br/>
        </div>
        <br />
        <div className="footer">
          Copyright <strong>Arsha.</strong> All Rights Reserved
          <br />
          <p>designed by BoostrapMade</p>
          <br />
        </div>
      </body>
    </html>
  );
}

export default App;
