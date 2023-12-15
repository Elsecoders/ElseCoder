import React from 'react';
import './informationalBlog.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const InformationalBolg = () => {
  return (
   <>
   <div className='InformationalBlog'>
      <div className='Info-Blog-heading'>
          <h3>Insights to help you stay ahead of change</h3>
          <p>Informational Blogs</p>

          <div className='Blog-Box'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/Images/2.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="fles">
      <Card.Img variant="top" src="/Images/2.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/Images/2.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

          </div>
      </div>
   </div>
   </>
  );
}

export default InformationalBolg;
