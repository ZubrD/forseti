
const httpService = {
  getDeputy: () => {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        const jsonData = JSON.parse(data);
        console.log(jsonData)
        return jsonData;
      });
  },
};

export default httpService;
