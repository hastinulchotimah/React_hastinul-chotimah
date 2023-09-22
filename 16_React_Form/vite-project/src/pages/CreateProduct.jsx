import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function CreateProduct() {
  useEffect(() => {
    alert("Welcome to the Create Product page!");
  }, []);

  const navigate = useNavigate();

  const [isIndonesian, setIsIndonesian] = useState(false);
  const toggleLanguage = () => {
    setIsIndonesian(!isIndonesian);
  };

  const [formData, setFormData] = useState({
    Productname: "",
    Productcategory: "Choose...",
    formFile: null,
    Additional: "",
    ProductFreshness: "",
    ProductPrice: "",
  });

  const [productList, setProductList] = useState([]);

  const [formErrors, setFormErrors] = useState({
    Productname: false,
    Productcategory: false,
    formFile: false,
    Additional: false,
    ProductFreshness: false,
    ProductPrice: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      formFile: file,
    });
  };

  const generateRandomPrice = () => {
    const randomPrice = (Math.random() * (100 - 10) + 10).toFixed(2);
    setFormData({ ...formData, ProductPrice: randomPrice });
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

    const nameRegex = /^[A-Za-z]+$/;
    const categoryRegex = /^(one|two|three)$/;
    const freshnessRegex = /^(Brand New|Second Hand|Refurbished)$/;
    const priceRegex = /^\d+(\.\d{1,2})?$/;

    const newFormErrors = {
      Productname: !nameRegex.test (Productname),
      Productcategory: !categoryRegex.test(Productcategory),
      formFile: !formFile,
      Additional: Additional === "",
      ProductFreshness:!freshnessRegex.test (ProductFreshness),
      ProductPrice: !priceRegex.test  (ProductPrice),
    };

    setFormErrors(newFormErrors);
    if (
      !newFormErrors.Productname &&
      !newFormErrors.Productcategory &&
      !newFormErrors.formFile &&
      !newFormErrors.Additional &&
      !newFormErrors.ProductFreshness &&
      !newFormErrors.ProductPrice
    ) {
  
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageSrc = event.target.result;
      const newProduct = {
        id: Date.now(), // Generate a unique ID
        Productname,
        Productcategory,
        formFile: formFile.name,
        Additional,
        ProductFreshness,
        ProductPrice,
        imageSrc,
      };

      setProductList([...productList, newProduct]);
      setFormData({
        Productname: "",
        Productcategory: "Choose...",
        formFile: null,
        Additional: "",
        ProductFreshness: "",
        ProductPrice: "",
      });
    };

    reader.readAsDataURL(formFile);
    }
  };

  const handleDeleteProduct = (id) => {
    const updatedProductList = productList.filter(
      (product) => product.id !== id,
    );
    setProductList(updatedProductList);
  };

  return (
    <div className="container mx-auto p-5">
      <div className="text-center">
        <img
          src="https://camo.githubusercontent.com/84746920d1a9906680c387b3cc8753ee842e996fc8915abd295011e15b594b74/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e312f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67"
          width="200"
          alt="Product"
          className="mx-auto"
        />
        <h1 className="mt-4 text-3xl font-bold">
          {isIndonesian ? "Buat Produk" : "Create Product"}
        </h1>
        <p className="mt-2">
          {isIndonesian
            ? "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya."
            : "Below is an example form built entirely with Bootstrap's form controls. Each  form group has a validation state that can be triggered by attempting to submit the form without completing it."}
        </p>
        <button
          className="mt-4 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={toggleLanguage}
        >
          {isIndonesian ? "Translate To English" : "Translate To Indonesia"}
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold">
          {isIndonesian ? "Buat Produk" : "Create Product"}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label htmlFor="Productname">
              {isIndonesian ? "Nama Produk" : "Product Name"}:
            </label>
            <input
              type="text"
              id="Productname"
              name="Productname"
              minLength="6"
              maxLength="50"
              className={`mt-1 w-full rounded border p-2 ${
                formErrors.Productname ? "border-red-500" : ""
              }`}
              value={formData.Productname}
              onChange={handleInputChange}
            />
            {formErrors.Productname && (
              <p className="text-red-500">
                {isIndonesian
                  ? "Harap isi nama produk dan mengandung huruf besar dan huruf kecil"
                  : "Please fill in the product name and contain uppercase and lowercase letters"}
              </p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="Productcategory">
              {isIndonesian ? "Kategori Produk" : "Product Category"}:
            </label>
            <br />
            <select
              id="Productcategory"
              name="Productcategory"
              className={`mt-1 w-full rounded border p-2 ${
                formErrors.Productcategory ? "border-red-500" : ""
              }`}
              value={formData.Productcategory}
              onChange={handleInputChange}
            >
              <option value="Choose...">
                {isIndonesian ? "Pilih..." : "Choose..."}
              </option>
              <option value="one">one</option>
              <option value="two">two</option>
              <option value="three">three</option>
            </select>{" "}
            <br />
            {formErrors.Productcategory && (
              <p className="text-red-500">
                {isIndonesian
                  ? "Harap pilih kategori produk"
                  : "Please select product category"}
              </p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="formFile">
              {isIndonesian ? "Gambar Produk" : "Image Of Product"}:
            </label>
            <input
              type="file"
              id="formFile"
              name="formFile"
              className={`mt-1 w-full rounded border p-2 ${
                formErrors.formFile ? "border-red-500" : ""
              }`}
              accept="image/*"
              onChange={handleFileChange}
            />
            {formErrors.formFile && (
              <p className="text-red-500">
                {isIndonesian
                  ? "Harap pilih gambar produk"
                  : "Please select product image"}
              </p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="ProductFreshness" className="font-semibold">
              {isIndonesian ? "Kegiatan Produk" : "Product Freshness"}:
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              name="ProductFreshness"
              value="brand new"
              className="mr-2"
              onChange={handleInputChange}
            />
            <label htmlFor="brandNew">
              {isIndonesian ? "Baru" : "Brand New"}
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              name="ProductFreshness"
              value="Second Hand"
              className="mr-2"
              onChange={handleInputChange}
            />
            <label htmlFor="secondHand">
              {isIndonesian ? "Bekas" : "Second Hand"}
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              name="ProductFreshness"
              value="Refurbished"
              className="mr-2"
              onChange={handleInputChange}
            />
            <label htmlFor="refurbished">
              {isIndonesian ? "Renovasi" : "Refurbished"}
            </label>
          </div>
          {formErrors.ProductFreshness && (
            <p className="mt-2 text-red-500">
              {isIndonesian
                ? "Harap pilih kegiatan produk"
                : "Please select product freshness"}
            </p>
          )}
          <div className="mt-4">
            <label htmlFor="Additional">
              {isIndonesian ? "Deskripsi Tambahan" : "Additional Description"}:
            </label>
            <textarea
              id="Additional"
              name="Additional"
              rows="3"
              className={`mt-1 w-full rounded border p-2 ${
                formErrors.Additional ? "border-red-500" : ""
              }`}
              value={formData.Additional}
              onChange={handleInputChange}
            ></textarea>
            {formErrors.Additional && (
              <p className="text-red-500">
                {isIndonesian
                  ? "Harap isi deskripsi tambahan"
                  : "Please enter additional description"}
              </p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="ProductPrice">
              {isIndonesian ? "Harga Produk" : "Product Price"}:
            </label>
            <br />
            <input
              type="number"
              name="ProductPrice"
              id="ProductPrice"
              className={`mt-1 w-full rounded border p-2 ${
                formErrors.ProductPrice ? "border-red-500" : ""
              }`}
              value={formData.ProductPrice}
              onChange={handleInputChange}
            />
            {formErrors.ProductPrice && (
              <p className="text-red-500">
                {isIndonesian
                  ? "Harap isi harga produk"
                  : "Please enter product price"}
              </p>
            )}
            <br />
          </div>
          <div
            className={`space-x-3 ${
              formErrors.ProductPrice === false ? "mt-5" : "-mt-1"
            }`}
          >
            <button
              type="button"
              className="rounded-full bg-green-500 px-4 py-2 text-center font-bold text-white hover:bg-green-700"
              onClick={generateRandomPrice}
            >
              {isIndonesian ? "Hasilkan Harga Acak" : "Generate Random Price"}
            </button>
            <button
              type="submit"
              className="rounded-full bg-blue-500 px-4 py-2 text-center font-bold text-white hover:bg-blue-700"
            >
              {isIndonesian ? "Kirim" : "Submit"}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold">
          {isIndonesian ? "Daftar Produk" : "List of Products"}
        </h3>
        <table className="mt-4 w-full">
          <thead>
            <tr>
              <th className="border p-2">{isIndonesian ? "No" : "No"}</th>
              <th className="border p-2">
                {isIndonesian ? "Nama Produk" : "Product Name"}
              </th>
              <th className="border p-2">
                {isIndonesian ? "Kategori Produk" : "Product Category"}
              </th>
              <th className="border p-2">
                {isIndonesian ? "Gambar Produk" : "Image Of Product"}
              </th>
              <th className="border p-2">
                {isIndonesian ? "Kegiatan Produk" : "Product Freshness"}
              </th>
              <th className="border p-2">
                {isIndonesian ? "Deskripsi Tambahan" : "Additional Description"}
              </th>
              <th className="border p-2">
                {isIndonesian ? "Harga Produk" : "Product Price"}
              </th>
              <th className="border p-2">
                {isIndonesian ? "Tindakan" : "Actions"}
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {productList.map((product, index) => (
              <tr key={product.id}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{product.Productname}</td>
                <td className="border p-2">{product.Productcategory}</td>
                <td className="border p-2">
                  {product.imageSrc && (
                    <img
                      src={product.imageSrc}
                      alt="Product"
                      style={{ maxWidth: "100px", height: "auto" }}
                      className="m-auto"
                    />
                  )}
                </td>
                <td className="border p-2">{product.ProductFreshness}</td>
                <td className="border p-2">{product.Additional}</td>
                <td className="border p-2">{product.ProductPrice}</td>
                <td className="space-x-2 border p-2">
                  <button
                    onClick={() => {
                      navigate(`/product/${product.id}`, {
                        state: { selectedProduct: product },
                      });
                    }}
                    className="m-auto rounded-full bg-blue-500 px-4 py-2 text-center font-bold text-white hover:bg-blue-700"
                  >
                    {isIndonesian ? "Detail" : "Detail"}
                  </button>

                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="m-auto rounded-full bg-red-500 px-4 py-2 text-center font-bold text-white hover:bg-red-700"
                  >
                    {isIndonesian ? "Hapus" : "Delete"}
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

export default CreateProduct;
