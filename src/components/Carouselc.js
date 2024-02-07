import Carousel from 'react-bootstrap/Carousel';

const Carouselc=()=> {
  return (
    <div className='mx-5 my-5'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="w-100 imgSize px-5"
          src="images/com.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100 imgSize px-5"
          src="images/elec.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100 imgSize px-5"
          src="images/homerepair.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carouselc;