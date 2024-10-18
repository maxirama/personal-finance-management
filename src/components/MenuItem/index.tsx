import "./styles/index.css";

interface IMenuItemProps {
  icon: any;
  item: string;
}

const MenuItem: React.FC<IMenuItemProps> = ({ icon, item }: IMenuItemProps) => {
  return (
    <div className="menu-item">
      <img src={icon} />
      <p>{item}</p>
    </div>
  );
};

export default MenuItem;
