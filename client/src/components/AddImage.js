import React, { Component } from "react";

// import the service file since we need it to send (and get) the data to(from) server
import service from "../api/service";

class AddImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // this method handles just the file upload
  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new image in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    service
      .handleUpload(uploadData)
      .then(response => {
        console.log("response is: ", response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        // this.setState({ imageUrl: response.secure_url });
        this.props.onImageChange(response.secure_url);
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };

  render() {
    return (
      <div>
        <input type="file" onChange={e => this.handleFileUpload(e)} />
      </div>
    );
  }
}

export default AddImage;
