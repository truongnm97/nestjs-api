import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from 'app.module';

describe('App e2e', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const modulteRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = modulteRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
  });

  afterAll(() => {
    app.close();
  });

  it.todo('should display welcome message');
});
