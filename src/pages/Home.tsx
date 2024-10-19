import Sidebar from "../components/Sidebar";
import { TabWrapper } from "../components/TabWrapper";
import styles from "./styles/index.module.css";

export const Home = () => {
  return (
    <div className={`${styles["main-container"]}`}>
      <Sidebar />
      <TabWrapper>
        <h1> Overview</h1>
      </TabWrapper>
    </div>
  );
};
