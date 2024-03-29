import React from "react";

export default function Contact() {
  const handleSubmit = (e)=>{
    e.preventDefault()
alert("Thanks for your contact");
  }
  return (
    <main className="py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center"> Contact Us </h1>
            <hr />
            <div className="card p-4 mx-auto " style={{ maxWidth: "500px" }}>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 col-md-6 mb-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="fullName"
                    />
                  </div>

                  <div className="col-12 col-md-6 mb-3">
                    <input type="text" placeholder="City" name="city" />
                  </div>

                  <div className="col">
                    <button type="submit" className="btn btn-primary w-100"  >submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}