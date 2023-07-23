import "./tournament.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

import Table from 'react-bootstrap/Table';
import { PieChart } from '@mui/x-charts/PieChart';




function Adultv() {

  return (
    
    <Container style={{ backgroundColor:'white', color: 'black'}}>
      <h2 style={{marginTop:'20px',marginLeft:'25px', marginBottom:'0px',fontFamily: 'Lato',fontWeight: 'bold' }}>ADULT VOLLEYBALL</h2>
      <Row>
        
        <Col style={{marginTop:'75px',marginLeft:'30px', marginBottom:'10px',fontFamily: 'Lato' }}>
              <h5>
              SpikeFam Volleyball Club offers adult volleyball programs for
              an inclusive and thrilling experience. Choose between competitive 
              and recreational leagues during fall and winter. Open to individuals 
              18 and older, we provide equal opportunities for both men and women. 
              Join SpikeFam and embrace the excitement of adult volleyball.
              </h5>
        </Col>
        <Col> 
        <img src="https://images.pexels.com/photos/1277213/pexels-photo-1277213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" style={{marginTop:'45px', width:'470px',height:"330px" ,marginLeft:'30px', marginBottom:'10px'}}/>

        </Col>
      </Row>
      <Row>
        <Col>
        <h4 style={{fontWeight: 'bold',marginLeft:'30px', marginTop:'55px',fontFamily: 'Lato'}}>Learn More and Register</h4>
        <Accordion defaultActiveKey="0" style={{marginTop:'64px',marginLeft:'30px',width:'550px', marginBottom:'100px',fontFamily: 'Lato' }}>
          
          <Accordion.Item eventKey="0">
            
            <Accordion.Header><h4>Competitive Team</h4></Accordion.Header>
            <Accordion.Body>
                <h5>Our competitive team requires tryouts to ensure a skilled roster.
                We select 12 players for each men's and women's team. Interested 
                players must register for tryouts. Showcase your abilities to secure 
                a spot on our competitive roster, where you'll compete at the highest 
                level of sitting volleyball.
                </h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><h4>Recreational Team</h4></Accordion.Header>
            <Accordion.Body>
              <h5>
                The recreational team welcomes 40 players for both men and women on a first-come,
                first-served basis. Once the maximum number is reached, registration closes to maintain
                a balanced team size. This ensures ample opportunities for participants to enjoy the league
                in a supportive and inclusive environment.
              </h5>
              
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Col>
        <Col>
          <Table striped bordered hover size="sm" style={{marginTop:'55px', marginLeft:'5px',width:'250px', marginBottom:'90px',fontFamily: 'Lato' }}>
          
            <thead>
            <h4 style={{fontWeight: 'bold',fontFamily: 'Lato'}}>Fees</h4>
            Fees can be paid via direct deposit or in-person registration, while tryouts are fee-free.
              <tr>
                
                <th>League</th>
                <th>Amount</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Recreational League</td>
                <td>$300.00</td>
              </tr>
              <tr>
                <td>Competitive League</td>
                <td>$500.00</td>
              </tr>
            
            </tbody>
          </Table>
        </Col>
        
        <Col> 
          
        <h4 style={{fontWeight: 'bold', marginTop:'55px', marginLeft:'30px',fontFamily: 'Lato' }}>Equipment</h4>
        <p style={{fontFamily: 'Lato', marginLeft:'30px' }}>The club provides jerseys and shorts, as well as shoes.
          </p>
          <img style={{height:'150px',width:'150px',marginTop:'0.5px', marginLeft:'40px'}} alt="" src="https://mail.google.com/mail/u/0?ui=2&ik=c44e7b6247&attid=0.1&permmsgid=msg-a:r-2340850172177230404&th=18951b9569708f1f&view=att&disp=safe&realattid=f_lk1tkx970"/>
        </Col>
        <Col>
             <img alt="" style={{height:'150px',width:'150px',marginTop:'179px'}} src="https://mail.google.com/mail/u/0?ui=2&ik=c44e7b6247&attid=0.2&permmsgid=msg-a:r-2340850172177230404&th=18951b9569708f1f&view=att&disp=safe&realattid=f_lk1tkx9b1"/>
        </Col>
      </Row>
      <Row>
        <div>
          <a href="http://localhost:60994/registration">
            <button style={{marginTop:'10px', marginLeft:'550px'}}className="regButton">REGISTER</button>
          </a>
        </div>
      </Row>
      <div style={{ marginTop: '10px', display: 'flex', backgroundColor: '#F2AD46', color: 'black', flexDirection: 'column', marginBottom:'40px',alignItems: 'center',fontFamily: 'Lato' }}>
        <h4 style={{fontWeight: 'bold'}}>Who's Joining Us? Age Diversity of our Registered Members in % (2023)</h4>
        <PieChart
          
          series={[
            {
              data: [
                { id: 0, value: 15, label: '18-24' },
                { id: 1, value: 20.7, label: '25-34' },
                { id: 2, value: 16.7, label: '35-44' },
                { id: 3, value: 11.9, label: '45-54' },
                { id: 4, value: 8.8, label: '55-64' },
                { id: 5, value: 20, label: '65+' },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </div>
      
    </Container>
    
  );
}

export default Adultv;
