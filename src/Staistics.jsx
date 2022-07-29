import React from "react";

const Staistics = () => {
  return (
    <>
      <div className="container" style={{marginLeft:'380px',marginTop:'100px'}}>
        <div class="ui statistics">
          <div class="statistic">
            <div class="value">100</div>
            <div class="label">WORKSHOPS</div>
          </div>
          <div class="statistic">
            <div class="value">150</div>
            <div class="label">SEMINARS</div>
          </div>
          <div class="statistic">
            <div class="value">200</div>
            <div class="label">GUEST-LECTURES</div>
          </div>
          <div class="statistic">
            <div class="value">10</div>
            <div class="label">POWER TALKS</div>
          </div>
          <div class="statistic">
            <div class="value">25</div>
            <div class="label">FEST</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Staistics;
