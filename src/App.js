import React, { Component } from 'react';
import logo from './logo.svg';

import ImageUploader from 'react-images-upload';
import './App.css';

class App extends Component{

  state = {
    pictures: [],
  }

  onDrop = (picture) => {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
}
  

  render(){
    console.log("Picture: ", this.state.picture);
    return (
      <div className="App">
        <ImageUploader
                  withIcon={true}
                  buttonText='Choose images'
                  onChange={this.onDrop}
                  imgExtension={['.jpg', '.gif', '.png', '.gif']}
                  maxFileSize={5242880}
              />
      </div>
    );
  }
}

export default App;
