const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    let inpWord = document.getElementById("inputWord").value;
    fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) =>{
        
        result.innerHTML = `<div class="word">
        <h3>${inpWord}</h3>
        <button class="audiobtn" onClick = "playaudio()"><img src = "sound.png"></button>
    </div>
    <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
    </div>
    <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
    <p class="word-example">${data[0].meanings[0].synonyms}</p>`;
    sound.setAttribute("src",  `${data[0].phonetics[0].audio}`)
    
    })
    .catch(() =>{
        result.innerHTML = `<div><h3> Couldn't find the word</h3></div>`;
    })
});

function playaudio(){
    sound.play();
}