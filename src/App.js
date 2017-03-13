import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

/*
app.route('/getAuthCode')
    .get((req, res) => {
        console.log("getting restaurants from opentable");

		let options = {
		  host: 'oauth-pp.opentable.com',
		  port: 443,
		  path: '/api/v2/oauth/token?grant_type=client_credentials',
		  method: 'POST',
		  headers: {
		    'Authorization': 'Basic ' + new Buffer('cpa_5069' + ':' + 'aMrmcXH4BuUlLIyN6paPhseSlrzMh6Lz').toString('base64')
		  }
		};

		let request = https.get(options, (response) => {
			let body = ""
			response.on('data', (data) => body += data )
            //here we have the full response, html or json object
			response.on('end', () => res.send(body))
			response.on('error', (e) => console.log("Got error: " + e.message) )
		});

    })

app.route('/getListings')
    .get((req, res) => {
        console.log("getting restaurants from opentable");

		let options = {
		  host: 'platform.otqa.com',
		  port: 443,
		  path: '/sync/listings',
		  method: 'GET',
		  headers: {
		  	'Authorization': 'bearer 27037c67-f394-4cfd-ab51-069ac71132fb',
		  	'Content-Type': 'application/json'
		  }
		};

		let request = https.get(options, (response) => {
			let body = "";
			response.on('data', function(data) {
				console.log(data);
				body += data;
			});
			response.on('end', function() {
				//here we have the full response, html or json object
				console.log('typeof body', typeof body);
				res.send(body);
			})
			response.on('error', function(e) {
				console.log("Got error: " + e.message)
			});
		});

    })
 app.route('/getRestaurantInfo')
    .get((req, res) => {
        console.log("getting restaurants from opentable");

		let options = {
		  host: 'oauth-pp.opentable.com',
		  port: 443,
		  path: '/api/v2/oauth/token?grant_type=client_credentials',
		  method: 'POST',
		  headers: {
		    'Authorization': 'Basic ' + new Buffer('cpa_5069' + ':' + 'aMrmcXH4BuUlLIyN6paPhseSlrzMh6Lz').toString('base64')
		  }
		};

		console.log(options)

		let request = https.get(options, (response) => {
			let body = "";
			response.on('data', function(data) {
				console.log(data);
				body += data;
				res.send(body);
			});
			response.on('end', function() {
				//here we have the full response, html or json object
				console.log(body);
			})
			response.on('error', function(e) {
				console.log("Got error: " + e.message)
			});
		});

    })

app.route('/getRestaurant/:id')
    .get((req, res) => {
        console.log("getting restaurant information from opentable");
        res.send({});
    })*/


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


            var pge = [{image: require("./images/coupon1.jpeg")}, <img src="/images/coupon2.jpeg" />, <img src="images/coupon1.jpeg" />];

			for(var i = 0; i < pge.length; i++){
				show_image(pge[i], 200, 200, i)
			}

            function show_image(alt, width, height, id) {
			var img = document.createElement("img");
			img.src = '#';
			img.width = width;
			img.height = height;
			img.id = id;

			// This next line will just add it to the <body> tag

			document.body.appendChild(img);
        }
	}

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h2>My Deal</h2>
        </div>
      <button onClick={this.myFunction} className="displayList"> Near me! </button>
      <img src="http://teamxpc.com/wp-content/uploads/2016/10/kmart-printable-coupons-5uudmpn4.jpeg" style={{width: '250px', height: '250px', float: 'left', margin: '10'}}/>
    </div>
    );
  }
}


export default App;
