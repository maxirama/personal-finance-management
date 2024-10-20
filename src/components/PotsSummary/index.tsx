import PotLogo from "../../assets/images/icon-pot.svg";
import { PotDetails } from "../PotDetails";
import style from "./styles/index.module.css";
export const PotsSummary = () => {
  const PotsDetailList = [
    { description: "Savings", amount: 159, borderColor: "#277c78" },
    { description: "Concert Ticket", amount: 110, borderColor: "#82c9d7" },
    { description: "Gift", amount: 40, borderColor: "#626070" },
    { description: "New Laptop", amount: 10, borderColor: "#f2cdac" },
  ];
  return (
    <div className={style["pot-summary-container"]}>
      <div className={style["pot-card-title"]}>
        <h4>Pots</h4>
        <div>View All</div>
      </div>
      <div className={style["pot-details-container"]}>
        <div className={style["total-saved"]}>
          <img style={{ height: "40px", width: "40px" }} src={PotLogo} />
          <div className={style["total-saved-description"]}>
            Total Saved
            <div>$850</div>
          </div>
        </div>
        <div className={style["pot-details-list"]}>
          {PotsDetailList.map((pot) => {
            return (
              <PotDetails
                title={pot.description}
                amount={pot.amount}
                borderColor={pot.borderColor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
