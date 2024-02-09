/*react-bootstrap compnents*/
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";

//css file
import "./ExamPage.module.css";
import { useState } from "react";

function ExamPage() {
  const [answer, setAnswer] = useState(); //answer state to add answer from the
  const [radioAnswer, setSelectedAnswer] = useState(null);

  // handle the change directly after edit the value for the free text answer
  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  // handle the action after submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();

    const addAnswer = { answer, radioAnswer };

    axios
      .post("https://examtool-api.vercel.app/answers", {
        answerFreeText: answer,
        answerRadio: radioAnswer,
      })
      .then(function (response) {
        response.message = "Added to DB succesfully"
          ? (window.location = "/")
          : console.log("esrror");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <Form className="exam-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 p-2" controlId="freeTextAnswer">
          <Row>
            <Row>
              <Form.Label>Your answer is here:</Form.Label>
            </Row>
            <Row>
              <Form.Control
                type="text"
                placeholder="my answer is"
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
              />
            </Row>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3 p-2">
          <Row>Question 1:</Row>
          <Row className="pt-2">
            <Row className="pt-2">
              <Form.Label>
                What is the name of the leader who build the majsed Alaqsa?
              </Form.Label>
            </Row>
            <Row className="pt-2">
              {" "}
              <Form.Check
                inline
                label="this is answer #1"
                name="radioAnswer"
                type="radio"
                id={`1`}
                checked={radioAnswer === "this is answer #1"}
                onChange={handleChange}
                value="this is answer #1"
              />
              <Form.Check
                inline
                label="this is answer #2"
                name="radioAnswer"
                value="this is answer #2"
                type="radio"
                id={`2`}
                checked={radioAnswer === "this is answer #2"}
                onChange={handleChange}
              />
              <Form.Check
                inline
                label="this is answer #3"
                value="this is answer #3"
                name="radioAnswer"
                type="radio"
                id={`3`}
                checked={radioAnswer === "this is answer #3"}
                onChange={handleChange}
              />
            </Row>
          </Row>
        </Form.Group>
        <Row className="pt-2">
          <Col className="text-center">
            <Button type="submit" id="submitButton">
              Submit form
            </Button>
          </Col>
          <Col className="text-center">
            <Button href="/">Back to home</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default ExamPage;
