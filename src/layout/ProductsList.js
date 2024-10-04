import { useState } from "react";
import Button from "../components/Button";
import HeartCountArea from "../components/HeartCountArea";
import ProductImage from "../components/Product/ProductImage";
import ProductName from "../components/Product/ProductName";
import ProductPrice from "../components/Product/ProductPrice";
import "../styles/Products/ProductsList.css";
import DropDown from "../components/DropDown";
import SearchInput from "../components/SearchInput";

const ProductItem = ({ item, imageSize, countSize }) => {
  return (
    <>
      <ProductImage images={item.images} size={imageSize} />
      <div className='product-content'>
        <ProductName name={item.name} />
        <ProductPrice price={item.price} />
        <HeartCountArea count={item.favoriteCount} size={countSize} />
      </div>
    </>
  );
};

const ProductManagement = ({ onSubmit, onBest, onNewest }) => {
  return (
    <>
      <SearchInput onSubmit={onSubmit} />
      <Button link={true} href='/additem' className='additem' style='square blue'>
        상품 등록하기
      </Button>
      <DropDown onBest={onBest} onNewest={onNewest} />
    </>
  );
};

const ProductsList = ({ list, imageSize, countSize, children, onSubmit, productManagement, onBest, onNewest }) => {
  return (
    <div className='product-area'>
      <div className='product-category'>
        <h2 className='product-category-name'>{children}</h2>
        {productManagement ? <ProductManagement onSubmit={onSubmit} onBest={onBest} onNewest={onNewest} /> : ""}
      </div>
      <ul className='product-list'>
        {list.map((item) => (
          <li key={item.id} className='product-item'>
            <ProductItem item={item} imageSize={imageSize} countSize={countSize} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
