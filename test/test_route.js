
let chaiHttp = require('chai-http');
let chai = require('chai');
let expect = chai.expect;
let express = require('express');
let app = express();

const router = require('../lib/route').router;
chai.use(chaiHttp);

describe('Fibonacci Router Tests', function() {
    before(()=>{
        app.use('/',router);
        app.listen();
    });

    it('Should return a fibonacci value for a given term', ()=>{
        return chai.request(app)
            .get('/fibonacci?term=5')
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res).to.have.property('body');
                const {term, value} = res.body;
                expect(term).to.equal('5');
                expect(value).to.equal(5);
            });
    });

    it('Should return a 400 error when no query is provided', ()=>{
        return chai.request(app)
            .get('/fibonacci')
            .then((res) => {
                expect(res).to.have.status(400);
            });
    });

    it('Should return a 400 error when query is NaN', ()=>{
        return chai.request(app)
            .get('/fibonacci?term=help')
            .then((res) => {
                expect(res).to.have.status(400);
            });
    });

    it('Should return a 400 error when query does not include "term"', ()=>{
        return chai.request(app)
            .get('/fibonacci?team=5')
            .then((res) => {
                expect(res).to.have.status(400);
            });
    });

});


