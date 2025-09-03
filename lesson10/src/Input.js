import colorNames from "colornames";

const Input = ({ color, setColor, setHex, isDarkText, setIsDarkText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHex(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default Input;
