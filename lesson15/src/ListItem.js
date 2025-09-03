import ItemList from "./ItemList";

const ListItem = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <ItemList key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ListItem;
