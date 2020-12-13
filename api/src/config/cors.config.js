const { API_ENV, ORIGIN_PATH } = process.env;

const corsOptions = {
    origin: API_ENV === 'dev' ? 'http://localhost' : ORIGIN_PATH,
    optionSuccessStatus: 200,
};

export default corsOptions;
