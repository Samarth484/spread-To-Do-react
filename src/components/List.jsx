import React, { useState } from "react";
function List(props) {
  const [isDone, setIsDone] = useState(false);
  function handleChange() {
    setIsDone(prevValue => !prevValue);
  }

  return (
    <li
      onClick={handleChange}
      style={{ textDecoration: isDone && "line-through" }}
    >
      {props.content}
    </li>
  );
}

export default List;
