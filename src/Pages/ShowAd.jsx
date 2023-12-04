import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Img from "../images/img1.jpg";
import Img2 from "../images/img2.jpg";
import Img3 from "../images/img3.jpg";

const ShowAd = () => {
  return (
    <>
      <div className="main-contaner main-container flex-container">
        <Card style={{ width: "18rem", marginRight: "1rem" }} className="">
          <div>
            <div className="flex-container">
              <div className="sub-main1">
                <Card.Img variant="top" src={Img3} />
                <Card.Img variant="top" src={Img3} />
              </div>
              <div className="sub-main2">
                <Card.Img variant="top" src={Img3} />
              </div>
            </div>
          </div>
          <Card.Body>
            <Card.Title>Create </Card.Title>
            <Card.Text>Media Add</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Title>Create</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Text Ad
            </Card.Subtitle>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ShowAd;
