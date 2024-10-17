interface IMenuItemProps {
  icon: any;
  item: string;
}

const MenuItem: React.FC<IMenuItemProps> = ({
  icon,
  item,
}: IMenuItemProps) => {
  return <div>{item}</div>;
};

export default MenuItem;
