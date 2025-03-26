import React, { useEffect, useState } from "react";

const Example4 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  // addEventListner를 이용하여 이벤트 등록시 반드시 삭제이벤트도 함께 구현
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h2>현재 창 너비: {width}px</h2>
    </div>
  );
};

export default Example4;
