const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
let dataCopy;

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then(
      (data) => (
        (dataCopy = data),
        (result.innerHTML = `
        <div class="word">
        <h3>${inpWord}</h3>
        <button">
          <i class="fas fa-volume-up"></i>
        </button>
      </div>
    
      <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetic}</p>
      </div>
      <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}
      </p>
      <p class="word-example">
        ${data[0].meanings[0].definitions[0].example || ""}
      </p>
        `)
      )
    );
  sound.setAttribute("src", `https:${dataCopy[0].phonetics[0].audio}`);
  console.log(sound);
});