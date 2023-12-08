import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('LoanController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("can't create resource without typeofresource, author and genre", () => {
    const bodyAuthor = {
      name: 'Gilbert',
      biograhy: 'biography of Gilbert',
    };

    const bodyGenre = {
      name: 'Si-Fi',
      description: 'Si-Fi description',
    };

    const bodyResourceType = {
      name: 'livre',
    };

    request(app.getHttpServer()).post('/author').send(bodyAuthor);

    request(app.getHttpServer()).post('/genre').send(bodyGenre);

    request(app.getHttpServer()).post('/resourceType').send(bodyResourceType);

    it("can't loan without resource and userid", () => {
      const bodyResource = {
        title: 'the ancient melody',
        quantity: 12,
        available: true,
        description: 'history of ancient melody at the past',
        genres: [1],
        authors: [1],
        typeOfResource: 1,
      };

      let result;
      
      request(app.getHttpServer()).post('/resource').send(bodyResource).end((error,res) => {
        result = res.body
      });
      console.log(result);

      const bodyLoan = {
        loanDate: '08/12/2023',
        returnData: '20/12/2023',
        userid: 1,
        resourceid: result.id
      };

      return request(app.getHttpServer())
        .post('/loan')
        .send(bodyLoan)
        .expect(200)
        .expect(
          '{"statusCode":200,"message":"emprunt effectuer"}',
        );
    });
  });
});

