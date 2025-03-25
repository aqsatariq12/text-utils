import React from "react";

export default function About(props) {
  let myStyle ={
    color: props.mode ==='dark'? 'white':'#042743',
    backgroundColor: props.mode ==='dark'? '#042743':'white',
  }
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong> Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Welcome to TextUtils – your one-stop solution for analyzing and
              enhancing your text! Whether you're writing an essay, crafting a
              blog post, or preparing a professional document, TextUtils helps
              you optimize your content effortlessly. Count words and
              characters, eliminate extra spaces, and get quick insights into
              your writing. Our intuitive interface makes it easy to organize
              and refine your text, ensuring clear and concise communication.
              Start analyzing your text today and take your writing to the next
              level!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is completely free to use, with no hidden costs or
              sign-ups required. Whether you're a student, blogger, or
              professional, our tool is designed to simplify your writing
              process without any fees. Enjoy unlimited access to all features,
              including word and character counting, text formatting, and more.
              Enhance your writing experience with ease – anytime, anywhere, for
              free!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is designed to work seamlessly across all modern web
              browsers. Whether you're using Chrome, Firefox, Safari, or Edge,
              our tool ensures a smooth and consistent experience. No downloads
              or installations required – just open your favorite browser and
              start analyzing your text instantly. Enjoy full functionality and
              responsive design on any device, making TextUtils accessible
              wherever you go!
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
      </div> */}
    </div>
  );
}
