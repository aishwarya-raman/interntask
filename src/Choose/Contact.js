import React, { Component } from 'react';
import history from '../history';
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'
import { Button } from 'react-bootstrap';
//import images from local
import img1 from './img/kurti.jpeg'
import img2 from './img/pant.jpeg'
import img3 from './img/shirt.jpeg'
import img4 from './img/longsleeve.jpeg'
import img5 from './img/kids-bottom.jpeg'
import img6 from './img/kids top.jpeg'
import img7 from './img/men-ethic-top.webp'
import img8 from './img/salwar.jpeg'
import img9 from './img/men-ethnic-bottom.jpeg'
import img10 from './img/anklefit.jpeg'
 
const imageList = [img1, img2, img3, img4,img5,img6,img7,img8,img9,img10]
 
class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: []
    }
    this.onPick = this.onPick.bind(this)
  }
 
  onPick(image) {
    this.setState({image})
  }
 
  render() {
    return (
      <div>
        <ImagePicker 
          images={imageList.map((image, i) => ({src: image, value: i}))}
          onPick={this.onPick.bind(this)}
          multiple
        />
        
        <Button variant="btn btn-success" onClick={() => history.push('/About')}>Next</Button>
      </div>
    )
  }
}
/* 
export default App
class Contact extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Contact Page</h2>
                </div>
            </div>
        );
    }
}*/

export default Contact;
//render(<Contact/>, document.querySelector('#root'))