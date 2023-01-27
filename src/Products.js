export default function Products(props) {
  console.log(props);
  const handleDel = (id) => {
    console.log("handleDel button clicked", id);
    let filtered = props.prod.filter((item) => {
      return item.id !== id;
    });
    props.setProd(filtered);
  };
  return (
    <div className="prods" key={props.id}>
      <h3> {props.title} </h3>
      <img alt="title" src={props.image} width={99} />
      <p> {props.description} </p>
      <h4>${props.price} </h4>
      <button onClick={() => handleDel(props.id)}> delete </button>
    </div>
  );
}
