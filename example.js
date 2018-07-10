
const Koa = require('koa');
const ratelimit = require('./');
const Redis = require('ioredis');
const app = new Koa();

// apply rate limit

app.use(ratelimit({
  db: new Redis(),
  duration: 60000,
  max: async (ctx) => {

    return Math.round(Math.random()*100)
  }
}));

// response middleware

app.use(async (ctx) => {
  ctx.body = 'Stuff!';
});

app.listen(4000);
console.log('listening on port 4000');
