import React, { Component } from 'react'
import {Form} from 'react-bootstrap'

export class Home extends Component {
  render() {
    return (
      <div>
        <h5>Landing Page</h5>
          <div className="search-input">
            <Form.Control size="md" type="text" placeholder="Search By Technology, Student's Name, or Campus Location... " />
          </div>
        <br />
      </div>
    )
  }
}

export default Home
