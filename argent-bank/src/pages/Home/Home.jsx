

import iconChat from "../../assets/icon-chat.png";
import iconMoney from "../../assets/icon-money.png";
import iconSecurity from "../../assets/icon-security.png";

import HomeContent from "../../components/HomeContent/HomeContent";

import HomePageData from "../../data/HomePageData.json"

import "../Home/Home.css"

export default function Home() {

  const imgSrcData ={
    "icon-chat.png": iconChat,
    "icon-money.png":iconMoney,
    "icon-security.png":iconSecurity
  }

  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
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