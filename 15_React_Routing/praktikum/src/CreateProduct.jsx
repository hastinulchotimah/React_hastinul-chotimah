import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    alert('Welcome');
  }, []);

  const [productList, setProductList] = useState([]);
  const [productToDelete, setProductToDelete] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [productFiles, setProductFiles] = useState([]);

  const addProductToList = (product, file) => {
    setProductList([...productList, product]);
    setProductFiles([...productFiles, { product, file }]);
  };

  const handleDeleteProduct = (indexToDelete) => {
    console.log("Deleting product at index:", indexToDelete);
  
    // Hapus item dari productList dan productFiles berdasarkan index
    const updatedList = [...productList];
    updatedList.splice(indexToDelete, 1);
  
    const updatedProductFiles = productFiles.filter(
      (item, idx) => idx !== indexToDelete
    );
  
    setProductList(updatedList);
    setProductFiles(updatedProductFiles);
    setShowDeleteConfirmation(false);
  };
  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      formFile: file,
    }));
  };

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
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenerateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
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
  
    let hasError = false; 
  
    if (Productname === '') {
      alert('Product name cannot be empty.');
      hasError = true; 
    }
  
    if (ProductPrice === '') {
      alert('Product price cannot be empty.');
      hasError = true; 
    }
  
    if (Productcategory === 'Choose...') {
      alert('Please select a product category.');
      hasError = true; 
    }
  
    if (!formFile) {
      alert('Please select an image for the product.');
      hasError = true; 
    }
  
    if (Additional === '') {
      alert('Additional description cannot be empty.');
      hasError = true; 
    }
  
    if (ProductFreshness === '') {
      alert('Please select the product freshness.');
      hasError = true; 
    }
  
    if (!hasError) { 
      const product = {
        Productname,
        Productcategory,
        formFile: formFile.name,
        Additional,
        ProductFreshness,
        ProductPrice,
      };
  
      addProductToList(product, formFile);
  
      setFormData({
        Productname: '',
        Productcategory: 'Choose...',
        formFile: '',
        Additional: '',
        ProductFreshness: '',
        ProductPrice: '',
      });
  
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
                onChange={handleFileChange}
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
      <div className="container" style={{ width: '900px' }}>
        <h3>List of Products</h3>
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Image Of Product</th>
              <th>Product Freshness</th>
              <th>Additional Description</th>
              <th>Product Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {productList.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.Productname}</td>
              <td>{product.Productcategory}</td>
              <td>
                {productFiles.map((item, idx) =>
                  item.product === product ? (
                    <img
                      key={idx}
                      src={URL.createObjectURL(item.file)}
                      alt="Product"
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  ) : null
                )}
              </td>
              <td>{product.ProductFreshness}</td>
              <td>{product.Additional}</td>
              <td>{product.ProductPrice}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDeleteProduct(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductForm;