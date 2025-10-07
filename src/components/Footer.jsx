import { Navbar, Container } from "react-bootstrap";
function Footer() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="bottom">
      <Container>
        <Navbar.Brand>Brand text</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;
