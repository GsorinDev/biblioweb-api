import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Author } from '../src/author/entities/author.entity';

describe('ResourceController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("can't create resource without typeofresource", () => {
    const bodyAuthor = {
      name: 'Gilbert',
      biograhy: 'biography of Gilbert',
    };

    const bodyGenre = {
      name: 'Si-Fi',
      description: 'Si-Fi description',
    };

    request(app.getHttpServer()).post('/author').send(bodyAuthor);

    request(app.getHttpServer()).post('/genre').send(bodyGenre);

    const bodyResource = {
      title: 'the ancient melody',
      quantity: 12,
      available: true,
      description: 'history of ancient melody at the past',
      genres: [1],
      authors: [1],
      typeOfResource: null,
    };

    return request(app.getHttpServer())
      .post('/resource')
      .send(bodyResource)
      .expect(400)
      .expect(
        '{"statusCode":400,"message":"typeOfResource doesn\'t exist","error":"Bad Request"}',
      );
  });
});
