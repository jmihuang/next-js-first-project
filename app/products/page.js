import React from "react";
import Link from "next/link";
import ProductGrid from "./product-grid";
import ProductItem from "./product-item";
import { getProducts } from "@/lib/catalogue";
export default async function Product() {
  const products = await getProducts();
  return (
    <main className="product">
      <h1>All Products</h1>
      <ul className="flex gap-2">
        <li>
          <Link href="/products/product-1">巧克力酥</Link>
        </li>
        <li>
          <Link href="/products/product-2">草莓甜心派</Link>
        </li>
        <li>
          <Link href="/products/product-3">花生好事蜜糖吐司</Link>
        </li>
      </ul>
      <ProductGrid>
        {products.map((product, idx) => {
          return <ProductItem key={idx} id={idx} {...product} />;
        })}
      </ProductGrid>
    </main>
  );
}
