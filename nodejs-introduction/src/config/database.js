module.exports = {
  dialect: "postgres",
  host: "localhost",
  port: "5432",
  username: "postgres",
  password: "123",
  database: "nodejs-test",
  define: {
    timestamp: true, //create createdAt and updatedAt columns
    undescored: true, //switches camelCase to underline
    undescoredAll: true,
  },
};
