interface IPotDetailsProps {
  title: string;
  amount: number;
  borderColor: string;
}

export const PotDetails: React.FC<IPotDetailsProps> = ({
  title,
  amount,
  borderColor,
}) => {
  return (
    <div
      className=""
      style={{ borderRight: `1px solid ${borderColor || "black"}` }}
    >
      <h5> {title}</h5>
      <p> {amount}</p>
    </div>
  );
};
