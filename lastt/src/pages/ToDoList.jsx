import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Fungsi untuk menambahkan tugas ke daftar todos
  const addTodo = () => {
    if (title.trim() !== "" && description.trim() !== "") {
      const newTodo = { title, description };
      setTodos([...todos, newTodo]);
      setTitle("");
      setDescription("");
    }
  };

  // Fungsi untuk menghapus tugas dari daftar todos
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
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
                    className="inputData"
                    type="text"
                    placeholder="Masukkan nama..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
              </div>

              <div>
                <label>
                  Email :
                  <input
                    className="inputData"
                    type="text"
                    value={description}
                    placeholder="Masukan email..."
                    onChange={(e) => setDescription(e.target.value)}
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
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((todo, index) => (
                    <tr key={index}>
                      <td>{todo.title}</td>
                      <td>{todo.description}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteTodo(index)}
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
