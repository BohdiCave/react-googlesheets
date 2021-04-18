import React, { useState } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

export default function App() {

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [salary, setSalary] = useState();
  const [hobby, setHobby] = useState();

  const changeHandler = e => {
    const {name, value} = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "age":
        setAge(value);
        break;
      case "salary":
        setSalary(value);
        break;
      case "hobby":
        setHobby(value);
        break;
      default:
        break;
    }
  }

  const submitHandler = e => {
    e.preventDefault();
    const state = {name: name, age: age, salary: salary, hobby: hobby};
    console.log(state);
    axios.post('https://sheet.best/api/sheets/6185a151-4aae-4aec-9a52-a48e30ba3550', state)
        .then(res => console.log(res));
  }

  return (
    <Container fluid className="container">
      <Header as='h2'>React Google Sheets!</Header>
      <Form className="form" onSubmit={submitHandler}>
        <Form.Field><label>Name</label>
          <input placeholder='Enter your name' type="text" name='name' value={name} onChange={changeHandler} />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input placeholder='Enter your age' type="text" name="age" value={age} onChange={changeHandler} />
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input placeholder='Enter your salary' type="number" name="salary" value={salary} onChange={changeHandler} />
        </Form.Field>
        <Form.Field>
          <label>Hobby</label>
          <input placeholder='Enter your hobby' type="text" name="hobby" value={hobby} onChange={changeHandler} />
        </Form.Field>
        <Button color='blue' type='submit'>Submit</Button>
      </Form>
    </Container>
  );
  }