const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("./index.js"); // Path to your main app (index.js)
const should = chai.should();

chai.use(chaiHttp);

describe("Subscriber API Tests", () => {
  // Test GET /subscribers
  it("should return an array of all subscribers", (done) => {
    chai
      .request(server)
      .get("/subscribers")
      .end((err, res) => {
        res.should.have.status(200); // Check if status is 200
        res.body.should.be.an("array"); // Check if response is an array
        done(); // Mark the test as done
      });
  });

  // Test GET /subscribers/names
  it("should return subscriber names and subscribed channels", (done) => {
    chai
      .request(server)
      .get("/subscribers/names")
      .end((err, res) => {
        res.should.have.status(200); // Check if status is 200
        res.body.should.be.an("array"); // Check if response is an array
        res.body[0].should.have.property("name"); // Check if 'name' property exists
        res.body[0].should.have.property("subscribedChannel"); // Check if 'subscribedChannel' exists
        done(); // Mark the test as done
      });
  });

  // Test GET /subscribers/:id
  it("should return details of a specific subscriber by valid ID", (done) => {
    // Use an actual valid subscriber ID from your database
    const validSubscriberId = "67752e6d555b9a9fa2935007"; // Replace with a valid ID

    chai
      .request(server)
      .get(`/subscribers/${validSubscriberId}`)
      .end((err, res) => {
        res.should.have.status(200); // Check if status is 200
        res.body.should.be.an("array"); // Check if response is an array
        res.body[0].should.have.property("_id").eql(validSubscriberId); // Validate the subscriber's ID
        done(); // Mark the test as done
      });
  });
});
