import React from "react";

const About = () => {
  return (
    <>
      <section className="container" style={{marginTop:'150px'}}>
        <center><h2>About K.L.E's BCA</h2></center>
        
        <div className="container" style={{marginTop:'70px'}}>
          <div className="row">
            <div className="col">
                <img src="./images/banner.png" alt="" height={200} className='bcalogo' style={{
                       filter: 'brightness(10%)',
                       filter: 'contrast(10%)',
                       filter:' drop-shadow(10px 10px 10px black)'
                }}/>
            </div>
            <div className="col">
                <p> <h1 style={{display:'inline',fontSize:'70px',color:'RGB(252, 186, 3)'}}>K</h1>.L.E.S’s B.C.A was started as a department of Computer Science in 1999. Now it has come up with its own wings in P. C. Jabin Science College Campus with more facility for the students relating to Computer and the department has highly qualified faculties and has excellent hardware and software resources. In K.L.E.S’s Bachelor of Computer Application, we look at education differently. For us, education does not lie in the qualification of knowledge, it lies in the quality of knowledge that helps form the character of students.</p>
                <p>Affiliated to a Karnataka University, Dharwad but does not follow its syllabus or curriculum. Academic independence, which gives it the freedom to revise the syllabus with time and follow a schedule which is more suitable for the curriculum. Exams are conducted by the institute itself and are in accordance with what is being taught during the session. Degrees finally awarded by the affiliated University which generally carries a lot of reputation. We form them as 4 C’s. Competent, Committed, Creative and Compassionate candidates.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
