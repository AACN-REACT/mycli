import * as React from "react";
import { Message } from "./message.jsx";


export function Greeting() {
  const [show, switchShow] = React.useState(false);

  return (
    <div>
      <button>Turn on component!!</button>
      {show ? <Message /> : null}
    </div>
  );
}
