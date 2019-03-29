if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV =
    process.env.NODE_ENV ||
    require('dotenv').config({
      path: `./.env.${process.env.NODE_ENV}`
    });
}

module.exports = {
  [process.env.NODE_ENV]: {
    client: 'pg',
    connection: {
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD
    }
  }
};
