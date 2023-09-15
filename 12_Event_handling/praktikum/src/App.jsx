import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function ProductForm() {
  const [formData, setFormData] = useState({
    Productname: '',
    Productcategory: 'Choose...',
    formFile: '',
    Additional: '',
    ProductFreshness: '',
    ProductPrice: '',
  });

  const [translations, setTranslations] = useState({
    title: 'Create Product', 
    description:
      'Below is an example form built entirely with Bootstrap s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it',
  });
  
  const translateToIndonesian = () => {
    const translatedTitle = 'Buat Akun';
    const translatedDescription =
      'Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya';

    setTranslations({
      title: translatedTitle,
      description: translatedDescription,
    });
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenerateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100); // Menghasilkan angka acak antara 0 hingga 99
    console.log('Random Number:', randomNumber);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      Productname,
      ProductPrice,
      Productcategory,
      formFile,
      Additional,
      ProductFreshness,
    } = formData;

    if (Productname === '' || ProductPrice === '') {
      alert('Product name and product price cannot be empty.');
    } else if (Productname.length > 25) {
      alert('Product name must not exceed 25 characters');
    } else if (
      Productname.includes('@') ||
      Productname.includes('#') ||
      Productname.includes('{') ||
      Productname.includes('}')
    ) {
      alert('Name must not contain symbols.');
    } else if (
      Productcategory === 'Choose...' ||
      formFile === '' ||
      Additional === '' ||
      ProductFreshness === ''
    ) {
      alert('Each form field must be filled in; it cannot be empty.');
    } else {
      // Perform your desired action here, such as submitting the form.
      alert('Product created successfully.');
    }
  };

 

  return (
    <div>
      <div className="container" style={{ width: '800px', textAlign: 'center' }}>
        <img
          src="https://camo.githubusercontent.com/84746920d1a9906680c387b3cc8753ee842e996fc8915abd295011e15b594b74/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e312f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67"
          width="100"
          height="70"
          alt="Product"
        />
        <h1>{translations.title}</h1>
        <p>{translations.description}</p>
        <button onClick={translateToIndonesian}>Translate To Indonesia</button>
      </div>

      <div className="container" style={{ width: '500px' }}>
        <h3>Detail Product</h3>
        <form onSubmit={handleSubmit}>
          <div className="col-8">
            <label htmlFor="Productname">Product name :</label>
            <input
              type="text"
              className="form-control"
              id="Productname"
              name="Productname"
              minLength="6"
              maxLength="50"
              required
              value={formData.Productname}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label htmlFor="Productcategory">Product Category :</label>
            <br />
            <select
              className="form-select"
              aria-label="Default select example"
              id="Productcategory"
              name="Productcategory"
              value={formData.Productcategory}
              onChange={handleChange}
            >
              <option value="Choose...">Choose...</option>
              <option value="one">one</option>
              <option value="two">two</option>
              <option value="three">three</option>
            </select>{' '}
            <br />
          </div>
          <div className="col-6">
            <label htmlFor="formFile" className="form-label">
              Image Of Product :
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              name="formFile"
              value={formData.formFile}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ProductFreshness">Product Freshness</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="ProductFreshness"
              value="brand new"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="brandNew">
              Brand New
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="ProductFreshness"
              value="Second Hand"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="secondHand">
              Second Hand
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="ProductFreshness"
              value="Refurbished"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="refurbished">
              Refurbished
            </label>
          </div>
          <div className="col-10">
            <label htmlFor="Additional" className="form-label">
              Additional Description :
            </label>
            <textarea
              className="form-control"
              id="Additional"
              name="Additional"
              rows="3"
              required
              value={formData.Additional}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="ProductPrice">Product Price :</label>
            <br />
            <input
              type="number"
              name="ProductPrice"
              id="ProductPrice"
              required
              value={formData.ProductPrice}
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="form-group">
        <p align="center">
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleGenerateRandomNumber}
          >
            Submit
          </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;