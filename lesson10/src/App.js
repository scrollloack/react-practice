import { useState } from "react";

import Square from "./Square";
import Input from "./Input";

function App() {
  const [color, setColor] = useState("");
  const [hex, setHex] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <Square color={color} hex={hex} isDarkText={isDarkText} />
      <Input
        color={color}
        setColor={setColor}
        setHex={setHex}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
