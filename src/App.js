import data from "./data.json";
import Products from "./Products";
import "./styles.css";
import { useState } from "react";
export default function App() {
  const [prod, setProd] = useState(data);
  return (
    <div className="App">
      {prod.map((item) => {
        const { id, title, price, description } = item;
        return (
          <div key={id}>
            <Products
              title={title}
              price={price}
              description={description}
              image={item.image}
              id={id}
              setProd={setProd}
              prod={prod}
            />
          </div>
        );
      })}
    </div>
  );
}
