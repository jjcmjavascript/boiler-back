import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AuthModule } from '@/modules/auth/auth.module';
import { UserModule } from '@/modules/users/user.module';

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AuthModule, UserModule],
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
  });

  describe('/user (POST)', () => {
    it('should return ok, when registering and authenticating the user', async () => {
      const tempUser = {
        name: 'test',
        email: 'test@example.com',
        password: 'WrongPassword',
      };

      const response = await request(app.getHttpServer())
        .post('/users')
        .send(tempUser);

      expect(response.status).toBe(201);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
