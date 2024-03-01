import "../HomeContent/HomeContent.css"

export default function HomeContent({ img, title, description, alt }) {
  return (
    <div class="feature-item">
      <img src={img} alt={alt} class="feature-icon" />
      <h3 class="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
