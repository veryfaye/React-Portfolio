import Resume from "../images/AmandaLeMoineResume.pdf"

function Contact() {
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="card mt-5">
          <div className="card-body">
            <h1>
              <strong>Contact Information</strong>
            </h1>
            <hr />
            <div className="row">
              <div className="col-lg-10 text-left">
                <p>
                  <strong>Email: </strong>
                  <a className="link" href="mailto:amandalemoine2021@gmail.com">
                    amandalemoine2021@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Cell:</strong> (612)325-5887
                </p>
                <p>
                  <strong>Linked In Profile: </strong>
                  <a
                    className="link"
                    href="https://www.linkedin.com/in/alemoine2020/"
                  >
                    Amanda LeMoine
                  </a>
                </p>
                <p>
                  <strong>GitHub: </strong>
                  <a className="link" href="https://github.com/veryfaye">
                    VeryFaye
                  </a>
                </p>
                <p>
                  <strong>Resume: </strong>
                  <a
                    className="link"
                    href={Resume}
                    download="AmandaLeMoineResume"
                  >
                    Download
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
