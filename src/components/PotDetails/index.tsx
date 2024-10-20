interface IPotDetailsProps {
  title: string;
  amount: number;
  borderColor: string;
}

import styles from "./styles/index.module.css";

export const PotDetails: React.FC<IPotDetailsProps> = ({
  title,
  amount,
  borderColor,
}) => {
  return (
    <div
      className={styles["pot-details-container"]}
      style={{ borderLeft: `5px solid ${borderColor || "black"}` }}
    >
      <p> {title}</p>
      <p className={styles["pot-details-amount"]}> {amount}</p>
    </div>
  );
};
