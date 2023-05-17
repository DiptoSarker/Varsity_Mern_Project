import FooterBanner from "@/Components/FooterBanner";
import HeroBanner from "@/Components/Herobanner";
import React from "react";

function Home() {
  return (
    <div>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <FooterBanner />
    </div>
  );
}

export default Home;
