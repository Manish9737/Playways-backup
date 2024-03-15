import React from "react";

const FAQPage = () => {
  return (
    <>
      <div className="bg-warning" style={{minHeight:"100vh"}}>
        <div className="container py-5">
          <h1 className="text-center mb-4">Frequently Asked Questions</h1>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Question 1: What is Lorem Ipsum?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    cursus ante dapibus diam. Integer ac ligula fermentum,
                    ullamcorper nulla nec, blandit nisi.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Question 2: Why do we use it?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    cursus ante dapibus diam. Integer ac ligula fermentum,
                    ullamcorper nulla nec, blandit nisi.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Question 2: Why do we use it?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    cursus ante dapibus diam. Integer ac ligula fermentum,
                    ullamcorper nulla nec, blandit nisi.
                  </p>
                </div>
              </div>
            </div>
            {/* Add more FAQ items following the same structure */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
