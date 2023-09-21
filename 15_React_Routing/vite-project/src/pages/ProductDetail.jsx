import React from "react";
import { useLocation } from "react-router-dom";

function ProductDetail() {
  const location = useLocation();
  const selectedProduct = location.state.selectedProduct;

  return (
    <section className="container mx-auto px-5 py-5">
      <table className="w-full border-collapse rounded border-2">
        <thead>
          <tr>
            <th className="border-2 px-2">Product Name</th>
            <th className="border-2 px-2">Category</th>
            <th className="border-2 px-2">Freshness</th>
            <th className="border-2 px-2">Product Image</th>
            <th className="border-2 px-2">Additional Description</th>
            <th className="border-2 px-2">Price</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="border-2 px-2 py-2">
              {selectedProduct.Productname}
            </td>
            <td className="border-2 px-2 py-2">
              {selectedProduct.Productcategory}
            </td>
            <td className="border-2 px-2 py-2">
              {selectedProduct.ProductFreshness}
            </td>
            <td className="border-2 px-2 py-2">
              <img
                src={selectedProduct.imageSrc}
                alt="Product"
                className="mx-auto max-w-[100px]"
              />
            </td>
            <td className="border-2 px-2 py-2">{selectedProduct.Additional}</td>
            <td className="border-2 px-2 py-2">
              {selectedProduct.ProductPrice}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ProductDetail;
