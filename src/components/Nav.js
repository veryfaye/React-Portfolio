function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
        <div className="navbar-brand"><strong>Amanda LeMoine</strong></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="./Portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./About">About Me</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Nav