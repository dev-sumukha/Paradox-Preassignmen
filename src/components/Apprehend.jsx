import React from "react";

const Apprehend = () => {
  return (
    <>
      <section className="container" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <img src="./images/img10.jpeg" alt="dsf" height={375} />
            </div>

            <div className="col">
              <h3 style={{ color: "RGB(55, 60, 204)" }}>OUR MISSION</h3>
              <p>
              To be the best in creating engineering knowledge and educating for dynamic and global careers and be recognized as international leader in application of knowledge.
              </p>
              <div class="ui tabular menu">
                <a class="active item">Our Mission</a>
                <a class="item">Our Vision</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Apprehend;
