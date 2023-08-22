function Card({ data }) {
  const { image, title, subtitle, description } = data;

  return (
    <div class="box box-1">
      <img src={image} alt="LOGO" class="image" />
      <div class="textbox">
        <h2 class="text-title">{title.toUpperCase()}</h2>
        <p class="text-subtitle">{subtitle}</p>
        <p class="main-text">{description}</p>
      </div>
    </div>
  );
}

export default Card;
