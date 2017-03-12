import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';




class App extends Component {
    constructor (props) {
        super (props)
        this.myFunction = this.myFunction.bind(this)
    }

    myFunction (event) {

          function success(position) {
            var latitude  = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log(latitude, longitude)
          }

          function error() {
            console.log('error')
          }


          navigator.geolocation.getCurrentPosition(success, error);


            var pge = [<img src="images/coupon3.png" />, < img src="/images/coupon2.jpeg" />, <img src="images/coupon1.jpeg" />, < img src="images/coupon1.jpeg" />];

			for(var i = 0; i < pge.length; i++){
				show_image(pge[i], 200, 200, i)
			}

            function show_image(href, width, height, id) {
			var img = document.createElement("img");
			img.href = "#";
			img.width = width;
			img.height = height;
			img.id = id;



			// This next line will just add it to the <body> tag
			//document.getElementById('coupon').appendChild(img);
			document.body.appendChild(img);
        }
	}

	function imageList (props) {
	    const image = props.imageList;
	    const listItems = image.map((image)) =>
	    <li>{image}</li>);
	    return (
	        <ul>{listItems}</ul>
	     );
	}



  render() {
     var imagesList = [<img src="images/coupon3.png" />, < img src="/images/coupon2.jpeg" />, <img src="images/coupon1.jpeg" />, < img src="images/coupon1.jpeg" />];

    return (
      <div className="App">

        <div className="App-header">
          <h2>My Deal</h2>
        </div>
      <button onClick={this.myFunction} className="displayList"> Near me! </button>
       <imageList images={imageList} />
    </div>
    );
  }
}


export default App;
