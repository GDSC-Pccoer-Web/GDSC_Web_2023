import "./Blogs.css";

/*
img1: /rectangle-20@2x.png
img2: /images-1@2x.png
img3: /images-2@2x.png
img4: /download-2-2@2x.png
*/
const Blogs = () => {
  return (
    <div className="blogs">
      <div className="card1">
        <img src="/rectangle-20@2x.png" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Justo morbi ornare sodales
          tortor iaculis venenatis sed quis risus.
        </p>
      </div>
      <div className="card-holder">
        <div className="card2">
          <img src="/images-1@2x.png" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Justo morbi ornare sodales
            tortor iaculis venenatis sed quis risus.
          </p>
        </div>
        <div className="card3">
          <img src="/images-2@2x.png" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Justo morbi ornare sodales
            tortor iaculis venenatis sed quis risus.
          </p>
        </div>
      </div>
      <div className="card4">
        <img src="/download-2-2@2x.png" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Justo morbi ornare sodales
          tortor iaculis venenatis sed quis risus.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
