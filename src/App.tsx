
import "./styles.css"
import { useState, useEffect } from "react";

export default function App() {
  const [date, setDate] = useState(new Date());

  function refresh() {
    setDate(new Date());
  }

  useEffect(() => {
    let timerId = window.setTimeout(refresh, 1000);

    return () => clearInterval(timerId);
  }, [date]);

  return (
      <p className="timer">{date.toLocaleTimeString()}</p>
    );
}
