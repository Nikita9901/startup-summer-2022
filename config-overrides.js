const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
    alias({
        "@ghu": "src/",
    })(config);
    return config;
};
