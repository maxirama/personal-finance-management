import "./styles.css/index.css";
import { SidebarItems } from "../../types";
import OverviewLogo from "../../assets/images/icon-nav-overview.svg";
import TransactionsLogo from "../../assets/images/icon-nav-transactions.svg";
import BudgetLogo from "../../assets/images/icon-nav-budgets.svg";
import PotLogo from "../../assets/images/icon-nav-pots.svg";
import RecurringBillsLogo from "../../assets/images/icon-nav-recurring-bills.svg";

const Sidebar = () => {
  const SidebarItems = [
    {
      item: "Overview",
      icon: OverviewLogo,
    },
    {
      item: "Transactions",
      icon: TransactionsLogo,
    },
    {
      item: "Budgets",
      icon: BudgetLogo,
    },
    { item: "Pot", icon: PotLogo },
    { item: "Recurring Bills", icon: RecurringBillsLogo },
  ];

  return <aside className="sidebar">Sidebar</aside>;
};

export default Sidebar;
