import "./Actions.css";
import Phone from "/assets/icons/phone.svg";
import Lens from "/assets/icons/Lens.svg";
import More from "/assets/icons/More.svg";

const Actions = () => {
  const actionItems = [{ icon: Phone }, { icon: Lens }, { icon: More }];

  return (
    <div className="actions">
      {actionItems.map((actionItem) => {
        return <img src={actionItem.icon} className="actionItem" />;
      })}
    </div>
  );
};

export default Actions;
