module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'userapi',
      password: process.env.MYSQL_PASS || 'userapi',
      database: process.env.MYSQL_DATABASE || 'user_data',
    },
  },
};
