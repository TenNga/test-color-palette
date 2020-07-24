import React, { Component } from 'react';
import logo from './logo.svg';

import ImageUploader from 'react-images-upload';
import {Palette} from 'react-palette';

import './App.css';

class App extends Component{

  state = {
    pictures: []
  }

  onDrop = (picture) => {
    this.setState({
        pictures: this.state.pictures.concat(picture)
    });
  }
    
 
  

  render(){
    
    console.log("Picture: ", this.state.pictures[0]);
  
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
        <Palette src={URL.createObjectURL(this.state.pictures[0])}>
        {(palette) => (
          <div style={{ color: palette.data.vibrant}}>
            Text with the vibrant color {palette.darkVibrant}
          </div>
        )}
      </Palette>
         : null}

      
      </div>
    );
  }
}

export default App;
