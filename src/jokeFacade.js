
function jokeFacade() {
    function handleHttpErrors(res) {
      if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() });
      }
      return res.json();
    }
  
    const getJokes = () => {
      const options = makeOptions("GET", true);
      return fetch(
        "http://localhost:8080/jokeFetcher/api/jokes",
        options
      ).then(handleHttpErrors);
    };
  
    return {
      getJokes
    };
  }
  
  export default jokeFacade;


  function makeOptions(method) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }

    return opts;
}