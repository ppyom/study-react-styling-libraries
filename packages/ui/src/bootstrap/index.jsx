// import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-reset.scss';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Bootstrap = () => {
  return (
    <main>
      <h2>Bootstrap</h2>
      <Container>
        <Row>
          <Col>
            <h3>컴포넌트</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Button</h4>
            <button className="text-white bg-primary border-0 px-3 py-2">
              버튼입니다
            </button>
            <Button className="text-white" variant="secondary">
              버튼입니다
            </Button>
          </Col>
          <Col>
            <h4>Card</h4>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://github.com/ppyom.png" />
              <Card.Body>
                <Card.Title>GitHub</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  suscipit rutrum dolor ut dignissim. Interdum et malesuada
                  fames ac ante ipsum primis in faucibus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Bootstrap;
