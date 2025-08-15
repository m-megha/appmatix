import { HashLink } from "react-router-hash-link";
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
            <HashLink to={item.path} smooth>
              {item.label}
            </HashLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
