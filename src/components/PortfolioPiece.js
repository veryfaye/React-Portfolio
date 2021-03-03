function PortfolioPiece(props){
    return (
        <div>
            <hr />
              <div className="row">
                <div className="col-lg-12">
                  <h2>
                    <a href={props.link}>
                      {props.name}
                    </a>
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <img
                    src={props.image}
                    alt={props.alt}
                    className="img-fluid p-1.5 mb-3"
                  />
                  <h4>{props.imgTxt}</h4>
                </div>
              </div>
        </div>
    )
}

export default PortfolioPiece;