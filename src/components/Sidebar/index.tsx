import "./styles/index.css";
import { SidebarItems } from "../../types";
import OverviewLogo from "../../assets/images/icon-nav-overview.svg";
import TransactionsLogo from "../../assets/images/icon-nav-transactions.svg";
import BudgetLogo from "../../assets/images/icon-nav-budgets.svg";
import PotLogo from "../../assets/images/icon-nav-pots.svg";
import RecurringBillsLogo from "../../assets/images/icon-nav-recurring-bills.svg";
import MenuItem from "../MenuItem";

const Sidebar = () => {
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

  return (
    <aside className="sidebar-container">
      <h5>{"finance"}</h5>
      {SidebarItems.map((item) => (
        <MenuItem item={item.description} icon={item.icon} />
      ))}
    </aside>
  );
};

export default Sidebar;
