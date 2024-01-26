import React from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FAVORITE } from "../actions/favoriteActions";
import CustomNavbar from "./Navbar";
import CustomFooter from "./Footer";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.list);

  //this is the main container, this is what we'll see
  return (
    <>
      <CustomNavbar />
      <Container
        className="my-4 py-4 text-center"
        style={{ backgroundColor: "burlywood", color: "#fff" }}
      >
        <Row>
          <Col>
            {/* Header section */}
            <h1 style={{ fontWeight: "bold" }}>Your Favorites</h1>
          </Col>
        </Row>
        {/*I used a two-column layout to have a responsive page */}
        <Row className="justify-content-center align-items-start">
          <Col xs={12} md={6}>
            <Container
              className="mt-3 p-3"
              style={{
                borderRadius: "10%",
                background: "#333",
                width: "80%",
                maxWidth: "400px",
              }}
            >
              <p style={{ color: "#fff", fontSize: "1rem" }}>
                Explore this magical realm of awesomeness where all your
                favorite jobs hang out. Yup, you heard it right – this page is
                like a VIP lounge for the coolest gigs you've saved as your
                all-time faves! 🚀
              </p>
            </Container>
          </Col>
          {/* column with the list of favorite jobs */}
          <Col xs={12} md={6}>
            <ListGroup className="mt-4">
              {favorites.length > 0 ? (
                // here i'm saying: if there are favorites, map through them and display job title and company name in ListGroup.Item
                favorites.map((fav, index) => (
                  <ListGroup.Item
                    key={index}
                    className="text-center mb-3"
                    style={{
                      backgroundColor: "#fff",
                      color: "#333",
                      padding: "15px",
                      borderRadius: "10px",
                    }}
                  >
                    {/* button to remove the job from favorites */}
                    {fav}
                    <Button
                      variant="outline-danger"
                      className="mx-2"
                      onClick={() =>
                        dispatch({ type: REMOVE_FAVORITE, payload: fav })
                      }
                    >
                      Delete
                    </Button>
                  </ListGroup.Item>
                ))
              ) : (
                // If there are no favorites, display this text
                <ListGroup.Item>You don't have any... yet!</ListGroup.Item>
              )}
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <CustomFooter />
    </>
  );
};

export default Favorites;
