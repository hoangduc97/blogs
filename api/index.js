// import modules
import app from './src/app';

// init server
const PORT = process.env.API_PORT || 3000;

(async() => {
    const server = await app();
    server.listen(PORT, () => {
        console.log(`server running with port ${PORT}`);
    });
})();

