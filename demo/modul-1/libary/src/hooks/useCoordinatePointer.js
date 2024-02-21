import React from "react";

export const useCoordinatePointer = (ref) => {
  React.useEffect(() => {
    const header = ref.current.querySelector("#header");
    const coordinate_x = header.querySelector(".coordinate_x");
    const coordinate_y = header.querySelector(".coordinate_y");

    function changeCoordinatePosition(event) {
      coordinate_x.innerHTML = event.clientX;
      coordinate_y.innerHTML = event.clientY;
    }

    document.addEventListener("mousemove", changeCoordinatePosition);
  }, [ref]);
};
