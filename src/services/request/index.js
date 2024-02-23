import api from "../url";

export const getCharacters = async(page) => {
  if (page == "example") {
    return responseExample.results;
  };
  return api.get(page ? `/character/?page=${page}` : "/character")
  .then(resp => {
    return resp.data.results;
  })
  .catch(error => {
    console.log(error);
    return false;
  });
};
