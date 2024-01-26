import React, { useState } from "react";
import { Navbar, Nav, Modal, Button } from "react-bootstrap";
import { FaDesktop } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  // reindirizzo alla pagina Home
  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand onClick={handleHomeClick} style={{ cursor: "pointer" }}>
          <FaDesktop className="desktop-icon p-2" size={40} />
          Remotely
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={handleHomeClick} style={{ cursor: "pointer" }}>
            Home
          </Nav.Link>
          <Nav.Link onClick={handleModalShow}>About</Nav.Link>
        </Nav>
      </Navbar>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>About Remotely</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* this is the "about" text */}

          <p className="text-justify">
            🌈Hey Future Game-Changer🌈
            <br />
            ever dreamt of landing your dream job in your PJs? Well, grab your
            coffee, because we're about to make that dream a reality!
            <br />
            At Remotely, we're not just another job portal; we're your career
            co-pilot on the quest for the perfect remote gig! 🚀
            <br />
            <br />
            Why be confined by borders when your skills can conquer the world?
            Whether you're coding like a wizard, slaying customer service with a
            smile, or diving into data like a pro, we've got a spot just for
            you.
            <br />
            <br />
            But hold up, we're not your average suit-and-tie job site. We're all
            about breaking free from the mundane, embracing your quirks, and
            finding a job that not only pays the bills but also makes your heart
            do a happy dance. 💃
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomNavbar;
