import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Phonesignup from "./components/Phonesignup";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Phonesignup/>} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
