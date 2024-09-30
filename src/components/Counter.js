function Counter() {
  return (
    <div className="counter mt-5">
      <div className="counter__sectiontitle">
        <h1 className="counter__title fw-bold">SME so far</h1>
      </div>
      <div id="projectFacts" className="counter__sectionClass">
        <div className="sectionClass__fullWidth">
          <div className="counter__projectFactsWrap">
            <div
              className="counter__item wow fadeInUpBig animated animated"
              data-number="12"
            >
              <i className="fa fa-code-fork"></i>
              <p id="number1" className="number">
                72
              </p>
              <span></span>
              <p>Projects uploaded</p>
            </div>
            <div
              className="counter__item wow fadeInUpBig animated animated"
              data-number="55"
            >
              <i className="fa fa-gift"></i>
              <p id="number2" className="number">
                2
              </p>
              <span></span>
              <p>Gift delivered</p>
            </div>
            <div
              className="counter__item wow fadeInUpBig animated animated"
              data-number="359"
            >
              <i className="fa fa-handshake-o"></i>
              <p id="number3" className="number">
                24
              </p>
              <span></span>
              <p>Organizations</p>
            </div>
            <div
              className="counter__item wow fadeInUpBig animated animated"
              data-number="246"
            >
              <i className="fa fa-users"></i>
              <p id="number4" className="number">
                24
              </p>
              <span></span>
              <p>Contributors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
