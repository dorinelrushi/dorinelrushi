import React from "react";

function Contact() {
  return (
    <div className="bg3" id="contact">
      <div className="text-center m-auto ">
        <h2 className="contact">Contact Us</h2>
        <p className='pl'>
          Please don't hesitate to reach out with any questions, feedback, or
          suggestions you may have
        </p>
        <div>
          <form
            action="https://formsubmit.co/dorinelrushi8@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    placeholder="John Dyer"
                    id="inp"
                    name="name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    id="inp"
                    name="email"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className="form-control"
                name='message'
                rows="10"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-lg btn-dark btn-block mb-[35px]">
              Submit Form
            </button>
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
