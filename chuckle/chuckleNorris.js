//very simple js api call and DOM manipulation to push joke 
joke = document.getElementById("joke")

fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then((result) => {
        let newJoke = (result.value);
        console.log(newJoke);
        joke.innerHTML = newJoke;
        }),
    (error) => {
       console.log(error);
      } 

setInterval(function(){window.location.reload()}, 6000);
