import styles from "./styles/index.module.css";

interface IMenuItemProps {
  icon: any;
  item: string;
  sidebarOpen: boolean;
  handleClick?: any;
}

const MenuItem: React.FC<IMenuItemProps> = ({
  icon,
  item,
  sidebarOpen,
  handleClick,
}: IMenuItemProps) => {
  const svgStyle = item === "" ? "inverted-icon" : "sidebar-icon";
  return (
    <div className={`${styles["menu-item"]}`} onClick={handleClick}>
      <img className={`${styles[svgStyle]}`} src={icon} />
      {sidebarOpen && <p>{item}</p>}
    </div>
  );
};

export default MenuItem;
