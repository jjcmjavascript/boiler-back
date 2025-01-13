import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@/app.module';
import { AuthModule } from '@/modules/auth/auth.module';

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, AuthModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );

    await app.init();
  });

  describe('/auth/login (POST)', () => {
    it('should return 401 for incorrect credentials', async () => {
      const response = await request(app.getHttpServer())
        .post('/auth/login')
        .send({ email: 'test@example.com', password: 'WrongPassword' });

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Unauthorized');
    });

    // it('should return 200 and a valid token for correct credentials', async () => {
    //   const response = await request(app.getHttpServer())
    //     .post('/auth/login')
    //     .send({ email: 'test@example.com', password: 'ValidPassword123' });

    //   expect(response.status).toBe(200);
    //   expect(response.body).toHaveProperty('token');
    //   expect(typeof response.body.token).toBe('string');
    // });

    // it('should return 400 for missing email or password', async () => {
    //   const response = await request(app.getHttpServer())
    //     .post('/auth/login')
    //     .send({ email: 'test@example.com' });

    //   expect(response.status).toBe(400);
    //   expect(response.body).toHaveProperty('message');
    //   expect(response.body.message).toContain('password should not be empty');
    // });
  });

  afterAll(async () => {
    await app.close();
  });
});
