import React, { Component } from 'react'



class SearchBar extends Component {
    locations = [
        {
            city: "berkeley",
            location: "uc berkeley",
            rate: 1.0,
            img: "./img/ucb.jpg"
        },
        {
            city: "los angelas",
            location: "la",
            rate: 1.0,
            img: 100
        },
        {
            city: "san fransico",
            location: "janpan town",
            rate: 0.5,
            img: "./img/japantown.jpg"
        },
        {
            city: "san fransico",
            location: "golden gate",
            rate: 8.0,
            img: "./img/ggate.jpg"
        },
        {
            city: "san deigo",
            location: "boabal park",
            rate: 5.0,
            img: 6
        }
    ];
    constructor(props) {
        
        //this.locations = locations;
        super(props)
        this.state = {
            query: ''
          }
    }
 



 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }


 render() {
   return (
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       {SearchBar.locations.map((l) => <img src={l.img} /> )}
     </form>
   )
 }
}

export default SearchBar

