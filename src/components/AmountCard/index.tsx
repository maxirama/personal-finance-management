type IAmountCardProps = {
  title: string;
  amount: string;
};

import styles from "./styles/index.module.css";

export const AmountCard: React.FC<IAmountCardProps> = ({ title, amount }) => {
  const amountCardStyle =
    title === "Current Balance" ? "main-amount-card" : "amount-card";

  return (
    <div className={`${styles[amountCardStyle]}`}>
      <h6>{`${title}`}</h6>
      <p>{`$ ${amount}`}</p>
    </div>
  );
};
