const buildQueryString = (params) => {
  const queryString = Object.entries(params)
    .map(([key, value]) => (value ? `${key}=${value}` : ""))
    .join("&");
  return queryString;
};

export default buildQueryString;
