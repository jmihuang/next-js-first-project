import ImageSlideshow from "@/components/slides/image-slideshow";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-10 h-[360px] mt-6">
      <section className="flex-none w-[480px] ">
        <ImageSlideshow />
      </section>
      <section class="flex-1 section container daily">
        <h3 className="py-10">植礦力量 安心日常</h3>
        <p class="body">
          介觀構造是MINEQUO米奈可的起點，更是顛覆傳統抗菌產品的專業技術，純天然的介觀植萃礦物拒絕化學藥劑添加，無味、無敏、無刺激，讓安心質感的防護成為日常
        </p>
        <a class="narrow dark-color">
          <span>About us </span>
          <span class="right-line"> </span>
        </a>
      </section>
    </div>
  );
}
