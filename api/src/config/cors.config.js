const { API_ENV, ORIGIN_PATH } = process.env;

const corsOptions = {
    origin: API_ENV === 'dev' ? 'http://127.0.0.1' : ORIGIN_PATH,
    optionSuccessStatus: 200,
    credentials: true
};

export default corsOptions;
