import product from "./Product";


const Price = () => {
    return (
        <>
            <div>
                {
                    product.map(item => {
                        const{ price } = item;
                        return <h2>{`$ ${price}`}</h2>
                    })
                }
            </div>
        </>
    )
}
export default Price;