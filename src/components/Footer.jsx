import React from "react";

const Footer = () => {
  return (
    <>
      <nav
        className="navbar navbar-dark bg-dark"
        style={{ height: "350px", marginTop: "40px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <img src="./images/banner.png" alt="" height={120} />
              <p style={{ color: "white" }}>+918362372298</p>
              <p style={{ color: "white" }}>infodesk@klebcahubli.in</p>
            </div>

            <div className="col" style={{marginLeft:'500px'}}>
              <h6 style={{listStyle:'none',color:'white'}}>COMPANY</h6>
              <ul>
                <li style={{listStyle:'none',color:'white'}}>About Us</li>
                <li style={{listStyle:'none',color:'white'}}>Blog</li>
                <li style={{listStyle:'none',color:'white'}}>Contact</li>
                <li style={{listStyle:'none',color:'white'}}>Become a Teacher</li>
              </ul>
            </div>

            <div className="col">
              <h6 style={{listStyle:'none',color:'white'}}>LINKS</h6>
              <ul>
                <li style={{listStyle:'none',color:'white'}}>Courses</li>
                <li style={{listStyle:'none',color:'white'}}>Events</li>
                <li style={{listStyle:'none',color:'white'}}>Gallery</li>
                <li style={{listStyle:'none',color:'white'}}>FAQs</li>
              </ul>
            </div>

            <div className="col">
              <h6 style={{listStyle:'none',color:'white'}}>SUPPORT</h6>
              <ul>
                <li style={{listStyle:'none',color:'white'}}>Documentation</li>
                <li style={{listStyle:'none',color:'white'}}>Forums</li>
                <li style={{listStyle:'none',color:'white'}}>Language Pack</li>
                <li style={{listStyle:'none',color:'white'}}>Release Status</li>
              </ul>
              <hr />
            </div>

            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Footer;
