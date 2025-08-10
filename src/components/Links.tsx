import "./Links.css";

const Links = ({
  title,
  list,
}: {
  title: string;
  list: { label: string; path: string }[];
}) => {
  return (
    <div className="links">
      <h2>{title}</h2>
      <ul>
        {list.map((item) => (
          <li>
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
