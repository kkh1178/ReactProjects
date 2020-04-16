import React from "react";
import ReactDOM from "react-dom";

// const seasonConfig = {
//     summer: {},
//         text: "let's hit the beach"
// }

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // Javascript ternary expression, if lat is greater than zero, return summer. otherwise return winter.
    // logic checks to see if lat is greater than zero is true
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === "winter" ? "Brrr, it is chilly!" : "Lets hit the beach!";
  const icon = season === 'winter' ? 'snowflake' : 'sun';
  return (
    <div>
        {/* backtick - es2015 template string; This similar to using f-strings in python */}
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;

