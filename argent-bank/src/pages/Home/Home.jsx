

import iconChat from "../../assets/icon-chat.png";
import iconMoney from "../../assets/icon-money.png";
import iconSecurity from "../../assets/icon-security.png";

import HomeContent from "../../components/HomeContent/HomeContent";
import getUser from "../../services/api";

import HomePageData from "../../data/HomePageData.json"

import "../Home/Home.css"

export default function Home() {
  getUser();
  const imgSrcData ={
    "icon-chat.png": iconChat,
    "icon-money.png":iconMoney,
    "icon-security.png":iconSecurity
  }

  return (
    <main>
      <div class="hero">
        <section class="hero-content">
          <h2 class="sr-only">Promoted Content</h2>
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section class="features">
        <h2 class="sr-only">Features</h2>
        {HomePageData.map((data) => (
          <HomeContent
          key={data.id}
          img={imgSrcData[data.imgSrc]}
          alt={data.alt}
          title={data.title}
          description={data.text}
          
          />
        ))}
      </section>
    </main>
  );
}