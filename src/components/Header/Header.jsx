import { Col, Container, NavLink, Row } from "react-bootstrap";
import headerImage from "../../images/headercontentimage.png";
import styles from "./Header.module.css"; // css file

const Header = () => {
  return (
    <>
      <Container>
        <section id="header" className={styles.header}>
          <Row className={styles.header_content}>
            <Col Col md={6}>
              <div className={styles.header_img}>
                <img src={headerImage} alt="Header" />
              </div>
            </Col>
          </Row>

          <Row className={styles.header_content}>
            <div className={styles.header_content_text}>
              <h2>Your exam data in one place</h2>
              <p>
                An ecosystem for continuous learning for different aspects
                learnings with a focus on software engineering and Technology.
              </p>
              <NavLink className={styles.do_exam_button} href="ExamPage">
                Start Exam
              </NavLink>
            </div>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Header;
