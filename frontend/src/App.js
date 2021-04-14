import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  const requisition = async () => {
    fetch('https://zxk8x7ofy3.execute-api.sa-east-1.amazonaws.com/dev', {
      method: 'post',
      body: JSON.stringify({
        testKey1: 'test json',
        testKey2: 'ok..',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      .then(resp => {
        console.log('in resp');
        console.log(resp);
      })
  }
  return (
    <Row>
      <Col>
        <Row><h1 onClick={requisition}>Link 1</h1></Row>
        <Row><h1>Link 2</h1></Row>
        <Row><h1>Link 3</h1></Row>
      </Col>
    </Row>
  );
}

export default App;
