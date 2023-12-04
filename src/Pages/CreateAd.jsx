import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";

function GridComplexExample() {

  const [createAd , setCreateAd] = useState([]);

  const [isChecked, setIsChecked] = useState(false);
  const [heading1, setHeading1] = useState('');
  const [heading2, setHeading2] = useState('');
  const [dec, setDec] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [buttonLable, setButtonLable] = useState('');
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');
  const [webURL, setwebURL] = useState('');


  const handleCreateAddSubmit=(e)=>{
    e.preventDefault();

    let create = {
      heading1,
      heading2,
      dec,
      businessName,
      buttonLable,
      webURL
    }
    setCreateAd([...createAd,create])
    setHeading1('');
    setHeading2('');
    setDec('');
    setBusinessName('');
    setButtonLable('');
    setwebURL('');

  }

  useEffect(()=>{
    localStorage.setItem('create',JSON.stringify(createAd));
  },[createAd])


  return (
    <>
      <div className="main-contaner">
        <Form className="main-container" onSubmit={handleCreateAddSubmit}>
          <div className="CreateAd">
            <h4>Create Text & Media</h4>
            <div className="main flex-container">
              <div className="sub-main1 ">
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGrid">
                    <Form.Label>Heading 1</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Add a heading that would make users interested"
                      value={heading1}
                      onChange={(e)=> setHeading1(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Heading 2</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Add a heading that would make users interested"
                      value={heading2}
                      onChange={(e)=> setHeading2(e.target.value)}
                    />
                  </Form.Group>
                </Row>
              </div>
              <div className="sub-main2">
                <Form.Group
                  className="mb-3 description"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description1</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Add Primary text to help user understand more about your product services or offers"
                    value={dec}
                    onChange={(e)=> setDec(e.target.value)}
                  />
                </Form.Group>
              </div>
            </div>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGrid">
                <Form.Label>Business Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add your business name"
                  value={businessName}
                  onChange={(e)=> setBusinessName(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGrid">
                <Form.Label>Button Lable</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Select a lable that suits your ad"
                  value={buttonLable}
                  onChange={(e)=> setButtonLable(e.target.value)}
                />
              </Form.Group>
            </Row>
            <div className="">
              <input
                type="checkbox"
                defaultChecked={isChecked}
                onClick={() => setIsChecked(!isChecked)}
                className="checkbox"
              />
              {isChecked ? (
                <Row className="mb-3">
                  <Form.Group controlId="formFile" className="mb-3 col-4">
                    <Form.Label>Landscape Marketing Image</Form.Label>
                    <Form.Control type="file" value={img1} />
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3 col-4">
                    <Form.Label>Portrait Marketing Image</Form.Label>
                    <Form.Control type="file" value={img2} />
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3 col-4">
                    <Form.Label>Square Marketing Image</Form.Label>
                    <Form.Control type="file" value={img3} />
                  </Form.Group>
                </Row>
              ) : (
                <Form.Label>Create text and Media</Form.Label>
              )}
            </div>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGrid">
                <Form.Label>Website URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add the URL of the landing page you want to redirect users to"
                  value={webURL}
                  onChange={(e)=> setwebURL(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Button variant="primary" style={{ float: "right" }} type="submit">
              Submit
            </Button>
            {/* <Button variant="outline-secondary" style={{ float: "right" }}>
              Back
            </Button>{" "} */}
          </div>
        </Form>
      </div>
    </>
  );
}

export default GridComplexExample;
