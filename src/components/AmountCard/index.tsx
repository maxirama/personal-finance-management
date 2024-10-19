type IAmountCardProps = {
  title: string;
  amount: number;
};

import styles from "./styles/index.module.css";

export const AmountCard: React.FC<IAmountCardProps> = ({ title, amount }) => {
  return (
    <div className={`${styles["amount-card"]}`}>
      <h6>{`${title}`}</h6>
      <p>{`$ ${amount}`}</p>
    </div>
  );
};
