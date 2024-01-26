import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";

const CompanySearchResults = () => {
  // Sthis state stores job data
  // I'll get the title and company name from URL params
  const [jobs, setJobs] = useState([]);
  const params = useParams();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=Olla";

  // Fetch jobs
  useEffect(() => {
    getJobs();
  }, []);

  // Function to fetch jobs based on the company
  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //this is what we see
  //company name, jobs if available

  return (
    <Container>
      <Row>
        <Col className="my-3">
          {/* it displays company name in heading */}
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {/* it displays jobs if available */}
          {jobs.length > 0 && (
            <Row className="justify-content-center">
              {jobs.map((jobData) => (
                <Col key={jobData._id} xs={12} md={4} className="my-3">
                  <Job data={jobData} />
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
