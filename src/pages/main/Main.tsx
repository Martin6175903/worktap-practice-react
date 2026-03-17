import { useState } from "react";
import {ReactLogo, ViteLogo} from "assets/icons";

export const Main = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <ViteLogo className="logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <ReactLogo className="logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};