const config = {
  apiUrl:
    process.env.NODE_ENV === "development"
      ? "https://localhost:44308/api"
      : "/api",
};

export default config;
