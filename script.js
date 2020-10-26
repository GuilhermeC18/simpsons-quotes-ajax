// This function loads pokemon data from the Pokemon API
function fetchSimpsonsQuoteJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    let num = 1;
    num++; 
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes?count=${num}`;
    axios.get(url)
      .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
      })
      .then(function(quotes) {
        console.log('data decoded from JSON:', quotes);
  
        // Build a block of HTML
        const simpsonsHtml = `
          <p><strong>${quotes[0].character}</strong></p>
          <img src="${quotes[0].image}" />
          <p>${quotes[0].quote}</p>
        `;
        document.querySelector('#simpsons').innerHTML = simpsonsHtml;
      });
  }
  
