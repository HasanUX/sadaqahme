import postFormat from "../img/postFormat.png";

function PostFormat() {
  return (
    <div className="container postFormat mt-5 mb-5 pt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-12 col-12">
          <img
            src={postFormat}
            alt="post-format"
            className="postFormat__img w-100"
          />
        </div>
      </div>
    </div>
  );
}

export default PostFormat;
