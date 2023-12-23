import { FC } from "react";
import { Scroll } from "./Scroll";

import "./style.css";

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <Scroll />
    </div>
  );
};
