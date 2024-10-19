import Sidebar from "../components/Sidebar";
import { TabWrapper } from "../components/TabWrapper";
import styles from "./styles/index.module.css";

export const Home = () => {
  return (
    <div className={`${styles["page-wrapper"]}`}>
      <Sidebar />
      <div className={`${styles["main-container"]}`}>
        <TabWrapper>
          <h1> Overview</h1>
        </TabWrapper>
      </div>
    </div>
  );
};
