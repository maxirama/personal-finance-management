import styles from "./styles/index.module.css";
import { SidebarItems } from "../../types";
import { Link } from "react-router-dom";
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
    <Link to="/">
      <MenuItem
        item={"Overview"}
        icon={OverviewLogo}
        sidebarOpen={sidebarOpen}
      />
    </Link>,
    <Link to="/Transactions">
      <MenuItem
        item={"Transactions"}
        icon={TransactionsLogo}
        sidebarOpen={sidebarOpen}
      />
    </Link>,
    <Link to="/Budget">
      <MenuItem item="Budgets" icon={BudgetLogo} sidebarOpen={sidebarOpen} />
    </Link>,
    <Link to="/Pots">
      <MenuItem item="Pots" icon={PotLogo} sidebarOpen={sidebarOpen} />
    </Link>,
    <Link to="/RecurringBills">
      <MenuItem
        item="Recurring Bills"
        icon={RecurringBillsLogo}
        sidebarOpen={sidebarOpen}
      />
    </Link>,
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
      {SidebarItems.map((item) => {
        return item;
      })}
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
