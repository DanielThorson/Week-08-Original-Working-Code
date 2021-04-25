fetch("https://donutshop-api.herokuapp.com/inventory?id=234", {
    method: "GET",
  })
    .then((response) => {
      response.json();
    })
    .then((data) => {
      return data;
      
    })
    .catch((err) => {
      console.error(err);
    });


