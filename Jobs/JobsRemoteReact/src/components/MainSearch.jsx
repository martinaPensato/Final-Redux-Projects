import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Job from "./Job";
import workHomeImage from "../assets/img/workHome.jpeg";
import relaxWorkImage from "../assets/img/relaxWork.jpeg";
import gardenWorkImage from "../assets/img/gardenWork.jpeg";
import { FaDesktop } from "react-icons/fa"; // Import the desktop icon from react-icons library
import CustomNavbar from "./Navbar"; // Importa il componente Navbar
import CustomFooter from "./Footer"; // Importa il componente Footer

// I need this state for handling the search query and job results
const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  //handler for updating the search query
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  //handler for submitting the search form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // it fetches jobs based on the search
    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`
      );
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        // displays an alert if there is an error fetching results
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //this is the main search section
  return (
    <>
      <CustomNavbar />

      <Container
        fluid
        className="text-center my-4 py-4"
        style={{ background: "burlywood", color: "#fff" }}
      >
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "80%" }}
        >
          <Col xs={12} md={4} className="mb-3">
            <img
              src={workHomeImage}
              alt="Home Job Image"
              className="img-fluid img-desktop"
              style={{
                borderRadius: "20%",
                width: "100%",
                height: "100%",
                maxWidth: "400px",
                marginLeft: "auto",
              }}
            />
          </Col>

          <Col xs={12} md={4} className="mb-3">
            <FaDesktop className="desktop-icon" size={40} />

            <h1 className="display-1" style={{ fontWeight: "bold" }}>
              Boring? Not even... Remotely!
            </h1>

            <Form
              onSubmit={handleSubmit}
              className="d-inline-flex align-items-center p-4"
            >
              {/* search input */}
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="Search and GO!"
                style={{
                  backgroundColor: "#fff",
                  color: "#333",
                  border: "none",
                  borderRadius: "15px",
                  fontSize: "1.5em",
                  padding: "10px",
                  outline: "none",
                  marginRight: "10px",
                }}
              />
              {/* search button */}
              <Button
                variant="dark"
                style={{
                  backgroundColor: "#603c29", // Marrone più scuro
                  borderRadius: "50%",
                  borderStyle: "none",
                  fontSize: "1.5em",
                  padding: "10px",
                  marginRight: "10px",
                  width: "50px", // Altezza uguale alla larghezza per ottenere un bottone tondo
                  height: "50px", // Altezza uguale alla larghezza per ottenere un bottone tondo
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={handleSubmit}
              >
                <span style={{ color: "#fff" }}>GO</span>
              </Button>
            </Form>
            <Button
              variant="outline-success"
              onClick={() => navigate("/favorites")}
              style={{
                height: "50px",
                marginBottom: "10px",
              }}
            >
              Saved Jobs
            </Button>
          </Col>

          <Col xs={12} md={4} className="mb-3 position-relative">
            <img
              src={relaxWorkImage}
              alt="Relax Work Image"
              className="img-fluid img-desktop"
              style={{
                borderRadius: "20%",
                width: "100%",
                maxWidth: "300px",
                height: "300px",
                objectFit: "cover",
                padding: "10px",
              }}
            />
            <img
              src={gardenWorkImage}
              alt="Garden Work Image"
              className="img-fluid img-desktop"
              style={{
                borderRadius: "20%",
                width: "100%",
                maxWidth: "300px",
                height: "300px",
                objectFit: "cover",
                padding: "10px",
              }}
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={10} className="mx-auto mb-5">
            {/* i need this to map through jobs and render the job component for each */}
            {jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
      <CustomFooter />
    </>
  );
};

export default MainSearch;
