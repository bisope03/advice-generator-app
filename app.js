const diceBtn = document.getElementById('dice-btn');
const url = "https://api.adviceslip.com/advice";
const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');

diceBtn.addEventListener('click', function(){
    getAdvice(url);
});

function getAdvice(url){
   fetch(url)
   .then(response => response.json())
   .then(data => {
       adviceId.innerHTML = `advice #${data.slip.id}`
       adviceText.innerHTML = `"${data.slip.advice}"`
   })
   .catch(error => {
       console.log('Error', error);
   });
}

getAdvice(url);
