// import React from 'react'
// import { Carousel, Card, Button } from 'react-bootstrap';

// const Demo = () => {
//   return (
//     <div>
//           <div className="container mt-5">
//       {/* Site Title */}
//       <h1 className="text-center mb-5">Playways</h1>

//       {/* Carousel */}
//       <Carousel>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={require("../imgs/pool8.jpg")}
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>Welcome to Playways</h3>
//             <p>Enjoy our exciting games and activities!</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={require("../imgs/pool8.jpg")}
//             alt="Second slide"
//           />
//           <Carousel.Caption>
//             <h3>Join the Fun!</h3>
//             <p>Book your adventure now!</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         {/* Add more carousel items as needed */}
//       </Carousel>

//       {/* Row of Cards */}
//       <div className="m-5">
//       <div className="card-wrapper m-5">
//         {/* First Row */}
//         <div className="row">
//           <div className="col-md-6">
//             <Card className="card-horizontal">
//               <div className="row no-gutters">
//                 <div className="col-md-8">
//                   <Card.Body>
//                     <Card.Title>Game 1</Card.Title>
//                     <Card.Text>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus purus nec lacus lacinia, at luctus turpis ullamcorper.
//                     </Card.Text>
//                     <Button variant="primary">Learn More</Button>
//                   </Card.Body>
//                 </div>
//                 <div className="col-md-4">
//                   <Card.Img src="https://via.placeholder.com/150" className="card-image" />
//                 </div>
//               </div>
//             </Card>
//           </div>
//           <div className="col-md-6">
//             <Card className="card-horizontal">
//               <div className="row no-gutters">
//                 <div className="col-md-8">
//                   <Card.Body>
//                     <Card.Title>Game 2</Card.Title>
//                     <Card.Text>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus purus nec lacus lacinia, at luctus turpis ullamcorper.
//                     </Card.Text>
//                     <Button variant="primary">Learn More</Button>
//                   </Card.Body>
//                 </div>
//                 <div className="col-md-4">
//                   <Card.Img src="https://via.placeholder.com/150" className="card-image" />
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>

//         {/* Second Row */}
//         <div className="row mt-3">
//           <div className="col-md-6">
//             <Card className="card-horizontal">
//               <div className="row no-gutters">
//                 <div className="col-md-8">
//                   <Card.Body>
//                     <Card.Title>Game 3</Card.Title>
//                     <Card.Text>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus purus nec lacus lacinia, at luctus turpis ullamcorper.
//                     </Card.Text>
//                     <Button variant="primary">Learn More</Button>
//                   </Card.Body>
//                 </div>
//                 <div className="col-md-4">
//                   <Card.Img src="https://via.placeholder.com/150" className="card-image" />
//                 </div>
//               </div>
//             </Card>
//           </div>
//           <div className="col-md-6">
//             <Card className="card-horizontal">
//               <div className="row no-gutters">
//                 <div className="col-md-8">
//                   <Card.Body>
//                     <Card.Title>Game 4</Card.Title>
//                     <Card.Text>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus purus nec lacus lacinia, at luctus turpis ullamcorper.
//                     </Card.Text>
//                     <Button variant="primary">Learn More</Button>
//                   </Card.Body>
//                 </div>
//                 <div className="col-md-4">
//                   <Card.Img src="https://via.placeholder.com/150" className="card-image" />
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//       </div>


//       {/* "Book Online" Button */}
//       <div className="text-center mt-5">
//         <Button variant="outline-success rounded-0">Book Online</Button>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Demo



































import React, { useContext, useEffect, useRef } from "react";
import { UserContext } from "../context/UserContext";


