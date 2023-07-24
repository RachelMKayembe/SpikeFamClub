import React, { useState } from "react";
import "./tournament.css";
import data from "./tournamentData.json";
import Video from './video';




  
const Tournaments = ({ defaultActiveKey }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const iconLink = "https://cdn-icons-png.flaticon.com/512/2791/2791441.png" ;

    return (
      
      <div className="templateContainer">
        <div style={{backgroundColor:'white'}}>
          <img src={iconLink} alt="Icon" style={{ marginRight: '10px', marginLeft: '800px',width: '40px', height:'40px' }} />
          <h3 style={{marginLeft:"700px", marginBottom:'30px',fontFamily: 'Lato', }}>HOW TO REGISTER</h3>
        </div>
        
        <div>
          <Video/>
        </div>
        <div style={{backgroundColor:'white'}}>
          <h3 style={{marginLeft:"700px", marginBottom:'30px',fontFamily: 'Lato' }}> OUR YEARLY TOURNAMENTS
          </h3>
        </div>
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_Container">
          {data
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
              return null; 
            })
            .map((val) => (
              <div className="template" key={val.id}>
                <img src={val.image} alt="" style={{marginTop:'15px', width:'475px', marginLeft:'30px', marginBottom:'10px'}}/>
                <h3>{val.title}</h3>
                <p className="date">{val.date}</p>
                <p className="price:">{val.price}</p>
                <a href="http://localhost:60994/registration">
                  <button className="regButton">REGISTER</button>
                </a>
              </div>
            ))}
        </div>
      </div>
    );
}

export default Tournaments;

