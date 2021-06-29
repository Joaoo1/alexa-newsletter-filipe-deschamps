export default {
  user: process.env.EMAIL_USER,
  password: process.env.EMAIL_PASS,
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  tls: process.env.EMAIL_TLS,
  tlsOptions: {
    rejectUnauthorized: false,
  },
};
