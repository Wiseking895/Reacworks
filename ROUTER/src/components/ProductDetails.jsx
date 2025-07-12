import React from "react";
import { useParams } from "react-router-dom";
import iphoneImg from "../pictures/iphone.webp";
import laptop2 from "../pictures/laptop2.webp";
import lg2 from "../pictures/lg2.webp";
import watchDetail from "../pictures/smart3.webp";
import "../index.css";

const productDetails = {
  1: {
    name: "Smartphone",
    image: iphoneImg,
    description: `Experience next-level connectivity with our latest Smartphone. Featuring a stunning OLED display, lightning-fast processor, and all-day battery life. Capture life's moments with the advanced triple-camera system and enjoy immersive audio with stereo speakers. Don't miss out—upgrade your mobile experience and stay ahead in style! 📱✨`,
    extra: `Order now and receive free express shipping plus a complimentary case to protect your new device. Limited stock available—act fast!` 
  },
  2: {
    name: "Laptop",
    image: laptop2,
    description: `Unleash productivity with this powerful Laptop. Equipped with the latest Intel processor, 16GB RAM, and a high-resolution display for crisp visuals. Enjoy smooth multitasking, rapid boot times, and superior graphics performance for work and gaming alike.`,
    extra: `Take advantage of our bundle offer: purchase today and save 10% on accessories including a wireless mouse and keyboard. Elevate your workflow now! 💻🔥` 
  },
  3: {
    name: "LG TV",
    image: lg2,
    description: `Bring cinema home with LG Smart TV. Enjoy lifelike colors with 4K HDR, AI-enhanced sound, and seamless streaming of your favorite shows. The sleek design complements any living space.`,
    extra: `Buy now to get a free 6-month subscription to premium streaming services. Transform your entertainment space today! 🎬📺🔥` 
  },
  4: {
    name: "Smartwatch",
    image: watchDetail,
    description: `Stay in sync with your life using our latest Smartwatch. Track your health metrics, receive call and message alerts, and customize with interchangeable bands. The durable design ensures you remain stylish and active. ⌚💡`,
    extra: `Order yours today and benefit from a 2-year warranty plus a free screen protector. Seize control of your day now! 💥` 
  }
};

function ProductDetails() {
  const { id } = useParams();
  const product = productDetails[id];

  if (!product) {
    return (
      <div className="page">
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="detail-image"
      />
      <p className="detail-description">{product.description}</p>
      <p className="detail-extra">{product.extra}</p>
      <button
        className="cta-button"
        onClick={() => alert(`Thank you for choosing our ${product.name}!`)}
      >
        Buy Now
      </button>
    </div>
  );
}

export default ProductDetails;
