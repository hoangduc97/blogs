import redis from "redis";
import session from "express-session";
import redisConnect from "connect-redis";

const redisStore = redisConnect(session);
const RedisClient = redis.createClient({
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT || 6379,
});

RedisClient.on("error", function (err) {
    console.log("Redis error: " + err);
});

RedisClient.on("ready", function () {
    console.log("Redis is ready");
});

const rootSession = session({
    secret: process.env.REDIS_SECRET,
    name: process.env.REDIS_NAME,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 60000 },
    store: new redisStore({
        client: RedisClient,
        ttl: 260,
    }),
});

export default rootSession;
