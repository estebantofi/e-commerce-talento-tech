import { Navbar, Container } from "react-bootstrap";
export const Footer = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="bottom">
      <Container>
        <Navbar.Brand>Brand text</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
