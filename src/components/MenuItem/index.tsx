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
  return (
    <div className={`${styles["menu-item"]}`}>
      <img className={`${styles["sidebar-icon"]}`} src={icon} />
      {sidebarOpen && <p>{item}</p>}
    </div>
  );
};

export default MenuItem;
