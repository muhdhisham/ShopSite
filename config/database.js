module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost2"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi_data"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "123456789"),
      schema: env("DATABASE_SCHEMA", "public"),
    },
  }
});