const chai = require('chai');
const chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);
const app = require('../server.ts');
const assert = chai.assert;
const sampleData = [{ "Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg": 85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166, "WeightKg": 62 }, { "Gender": "Female", "HeightCm": 150, "WeightKg": 70 }, { "Gender": "Female", "HeightCm": 167, "WeightKg": 82 }]
const invalidData = [{ "Gender": "Male", "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg": 85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166, "WeightKg": 62 }, { "Gender": "Female", "HeightCm": 150, "WeightKg": 70 }, { "Gender": "Female", "HeightCm": 167, "WeightKg": 82 }]

describe('calculateBMI', () => {
  describe('/POST calculate BMI', () => {
    it('it should calculate bmi and add three attributes BMI,risk,category', (done) => {
      chai.request(app)
        .post('/api/calculateBMI')
        .send({
          data: sampleData
        })
        .end((err, res) => {
          (res).should.have.status(200);
          const data = res.body;
          data.forEach(elt => {
            const { Gender, HeightCm, WeightKg, BMI, category, risk } = elt;
            assert(Gender !== undefined);
            assert(HeightCm !== undefined);
            assert(WeightKg !== undefined);
            assert(BMI !== undefined);
            assert(category !== undefined);
            assert(risk !== undefined);
          })
          done();
        });
    });
    it('it should give 400 error when data is not present', (done) => {
      chai.request(app)
        .post('/api/calculateBMI')
        .end((err, res) => {
          (res).should.have.status(400);
          done();
        });
    });
    it('it should give 500 error when data is invalid', (done) => {
      chai.request(app)
        .post('/api/calculateBMI')
        .send({
          data:invalidData
        })
        .end((err, res) => {
          (res).should.have.status(500);
          done();
        });
    });

  });
});
