process.env.NODE_ENV = "development";
const base = 'http://localhost:5000';

const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../index");
const knex = require("../knex");

// for stubbing
const {fakeChampObj} = require("../helper");
const request = require("request");
const sinon = require("sinon")

describe("Test if routes are set up properly", () => {

  describe("GET /all champions", () => {
    it("should return json", (done) => {
      chai.request(server)
      .get("/all")
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.eql(200);
        res.type.should.eql("application/json");
        done();
      });
    });

    it("should have the correct keys inside the body object", (done) => {
      chai.request(server)
      .get("/all")
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.eql(200);
        res.type.should.eql("application/json");
        res.body[0].should.include.keys("id", "name", "tags", "description", "icon")
        done();
      });
    });

    it("should return all mages", (done) => {
      chai.request(server)
      .get("/all?tags=mage")
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.eql(200);
        res.type.should.eql("application/json");
        res.body.length.should.eql(53);
        done();
      });
    });

    it("should contain all 141 champions", (done) => {
      chai.request(server)
      .get("/all")
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.eql(200);
        res.type.should.eql("application/json");
        res.body.length.should.eql(141);
        done();
      });
    });
  });

  describe("Stubbed the DB to test GET routes", () => {
    const responseObject = {
        statusCode: 200,
        headers: {
          'content-type': 'application/json'
      }
    }
    const responseBody = fakeChampObj;

    beforeEach(() => {
      this.get = sinon.stub(request, "get");
    });

    afterEach(() => {
      request.get.restore();
    });

    it("should respond with a single champion", (done) => {
      this.get.yields(null, responseObject, responseBody);
      request.get(`${base}/all`, (err, res, body) => {
        res.statusCode.should.equal(200);
        res.headers["content-type"].should.contain("application/json");
        body[0].name.should.eql("Annie");
        done();
      });
    });
  })

  describe("POST /mydb method", () => {
    let champCount = 0;
    it("should return json with all champs after adding", (done) => {
      chai.request(server)
      .post("/mydb/add/92")
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.eql(200);
        res.type.should.eql("application/json");
        champCount = res.body.length;
        done();
      });
    });

    it("should add one champion to the DB", (done) => {
      chai.request(server)
      .post("/mydb/add/48")
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.eql(200);
        res.type.should.eql("application/json");
        res.body.length.should.eql(champCount+1);
        done();
      });
    });
  });

  describe("PUT /mydb method", () => {
    let champCount = 0;
    it("Should replace DB with starter champions", (done) => {
      chai.request(server)
      .put("/mydb/reset/starter")
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.eql(200);
        res.type.should.eql("application/json");
        res.body[0].name.should.eql("Annie");
        done();
      });
    });

    it("Should replace DB with starter champions", (done) => {
      chai.request(server)
      .put("/mydb/reset?2&34&62")
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.eql(200);
        res.type.should.eql("application/json");
        res.body[2].name.should.eql("Lee Sin");
        done();
      });
    });
  });
  
    describe("DELETE /mydb", () => {
      it("Should delete whole personal DB", (done) => {
        chai.request(server)
        .delete("/mydb/delete")
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.eql(200);
          res.type.should.eql("application/json");
          res.body.length.should.eql(0);
          done();
        });
      });    
    });
});