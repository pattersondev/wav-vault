import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.string().default('5000'),
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
  JWT_EXPIRES_IN: z.string(),
  CORS_ORIGIN: z.string(),
});

const envVars = envSchema.parse(process.env);

export const config = {
  env: envVars.NODE_ENV,
  port: parseInt(envVars.PORT, 10),
  databaseUrl: envVars.DATABASE_URL,
  jwt: {
    secret: envVars.JWT_SECRET,
    expiresIn: envVars.JWT_EXPIRES_IN,
  },
  corsOrigin: envVars.CORS_ORIGIN,
} as const; 