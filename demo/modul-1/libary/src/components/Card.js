import React from "react";
import Draggable from "react-draggable";

const Card = React.forwardRef((props, ref) => {
  const { title } = props;
  return (
    <Draggable>
      <div
        ref={ref}
        className="card"
        style={{ height: "100px", width: "100px" }}
      >
        <p className="card__content">{title}</p>
        <div className="card__footer">
          <button className="delete">Delete</button>
        </div>
      </div>
    </Draggable>
  );
});

export default Card;
