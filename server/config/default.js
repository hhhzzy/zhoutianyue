module.exports = {
  port: 3002,
  session: {
    secret: 'server',
    key: 'server',
    maxAge: 10*60*1000
  },
  mongodb: 'mongodb://localhost:27017/shop'
}
