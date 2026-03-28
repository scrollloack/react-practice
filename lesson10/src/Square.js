const Square = ({ color, hex, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: color,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p>{color ? color : "Empty Value"}</p>
      <p>{hex ? hex : null}</p>
    </section>
  );
};

export default Square;
