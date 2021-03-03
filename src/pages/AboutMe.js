function AboutMe() {
    let imgSrc = require("../images/HermioneAtFiestaIsland.jpg")
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="card mt-5 bottommargin">
          <div className="card-body">
            <h1>
              <strong>Amanda LeMoine</strong>
            </h1>
            <hr />
            <img
              src={imgSrc.default}
              alt="Amanda LeMoine Profile"
              className="float-left img-fluid mr-3 w-50"
            />
            <p>
              Amanda LeMoine is a Process Support Specialist at White Labs. Her
              main duties on the job are looking into processes, and figuring
              out the best ways to improve the process through automation. She
              studied chemistry at UCSD, and now Amanda considers herself to be
              a "Forever Student" since she has taken it upon herself to learn
              the basics of multiple different programming languages while on
              the job. Now she is enrolled in UCSD's Coding Bootcamp to
              formalize and round out her education in programming.
            </p>
            <p>
              Amanda has multiple different hobbies that she likes to do in her
              free time. From learning acrobatic silks, knitting, to horseback
              riding. On the weekends she teaches therapeutic horsebackriding
              lessons to people in the special needs community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
