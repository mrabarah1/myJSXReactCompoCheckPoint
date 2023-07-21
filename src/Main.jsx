import Name from "./Name.jsx";
import Price from "./Price.jsx";
import Desc from "./Description.jsx";
import Image from "./Image.jsx";
import Card from "react-bootstrap/Card";

const Main = () => {
    const firstName = "Emeka";
    const image = 'https://i.imgur.com/yXOvdOSs.jpg'
  return (
    <>
      <Card className="card">
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <div>
            <Price />
          </div>
          <Card.Text>
            <Desc />
          </Card.Text>
        </Card.Body>
      </Card>
        <div className="name">
            {`Hello, ${firstName}`}
            <img src={image} alt="" className="img"/>
        </div>
    </>
  );
};
export default Main;
