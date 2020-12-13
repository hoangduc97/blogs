import redis from 'redis';

const RedisClient = redis.createClient(
    process.env.REDIS_PORT,
    process.env.REDIS_URI,
    {
        no_ready_check: true,
    }
);
RedisClient.auth(process.env.REDIS_PASS);
RedisClient.on('connect', function () {
    console.log('redis is connected!');
});

RedisClient.on('ready', () => {
    console.log('Client connected to redis and ready to use...');
});

RedisClient.on('error', (err) => {
    console.log(err.message);
});

RedisClient.on('end', () => {
    console.log('Client disconnected from redis');
});

process.on('SIGINT', () => {
    RedisClient.quit();
});
export default RedisClient;
