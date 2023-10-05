import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

const ToDoList = () => {
  
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");

  const { mutate } = useSWRConfig();
  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/todo");
    return response.data;
  };

  const { data: user } = useSWR("user", fetcher);
  if (!user) return <h2>Loading...</h2>;

  const addTodo = async () => {
    if (nama.trim() !== "" && email.trim() !== "") {
      const newTodo = { nama, email };
      try {
        const response = await axios.post(
          "http://localhost:5000/todo",
          newTodo
        );

        setNama("");
        setEmail("");

        mutate("user", [...user, response.data], false);
      } catch (error) {
        console.error("gagal", error);
      }
    }
  };

  const deleteTodo = async (userId) => {
    await axios.delete(`http://localhost:5000/todo/${userId}`);
    mutate("user");
  };

  return (
    <div className="todolist-page">
      <div className="todolist">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mt-5">
                TodoList Pendaftaran Disini
              </h1>
              <p className="text-center">Isikan Nama dan Email Anda</p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-between mt-3 mb-3">
            <Col>
              <div className="label-input-container">
                <label>
                  Nama :
                  <input
                    className=""
                    type="text"
                    placeholder="Masukkan nama..."
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </label>
              </div>

              <div className="label-input-container">
                <label>
                  Email :
                  <input
                    className=""
                    type="text"
                    placeholder="Masukkan Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>

              <button
                className="btn btn-primary rounded-1 ms-1"
                onClick={addTodo}
              >
                Submit
              </button>
            </Col>
          </Row>
          <Row className="data mt-5">
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.title}</td>
                      <td>{user.description}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteTodo(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ToDoList;
