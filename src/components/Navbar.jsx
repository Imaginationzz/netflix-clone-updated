import { Navbar, Nav, FormControl, Dropdown, DropdownButton } from 'react-bootstrap'
import accountPageIMG from '../images/account-face.png'
import netflixIMG from '../images/netflix.png'
import { Link } from 'react-router-dom'


const NavBar = ({ handleSearchQuery }) => {
  return (
    <Navbar className='px-5' collapseOnSelect expand="lg" variant="dark">
      <Link to='/'>
        <Navbar.Brand ><img src={netflixIMG} alt="netflixIMG" style={{ width: '100px' }} /></Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <DropdownButton variant="outline-info" id="dropdown-item-button" title="Browse" className='Navbar-toggle'>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </Nav>
        <Nav>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            id='search'
            onChange={(e) => handleSearchQuery(e.target.value)}
          />
        </Nav>
      </Navbar.Collapse>
      <DropdownButton
        menuAlign="right"
        title={<img src={accountPageIMG} alt="accountPageIMG" className='nav-img' />}
        id="dropdown-menu-align-right"
        variant="outline-light"
      >
        <Dropdown.Item as={Link} to='/account' eventKey="1">Account</Dropdown.Item>
        <Dropdown.Item as={Link} to='/payment' eventKey="2">Payment</Dropdown.Item>
      </DropdownButton>
    </Navbar >
  )
}




export default NavBar;