import styles from "./styles/index.module.css";

interface IMenuItemProps {
  icon: any;
  item: string;
  sidebarOpen: boolean;
}

const MenuItem: React.FC<IMenuItemProps> = ({
  icon,
  item,
  sidebarOpen,
}: IMenuItemProps) => {
  const svgStyle = item === "" ? "inverted-icon" : "sidebar-icon";
  return (
    <div className={`${styles["menu-item"]}`}>
      <img className={`${styles[svgStyle]}`} src={icon} />
      {sidebarOpen && <p>{item}</p>}
    </div>
  );
};

export default MenuItem;
