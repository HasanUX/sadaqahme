/* eslint-disable jsx-a11y/iframe-has-title */

function PromoteVdo() {
  return (
    <div className="promoteVdo">
      {" "}
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4 col-12">
            <h3 className="promoteVdo__title">
              How one of our enlisted organizations is making impact
            </h3>
            <p className="promoteVdo__orgName">
              Org name: <b>Sab'a Sanabil Foundation</b>
            </p>
          </div>
          <div className="col-md-5 col-12 promoteVdo__iframeDiv">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FSabaSanabilFoundation%2Fvideos%2F3302274186671703%2F&show_text=false&width=560&t=0"
              width="560"
              height="314"
              style={{
                border: "none",
                overflow: "hidden",
                borderRadius: "20px",
              }}
              className="shadow-lg promoteVdo__iframe"
              scrolling="no"
              frameBorder="0"
              allow="autoplay; encrypted-media;"
              allowFullScreen={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoteVdo;
