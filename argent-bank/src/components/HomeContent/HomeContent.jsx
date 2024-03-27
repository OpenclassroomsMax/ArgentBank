import "../HomeContent/HomeContent.css"

export default function HomeContent({ img, title, description, alt }) {
  return (
    <div className="feature-item">
      <img src={img} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
