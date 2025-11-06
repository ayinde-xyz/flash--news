"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";

const LiveDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  // console.log("Rendered LiveDateTime", dateTime);
  return (
    <div className="text-sm text-orange-400">
      {/* Mobile Format */}

      <span className="md:hidden">
        {/* {format(dateTime, "dd/MM/yy HH:mm")} */}
        {dateTime.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        })}{" "}
        {dateTime.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </span>

      {/* Desktop Format */}
      <span className="hidden md:inline">
        {dateTime.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        {dateTime.toLocaleTimeString("en-US")}
      </span>
    </div>
  );
};

export default LiveDateTime;
