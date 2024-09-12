import React from "react";
import Link from "next/link";
import ProductGrid from "./product-grid";
import ProductItem from "./product-item";
export default function Product() {
  const products = [
    {
      alt: "自然淨化,環境清潔",
      name: "介觀植礦防護液",
      engName: "Natural All-Purpose Protective Spray",
      capacity: "50ml / 1.69fl.oz",
      slug: "1",
      price: "ntd.450",
    },
    {
      alt: "芳香淨化,室內清潔",
      name: "香氛淨化噴霧",
      engName: "Aromatic Purifying Spray",
      capacity: "100ml / 3.38fl.oz",
      slug: "2",
      price: "ntd.500",
    },
    {
      alt: "深層保濕,護膚產品",
      name: "深層保濕霜",
      engName: "Deep Moisturizing Cream",
      capacity: "30ml / 1fl.oz",
      slug: "3",
      price: "ntd.600",
    },
    {
      alt: "抗皺修復,美容護理",
      name: "抗皺修護精華液",
      engName: "Anti-Wrinkle Repair Serum",
      capacity: "40ml / 1.35fl.oz",
      slug: "4",
      price: "ntd.800",
    },
    {
      alt: "清爽淨化,去油護理",
      name: "清爽去油洗面奶",
      engName: "Refreshing Oil-Control Cleanser",
      capacity: "150ml / 5fl.oz",
      slug: "5",
      price: "ntd.300",
    },
    {
      alt: "天然滋養,髮質修護",
      name: "天然滋養護髮素",
      engName: "Natural Nourishing Conditioner",
      capacity: "250ml / 8.45fl.oz",
      slug: "6",
      price: "ntd.350",
    },
    {
      alt: "溫和去角質,全身護理",
      name: "溫和去角質磨砂膏",
      engName: "Gentle Exfoliating Scrub",
      capacity: "200ml / 6.76fl.oz",
      slug: "7",
      price: "ntd.400",
    },
    {
      alt: "深層清潔,毛孔護理",
      name: "深層清潔面膜",
      engName: "Deep Cleansing Mask",
      capacity: "120ml / 4fl.oz",
      slug: "8",
      price: "ntd.450",
    },
    {
      alt: "清新提神,天然護膚",
      name: "清新提神爽膚水",
      engName: "Refreshing Toner",
      capacity: "200ml / 6.76fl.oz",
      slug: "9",
      price: "ntd.420",
    },
    {
      alt: "天然潤唇,護唇產品",
      name: "天然滋潤護唇膏",
      engName: "Natural Lip Balm",
      capacity: "10g / 0.35oz",
      slug: "10",
      price: "ntd.150",
    },
    {
      alt: "美白保濕,日間護膚",
      name: "美白保濕乳液",
      engName: "Whitening Moisturizing Lotion",
      capacity: "50ml / 1.69fl.oz",
      slug: "11",
      price: "ntd.480",
    },
    {
      alt: "夜間修復,深層滋養",
      name: "夜間修復精華霜",
      engName: "Night Repair Cream",
      capacity: "50ml / 1.69fl.oz",
      slug: "12",
      price: "ntd.900",
    },
    {
      alt: "全身滋養,乾燥護理",
      name: "全身滋養潤膚露",
      engName: "Full-Body Nourishing Lotion",
      capacity: "500ml / 16.9fl.oz",
      slug: "13",
      price: "ntd.550",
    },
    {
      alt: "抗老護理,青春活膚",
      name: "青春活膚抗老霜",
      engName: "Youth Revitalizing Anti-Aging Cream",
      capacity: "60ml / 2fl.oz",
      slug: "14",
      price: "ntd.980",
    },
    {
      alt: "自然香氛,房間清新",
      name: "天然香氛擴香瓶",
      engName: "Natural Scented Diffuser",
      capacity: "120ml / 4fl.oz",
      slug: "15",
      price: "ntd.300",
    },
    {
      alt: "柔嫩護理,手部保養",
      name: "柔嫩護手霜",
      engName: "Soft Hand Cream",
      capacity: "75ml / 2.5fl.oz",
      slug: "16",
      price: "ntd.280",
    },
    {
      alt: "柔順髮絲,健康護理",
      name: "柔順護髮油",
      engName: "Smooth Hair Oil",
      capacity: "100ml / 3.38fl.oz",
      slug: "17",
      price: "ntd.700",
    },
    {
      alt: "清新沐浴,全天潔淨",
      name: "清新沐浴露",
      engName: "Refreshing Body Wash",
      capacity: "300ml / 10.1fl.oz",
      slug: "18",
      price: "ntd.320",
    },
    {
      alt: "舒緩放鬆,泡澡享受",
      name: "舒緩泡澡鹽",
      engName: "Soothing Bath Salts",
      capacity: "250g / 8.8oz",
      slug: "19",
      price: "ntd.270",
    },
    {
      alt: "抗菌清潔,手部防護",
      name: "抗菌洗手液",
      engName: "Antibacterial Hand Wash",
      capacity: "200ml / 6.76fl.oz",
      slug: "20",
      price: "ntd.180",
    },
  ];

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
