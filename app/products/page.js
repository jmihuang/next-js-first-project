import React from "react";
import Link from "next/link";
export default function Product() {
  return (
    <main>
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
    </main>
  );
}
