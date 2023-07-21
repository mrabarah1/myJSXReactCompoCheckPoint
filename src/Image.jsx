import product from "./Product";
import Card from 'react-bootstrap/Card';

const Image = () => {
    return (
        <>
            <div>
                {
                    product.map(item => {
                        const { image, name } = item;
                        return (
                            <div>
                                <Card.Img src={image} alt={`Photo of ${name}`} variant="top" style={{width:"100px"}}/>
                            </div>
                                
                        )
                    })
                }
            </div>
        </>
    )
}
export default Image;