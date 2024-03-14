import React, { useState } from "react";
import styles from "./Tabs.module.css";
import EnvisionIcon from "../../assets/icons/Icon.png";
import Clock from "../../assets/icons/ClockCounterClockwise.png";
import Gear from "../../assets/icons/Gear.png";
import Eye from "../../assets/icons/Eyeglasses.png";
import UploadFile from "../../pages/Webtool/UploadFile";
import History from "../History/History";
import Setting from "../Setting/Setting";

const Tabs = () => {
  //   const tabs = ["Envision it", "History", "Glasses", "User settings"];
  const tabs = [
    {
      id: 0,
      name: "Envision it",
      icon: EnvisionIcon,
      component: <UploadFile />,
    },
    { id: 1, name: "History", icon: Clock, component: <History /> },
    { id: 2, name: "Glasses", icon: Eye, component: <>Glasses</> },
    {
      id: 3,
      name: "User settings",
      icon: Gear,
      component: <Setting />,
    },
  ];
  const [active, setActive] = useState(tabs[0].id);

  const TabGroup = () => {
    return (
      <div className={styles.container}>
        <div className={styles.tabContainer}>
          {tabs.map((tab) => {
            return (
              <div
                key={tab.name}
                onClick={() => setActive(tab.id)}
                className={`${styles.tab} ${
                  active === tab.id ? styles.active : ""
                }`}
              >
                <div className={styles.img}>
                  <img src={tab.icon} alt="" />
                </div>
                <p className={styles.tabName}>{tab.name}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.tabContent}>
          {/* <p> Your payment selection: - {active}</p> */}
          {tabs[active].component}
        </div>
      </div>
    );
  };

  return <TabGroup />;
};

export default Tabs;
