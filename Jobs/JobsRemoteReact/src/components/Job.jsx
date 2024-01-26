import React, { useRef, useEffect, useState } from "react";
import { Card, Button, Modal, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../actions/favoriteActions";
import { BsPlus, BsDash } from "react-icons/bs";
import JobModal from "./JobModal";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const cardRef = useRef(null);
  const [showInfo, setShowInfo] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // I had to use this to ensure equal heights for all job cards
    // I'm asking it to find the tallest card height and set it for all cards
    if (cardRef.current) {
      const tallestCardHeight = Math.max(
        ...Array.from(document.querySelectorAll(".job-card")).map(
          (card) => card.clientHeight
        )
      );
      cardRef.current.style.height = `${tallestCardHeight}px`;
    }
  }, []);

  // this toggles the visibility of additional job info
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  // this shows the modal with job info
  const handleModalShow = () => {
    setShowModal(true);
  };
  //closes the modal
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Card
      ref={cardRef}
      className="job-card mx-0 my-3"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Card.Body>
        <Card.Title>
          {/* it displays company name */}
          <h2 className="mb-2">
            <Link
              to={`/${data.company_name}`}
              className="text-decoration-none text-success"
            >
              {data.company_name}
            </Link>
          </h2>
        </Card.Title>
        <Card.Text>
          {/* it displays the job title with a link to its page */}
          <h3>
            <a
              href={data.url}
              target="_blank"
              rel="noreferrer"
              className="text-dark"
            >
              {data.title}
            </a>
          </h3>
        </Card.Text>
        {/* button to add the job to favorites */}
        <Button
          variant="success"
          onClick={() => dispatch(addFavorite(data.title))}
          className="me-2"
        >
          <BsPlus size={20} className="me-2" />
          Save!
        </Button>
      </Card.Body>
      <Card.Footer>
        {/* button to show additional job info */}
        <Button
          variant="outline-info"
          onClick={handleModalShow}
          className="mt-2"
        >
          {showInfo ? <BsDash /> : <BsPlus />} Show Info
        </Button>
      </Card.Footer>
      {/* modal with job info */}
      <JobModal
        show={showModal}
        onHide={handleModalClose}
        title={data.title}
        company={data.company_name}
        description={data.description}
      />
    </Card>
  );
};

export default Job;
