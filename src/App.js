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
    console.log("Picture: ", this.state.pictures[0]);
    if(this.state.pictures.length > 0){
      const path = URL.createObjectURL(this.state.pictures[0])
      console.log("URL: ", path)
    }
    return (
      <div className="App">
        <ImageUploader
                  withIcon={true}
                  buttonText='Choose images'
                  onChange={this.onDrop}
                  imgExtension={['.jpg', '.gif', '.png', '.gif']}
                  maxFileSize={5242880}
                  withPreview={true}
        />
        {this.state.pictures.length > 0?
         <img src={URL.createObjectURL(this.state.pictures[0])} /> 
         : null}
      </div>
    );
  }
}

export default App;
