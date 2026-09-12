const axios = require("axios");

const httpClientPlugin = (headers: any) => {
  return {
    get: async (url: string) => {
      const { data } = await axios.get(url, headers);
      return data;
    },
    post: async (url: string, body: any) => {},
    put: async (url: string, body: any) => {},
    delete: async (url: string) => {},
  };
};

module.exports = {
  httpClientPlugin,
};
