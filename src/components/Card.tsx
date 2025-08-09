import "./Card.css";

const Card = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="card">
      <img src={icon} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Card;
