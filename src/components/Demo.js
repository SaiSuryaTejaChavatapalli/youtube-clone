import { useState } from "react";
import { findPrime } from "../utils/helper";
import { useMemo } from "react";
const Demo = () => {
  const [num, setNum] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const prime = useMemo(() => findPrime(num), [num]);
//   const prime=()=>findPrime(num);

  return (
    <div
      className={`border border-black h-96 w-96 flex flex-col items-center ${
        isDark ? "bg-gray-700 text-white" : ""
      }`}
    >
      <p>Use Memo Hook</p>
      <input
        type="number"
        className="border border-black m-2 p-2"
        onChange={(e) => setNum(e.target.value)}
      />
      <h1>N th Prime : {prime}</h1>
      <button
        onClick={() => setIsDark(!isDark)}
        className="border border-black p-2 m-2 rounded-lg"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Demo;
