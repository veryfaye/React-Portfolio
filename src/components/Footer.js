function Footer() {
  return (
    <footer className="fixed-bottom">
      <div className="text-center py-3">
        © Copyright 2021{" "}
        <a
          className="footer-icon"
          href="https://www.linkedin.com/in/alemoine2020/"
          target="_blank"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>{" "}
        <a className="ml-1 footer-icon" href="https://github.com/veryfaye">
          <i className="fa fa-github-square" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
