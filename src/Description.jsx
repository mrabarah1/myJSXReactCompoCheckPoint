import product from "./Product";

const Desc = () => {
    return (
        <>
            <div>
                {
                    product.map(item => {
                        const { desc } = item;
                        return <p>{desc}</p>
                    })
                }
            </div>
        </>
    )
}
export default Desc;