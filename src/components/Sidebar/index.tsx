import styles from "./styles/index.module.css";
import { SidebarItems } from "../../types";
import OverviewLogo from "../../assets/images/icon-nav-overview.svg";
import TransactionsLogo from "../../assets/images/icon-nav-transactions.svg";
import BudgetLogo from "../../assets/images/icon-nav-budgets.svg";
import PotLogo from "../../assets/images/icon-nav-pots.svg";
import RecurringBillsLogo from "../../assets/images/icon-nav-recurring-bills.svg";
import MinimizeMenuLogo from "../../assets/images/icon-minimize-menu.svg";
import MenuItem from "../MenuItem";
import { useState } from "react";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const SidebarItems = [
    {
      description: "Overview",
      icon: OverviewLogo,
    },
    {
      description: "Transactions",
      icon: TransactionsLogo,
    },
    {
      description: "Budgets",
      icon: BudgetLogo,
    },
    { description: "Pot", icon: PotLogo },
    { description: "Recurring Bills", icon: RecurringBillsLogo },
  ];

  const toggleItemStyle = sidebarOpen
    ? `${styles["toggle-menu-item-open"]}`
    : `${styles["toggle-menu-item-close"]}`;

  const handleClick = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <aside className={`${styles["sidebar-container"]}`}>
      <h5>{sidebarOpen ? "finance" : "f"}</h5>
      {SidebarItems.map((item) => (
        <MenuItem
          item={item.description}
          icon={item.icon}
          sidebarOpen={sidebarOpen}
        />
      ))}
      <span className={toggleItemStyle} onClick={handleClick}>
        {sidebarOpen && (
          <MenuItem
            item={"Minimize Menu"}
            icon={MinimizeMenuLogo}
            sidebarOpen={sidebarOpen}
          />
        )}
        {!sidebarOpen && (
          <MenuItem
            item=""
            icon={MinimizeMenuLogo}
            sidebarOpen={!sidebarOpen}
          />
        )}
      </span>
    </aside>
  );
};

export default Sidebar;
