import React from "react";

const Contact = () => {
  return (
    <div className="py-5" style={{ background: "#191919" }}>
      <div className="container">
        <h2 className="pt-4 mb-5 display-5 fw-bolder text-center border-bottom border-danger w-50 pb-3 mx-auto">
            Contact ME
        </h2>
        <div className="row">
          <div className="col-sm-6">
            <form className="text-dark fs-5 w-100">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name"
                />
                <label for="floatingInput">Your Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="subject"
                />
                <label for="floatingInput">Subject</label>
              </div>
              <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: '100px'}} ></textarea>
                <label for="floatingTextarea">Your Message</label>
              </div>
              <input className="btn btn-lg btn-danger mt-3 " type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
