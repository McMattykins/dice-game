import React from "react";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fas)

export default function Die({value, isHeld, holdDice}) {
  const numString = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six"
  }
  
  const styles = {
    backgroundColor: "#0B2434",
    color: isHeld ? "#59E391" : "white"
  }

  return (
    <div 
      className="die-face"
      style={styles}
      onClick={holdDice}
    >
      <h2 className="die-num">
        <FontAwesomeIcon icon={['fas', `dice-${numString[value]}`]} />
      </h2>
    </div>
  )
}