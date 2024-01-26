import React from "react";
import { Button, Modal } from "react-bootstrap";

// i created this modal component using react-bootstrap, it shows the job info (fetched from API) and it works with the 'show info' prop
const JobModal = ({ show, onHide, title, company, description }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          {title} at {company}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* here i am using dangerouslySetInnerHTML to render the HTML content of the job description, since description is formatted with HTML tags */}
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JobModal;
