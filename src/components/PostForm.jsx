import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { CREATE_POST } from '../queries/Mutations';

export default class PostForm extends Component {
  state = {
    title: '',
    body: '',
  };
  // THIS IS HANDLING THE INPUT VALUES AND USING COMPUTED PROPERTIES
  handleInput = e => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({
      ...formData,
    });
  };

  render() {
    // THIS DATA WILL BE PASSED INTO THE MUTATION VARAIBLE
    const { title, body } = this.state;

    return (
      <Mutation mutation={CREATE_POST} variables={{ title, body }}>
        {createPost => (
          <FormWrapper
            action=""
            onSubmit={e => {
              e.preventDefault();
              createPost()
                .then(() => {
                  this.setState({
                    title: '',
                    body: '',
                  });
                })
                .catch(error => console.log(error));
            }}
          >
            <InputSection>
              <label htmlFor="title">TITLE</label>
              <input
                onChange={this.handleInput}
                className="form_title"
                type="text"
                name="title"
                id="title"
                // value="title"
                placeholder="Title"
              />
            </InputSection>
            <InputSection>
              <label htmlFor="body">BODY</label>
              <textarea
                onChange={this.handleInput}
                className="form_body"
                type="text"
                name="body"
                id="body"
                placeholder="Body"
                // value="body"
              />
            </InputSection>
            <Button type="submit">POST</Button>
          </FormWrapper>
        )}
      </Mutation>
    );
  }
}

const FormWrapper = styled.form`
  display: grid;
  padding: 50px;
  grid-gap: 10px;
  font-weight: bold;
  outline: none;
  input[type='text'] {
    width: 350px;
  }
  .form_title {
    height: 50px;
    border-radius: 3px;
    font-size: 1.2em;
    padding: 0 8px;
    text-transform: capitalize;
    font-weight: 500;
    margin-top: 10px;
    border: 2px solid #6200ee;
  }
  .form_body {
    height: 200px;
    width: 350px;
    resize: none;
    border-radius: 3px;
    padding: 10px;
    font-size: 16px;
    margin-top: 10px;
    font-weight: 500;
    border: 2px solid #6200ee;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
`;

const InputSection = styled.div`
  display: grid;
  text-align: left;
`;

const Button = styled.button`
  width: 350px;
  height: 48px;
  border-radius: 3px;
  padding: 5px;
  font-weight: bold;
  font-size: 1em;
  letter-spacing: 1.2px;
  border: none;
  text-transform: uppercase;
  background: #6200ee;
  color: white;
`;
