import React, { useState } from "react";
import { MenuItems, serviceDropdown } from "./NavItems";
import styles from "../../styles/dropdown.module.css"

export default function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  return (
    
      <div className={styles.service_font}>
        <ul
        onClick={handleClick}
          className={click ? `${styles.dropdown_menu}` : `${styles.dropdown_menu}`}
        >
          {MenuItems.map((item,index) => {
            return (
              <li key={index}>
                <div
                  className={styles[item.cName]}
                  onClick={() => setClick(false)}
                ><div className={styles.dropdown_font}>
                  {item.title}
                </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
  );
}

