import product from "./Product";

const Name = () => {
  return (
    <>
        {product.map((item) => {
          const { name } = item;
          return <h2>{name}</h2>;
        })}   
    </>
  );
};
export default Name;