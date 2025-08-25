// src/data/searchData.js
import cctvImg from "../assets/cctv.jpg";
import networkImg from "../assets/network-banner.jpg";
import gatesImg from "../assets/gate-main.jpg";
import computerImg from "../assets/office-banner.jpg";

const searchData = [
  { 
    name: "CCTV", 
    image: cctvImg, 
    link: "/servicecctv", 
    keywords: ["cctv", "camera", "surveillance", "security camera"] 
  },
  { 
    name: "Network", 
    image: networkImg, 
    link: "/network", 
    keywords: ["network", "wifi", "router", "lan", "internet"] 
  },
  { 
    name: "Gates", 
    image: gatesImg, 
    link: "/gates", 
    keywords: ["gate", "gates", "swing gate", "sliding gate", "door"] 
  },
  { 
    name: "Computers", 
    image: computerImg, 
    link: "/computers", 
    keywords: ["computer", "pc", "desktop", "office equipment", "laptop"] 
  },
];

export default searchData;
