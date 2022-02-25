import React, { useRef, useEffect } from "react";
function useOutsideAlerter(ref, setShow, show) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(!show);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function OutsideAlerter(props) {
  useOutsideAlerter(props.wrapperRef, props.setShow, props.show);

  return <>{props.children}</>;
}
