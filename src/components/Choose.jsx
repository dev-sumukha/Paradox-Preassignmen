import React from "react";

const Choose = () => {
  return (
    <>
      <section className="container" style={{ marginTop: "150px" }}>
        <center>
          <h2>Why Choose Us?</h2>
        </center>
        <center>
          <p>
            We build and enhance the talents in each student, further making
            them Committed, Compassion,Respectable in their career.
          </p>
        </center>

        <div className="container">
          <div class="ui grid">
            <div class="four wide column">
              <div class="ui vertical fluid tabular menu">
                <a class="active item">Be Acquainted</a>
                <a class="item">Build Rapport</a>
                <a class="item">Leverage Skills</a>
                <a class="item">Dive Deep</a>
                <a class="item">Assess and Evaluate</a>
              </div>
            </div>
            <div class="twelve wide stretched column">
              <div class="ui segment">
              <img class="ui medium rounded image" src="./images/img1.jpg"/>
              We keep students engaged in new activities and skill development courses that adds a extra weightage on their resume.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
