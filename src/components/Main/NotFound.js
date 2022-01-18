import React from "react";

export default function NotFound({ msg }) {
  React.useEffect(
    () => (document.title = "Not found - Would You Rather App"),
    []
  );

  return (
    <div className="text-center">
      <img
        style={{ width: "50%", transform: "translateY(-30px)" }}
        src="/img/not-found.svg"
        alt="not found"
      />
      <p style={{ transform: "translateY(-45px)" }}>
        {!msg ? "This page doesn't exist." : msg}
      </p>
    </div>
  );
}
