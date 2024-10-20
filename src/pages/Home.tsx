import { AmountCard } from "../components/AmountCard";
import Sidebar from "../components/Sidebar";
import { TabWrapper } from "../components/TabWrapper";
import { PotsSummary } from "../components/PotsSummary";
import styles from "./styles/index.module.css";
import { getFormattedNumber } from "../utils";

export const Home = () => {
  const amountCardData = [
    { description: "Current Balance", amount: 4836 },
    { description: "Income", amount: 3814 },
    { description: "Expenses", amount: 1700 },
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
              <AmountCard
                title={cardData.description}
                amount={getFormattedNumber(cardData.amount)}
              />
            );
          })}
        </div>
        <div className={`${styles["pots-summary-container"]}`}>
          <PotsSummary />
        </div>
      </div>
    </div>
  );
};
