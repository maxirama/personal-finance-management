import { AmountCard } from "../components/AmountCard";
import Sidebar from "../components/Sidebar";
import { TabWrapper } from "../components/TabWrapper";
import styles from "./styles/index.module.css";

export const Home = () => {
  const amountCardData = [
    { description: "Current Balance", amount: 4836.0 },
    { description: "Income", amount: 3814.25 },
    { description: "Expenses", amount: 1700.5 },
  ];
  return (
    <div className={`${styles["page-wrapper"]}`}>
      <Sidebar />
      <div className={`${styles["main-container"]}`}>
        <TabWrapper>
          <h1> Overview</h1>
        </TabWrapper>
      <div className={`${styles["amount-card-data-container"]}`}>
        {amountCardData.map((cardData) => {
          return (
            <AmountCard title={cardData.description} amount={cardData.amount} />
            );
          })}
      </div>
          </div>
    </div>
  );
};
