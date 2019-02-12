
let chaiHttp = require('chai-http');
let chai = require('chai');
let expect = chai.expect;
let express = require('express');
let app = express();

const router = require('../lib/route').router;
chai.use(chaiHttp);

const apis = ["/fibonacci", "/fibonacci/recursive"];

describe('Fibonacci Router Tests', function() {
    before(()=>{
        app.use('/',router);
        app.listen();
    });

    it('Should return a fibonacci value for a given term', ()=>{
        const promises = apis.map(api => {
            return chai.request(app)
            .get(api+'?term=5')
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res).to.have.property('body');
                const {term, value} = res.body;
                expect(term).to.equal('5');
                expect(value).to.equal(5);
            });
        });

        return Promise.all(promises);
    });

    it('Should return a 400 error when no query is provided', ()=>{

        const promises = apis.map(api => {
            return chai.request(app)
            .get(api)
            .then((res) => {
                expect(res).to.have.status(400);
            });
        });

        return Promise.all(promises);
    });

    it('Should return a 400 error when query is NaN', ()=>{
        const promises = apis.map(api => {
            return chai.request(app)
            .get(api+'?term=help')
            .then((res) => {
                expect(res).to.have.status(400);
            });
        });

        return Promise.all(promises);
    });

    it('Should return a 400 error when query does not include "term"', ()=>{
        const promises = apis.map(api => {
            return chai.request(app)
            .get(api+'?team=5')
            .then((res) => {
                expect(res).to.have.status(400);
            });
        });

        return Promise.all(promises);
    });

});


