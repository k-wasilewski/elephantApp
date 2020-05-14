const { NODE_ENV } = process.env;

const inProduction = NODE_ENV === "production";
const inDevevelopment = NODE_ENV === "development";
const inTesting = NODE_ENV === "test";

module.exports = api => {
    api.cache.using(() => process.env.NODE_ENV);

    if (inTesting) return {
        presets: [
            "@babel/preset-env",    //must be only in test
        ],
        plugins: [
            'syntax-dynamic-import',
        ]
    }

    return {
        plugins: [
            'syntax-dynamic-import',
        ]
    }
}
