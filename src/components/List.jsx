import React from "react";

function List(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.content}
    </li>
  );
}

export default List;
