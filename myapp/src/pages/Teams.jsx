import NavScrollExample from "./main-components/Navbar.jsx";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Teams = () => {

    const sources =
    ["https://gray-weau-prod.cdn.arcpublishing.com/resizer/xn0JlKWRJThSPL4EfgPHHCC1EZY=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/WLRKUMJJX5OOVJJ5VV2DE3CJHY.jpg",
    "https://i.pinimg.com/originals/d9/7c/70/d97c70a235ac89d114f957c3e6173118.jpg"];

    sources.map((src) => {
        console.log(src);

    });


    return(
        <>
        <NavScrollExample />
        <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="#" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </>
    )
}

export default Teams;