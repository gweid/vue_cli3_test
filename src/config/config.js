const env = process.env.NODE_ENV

const config = {
    VERSION: "1.0.0"
}


switch (env) {
    case "production":
        config.BASEURL = "https://merchant-19online.triumen.cn/api"
        break;

    case "development":
        config.BASEURL = "https://merchant-19online.triumen.cn/api"
        break;
}


export default config