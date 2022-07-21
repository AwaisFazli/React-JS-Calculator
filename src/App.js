import "./App.css";
import { ArithmeticButtons } from "./Components/ArithmeticButtons";
import { Display } from "./Components/Display";
import { ButtonPack } from "./Components/ButtonPack";
import { useState } from "react";
import "./Components/ArithmeticButtons.css";

function App() {
  const [calc, setcalc] = useState("");

  const ops = ["+", "-", "*", "/"];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setcalc(calc + value);
  };

  const calculate = () => {
    return setcalc(eval(calc).toString());
  };

  return (
    <div className="Body">
      <div className="Container">
        <div className="Up">
          <Display value={calc || "0"} />

          <tabless />
        </div>
        <div className="Down">
          <ButtonPack updateCalc={updateCalc} calculate={calculate} />
        </div>
      </div>
    </div>
  );
}

export default App;