const Demo = () => {
  const { user } = useContext(UserContext);
  const firstElementRef = useRef(null);
  const secondElementRef = useRef(null);
  const thirdElementRef = useRef(null);
  const fourthElementRef = useRef(null);
  // const userName = user?.userName || "User";

  const observeElement = (elementRef) => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Adjust the threshold as needed (from 0 to 1)
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDuration = "2s";
          entry.target.classList.add("animate__animated", "animate__fadeIn");
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove("animate__animated", "animate__fadeIn");
        }
      });
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  };

  useEffect(() => {
    observeElement(firstElementRef);
    observeElement(secondElementRef);
    observeElement(thirdElementRef);
    observeElement(fourthElementRef);
  }, [firstElementRef, secondElementRef, thirdElementRef]);

  return (
    <>
      <main>
        <div
          ref={firstElementRef}
          className="container-fluid vh-100"
          style={{ minHeight: "", opacity: 0 }}
        >
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 d-flex justify-content-center border-end ">
              <img
                src={require("../imgs/Logo.png")}
                alt="PlayWays Logo"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h3 className="display-5 text-center">
                Welcome {user?.userName || "User"}
              </h3>
              <br />
              <h2
                className="display-1 text-center"
                style={{ fontFamily: "satisfy" }}
              >
                PlayWays
              </h2>
              <br />
              <h4 className=" text-center" style={{ fontFamily: "josheph" }}>
                The Game Changer Platform
              </h4>
            </div>
          </div>
        </div>

        <div
          ref={secondElementRef}
          className="container mb-5"
          style={{ opacity: 0 }}
        >
          <div
            id="carouselExampleInterval"
            className="carousel slide bg-dark h-100 "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* item 1 */}
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-6 d-flex justify-content-center">
                    <img
                      src={require("../imgs/Logo.png")}
                      alt="PlayWays Logo"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6">
                    <h2
                      className="display-1 text-center text-white"
                      style={{ fontFamily: "satisfy" }}
                    >
                      PlayWays
                    </h2>
                    <br />
                    <h4
                      className=" text-center text-white"
                      style={{ fontFamily: "josheph" }}
                    >
                      The Game Changer web
                    </h4>
                  </div>
                </div>
              </div>

              {/* item 2 */}
              <div className="carousel-item " data-bs-interval="2000">
                <div className="row ">
                  <div className="col-md-12 d-flex justify-content-center bg-info rounded">
                    <img
                      src={require("../imgs/Logo.png")}
                      alt="PlayWays Logo"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              {/* item 3 */}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-12 d-flex justify-content-center bg-danger">
                    <img
                      src={require("../imgs/Logo.png")}
                      alt="PlayWays Logo"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div
          ref={thirdElementRef}
          className="container mb-5"
          style={{ opacity: 0 }}
        >
          <div className="text-center mb-3">
            <h2 className="display-4" style={{ fontFamily: "satisfy" }}>
              Games
            </h2>
          </div>

          <div className="row justify-content-center row-cols-1 row-cols-md-4 g-4 mb-lg-5">
            <div className="col">
              <div className="card">
                <img
                  className="card-img-top"
                  src={require("../imgs/Logo.png")}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Text</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  className="card-img-top"
                  src={require("../imgs/Logo.png")}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Text</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  className="card-img-top"
                  src={require("../imgs/Logo.png")}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Text</p>
                </div>
              </div>
            </div>

            <div className="col ">
              <div className="card h-100 ">
                <div className="card-body d-flex align-items-center justify-content-center">
                  <a href="/" className="btn btn-primary rounded-circle">
                    +
                  </a>
                  <p className="display-3 text-primary">More</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mb-3">
            <h2 className="display-4" style={{ fontFamily: "satisfy" }}>
              Game Stations
            </h2>
          </div>

          {/*GameStation cards*/}
          <div
            ref={fourthElementRef}
            className="row justify-content-center row-cols-1 row-cols-md-4 g-4 mb-lg-3"
            style={{ opacity: 0 }}
          >
            <div className="col">
              <div className="card border-0">
                <img
                  className="card-img-top rounded-circle"
                  src={require("../imgs/illustrations/select_players.png")}
                  alt="Card  cap"
                />
                <div className="card-body">
                  <h4 className="card-title text-center">Title</h4>
                  <p className="card-text text-center">Text</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-0">
                <img
                  className="card-img-top rounded-circle"
                  src={require("../imgs/illustrations/select_players.png")}
                  alt="Card  cap"
                />
                <div className="card-body text-center">
                  <h4 className="card-title ">Title</h4>
                  <p className="card-text">Text</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-0">
                <img
                  className="card-img-top rounded-circle"
                  src={require("../imgs/illustrations/select_players.png")}
                  alt="Card  cap"
                />
                <div className="card-body text-center">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Text</p>
                </div>
              </div>
            </div>

            <div className="col ">
              <div className="card h-100 border-0">
                <div className="card-img-top rounded-circle border d-flex align-items-center justify-content-center text-center h-75">
                  <a href="/" className="btn btn-primary rounded-circle">
                    +
                  </a>
                  <p className="display-3 text-primary">More</p>
                </div>
                <div className="card-body "></div>
              </div>
            </div>
          </div>
        </div>
      </main>


    </>
  );
};

export default Demo;
