import React from "react";

function List(props) {
  return (
    <div 
    onClick={() => {
      props.onChecked(props.id);
    }}
  >
    <li>
      {props.content}
    </li>
    </div>
  );
}

export default List;
