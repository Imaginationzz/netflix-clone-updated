import { Col, Container, Row } from 'react-bootstrap'
import striveLogo from '../images/strive.png'

const Payment = () => {
  return (
    <Container className='text-white w-75'>
      <h1 className='border-bottom py-3'>Edit Profile</h1>
      <Row>
        <Col>
          <img src={striveLogo} alt="logo" />
        </Col>
        <Col >
          <div className='border-bottom py-3'>
            <input type="text" defaultValue="Strive School" />
            <h4 className="text-white">Language:</h4>
            <select name="" id="">
              <option value="English">English</option>
              <option value="English">Turkish</option>
              <option value="English">Russion</option>
            </select>
          </div>
          <div className='border-bottom py-3'>
            <h4>Maturity Settings</h4>
            <button>ALL MATURITY RATING</button>
            <p>Show titels of all maturity ratings for this profile</p>
            <button>Edit</button>
          </div>
          <div className='border-bottom py-3'>
            <h4>Autoplay Controls</h4>
            <input className="checkbox" type="checkbox" name="vehicle3" value="Boat" />
            <label htmlFor="vehicle3">Autoplay next episode in a series on all devices</label>

            <input className="checkbox" type="checkbox" name="all" value="Boat" />
            <label htmlFor="all">Autoplay privious while browsing on all</label>
          </div>
          <div className='border-bottom py-3 text-center'>
            <button className='mx-1'>Save</button><button className='mx-1'>Cancel</button><button className='mx-1'>Delete Profile</button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}



export default Payment