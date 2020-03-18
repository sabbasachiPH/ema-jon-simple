import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Products/Product";

const ProductDetail = () => {
  const { productkey } = useParams();
  const product = fakeData.find(pd => pd.key === productkey);
  return (
    <div>
      <h1>This is the detail information of your product</h1>
      <Product showAddToCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDetail;
