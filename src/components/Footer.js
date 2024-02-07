import React from 'react';
import Image from 'react-bootstrap/Image';


const Footer = () => {
  return (
    <footer class="border bg-dark text-light py-3">
  <div className="container">
    <div class="row">
  <div className="col-12 d-flex">
      <div className="col-3">
      </div>
      <div class="col-4 mt-3 mt-md-0">
          <div class="col-md">
            <h5>Sitemap</h5>
            <ul class="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Section 1</a></li>
              <li><a href="#">Section 2</a></li>
              <li><a href="#">Section 3</a></li>
            </ul>
          </div>
      </div>
    <div className="d-flex col-5 mt-3">
           <div className=" d-flex col-md">
            <ul className="d-flex list-unstyled">
              <li><a href="#"><Image className="mx-2" style={{ width:'80px', height: '80px'}} src="./images/fb.png" rounded /></a></li>
              <li><a href="#"><Image className="mx-2" style={{ width:'80px', height: '80px'}} src="./images/insta.png"  rounded /></a></li>
              <li><a href="#"><Image className="mx-2" style={{ width:'80px', height: '80px'}} src="./images/linkedin.png"  rounded /></a></li>
              <li><a href="#"><Image className="mx-2" style={{ width:'80px', height: '80px'}} src="./images/youtube.png"  rounded /></a></li>
            </ul>
          </div>
      </div>
    </div>
  </div>
  </div>
</footer>
  );
};

export default Footer;
