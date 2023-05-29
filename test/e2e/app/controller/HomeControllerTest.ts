import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../../../../index';

const port = 3000;
const HOST = `http://localhost:${port}`;

async function Bootstrap() {
    await app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`));
}

chai.use(chaiHttp);


describe("HomeControllerTest", () => {

    beforeEach(async () => {
        await Bootstrap()
    })

    describe('GET /home', () => {
        it('it should GET "Welcome to muffin serverless app." in response', (done) => {

            chai.request(HOST)
                .get('/home')
                .end((err, res) => {
                    chai.expect(res.status).to.equal(200);
                    chai.expect(res.text).to.equal("Welcome to muffin serverless app.");
                    done();
                })
        });
    });
})