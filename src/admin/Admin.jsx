import Table from "react-bootstrap/Table";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function Admin() {
  const [answers, setAnswers] = useState([]);

  React.useEffect(() => {
    axios
      .get("https://examtool-api.vercel.app/answers")
      .then((response) => {
        setAnswers(response.data.answers.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <div className="container">
        <h3>Answers</h3>
        <Table className="pt-1" striped bordered hover border={1}>
          <thead>
            <tr>
              <th>Question ID</th>
              <th>Submitted Time</th>
              <th>Text answer</th>
              <th>Selected answer</th>
            </tr>
          </thead>
          <tbody>
            {answers.map((answer, index) => (
              <tr key={answer._id.toString()}>
                <td>{index}</td>
                <td>{answer.createdAt}</td>
                <td>
                  {answer.answerFreeText.length > 10
                    ? answer.answerFreeText.substring(0, 10) + "..."
                    : answer.answerFreeText}
                </td>
                <td>{answer.answerRadio}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Admin;
