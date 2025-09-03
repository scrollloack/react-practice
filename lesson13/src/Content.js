import ItemList from "./ItemList";

const Content = ({ handleCheck, handleDelete, items }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          items={items}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </>
  );
};

export default Content;
