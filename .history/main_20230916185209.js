const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then(
      (data) =>
        (result.innerHTML = `
    <div class="word">
    <h3>${inpWord}</h3>
    <button>
      <i class="fas fa-volume-up"></i>
    </button>
  </div>

  <div class="details">
    <p>${data[0].meanings[0].partsOfSpeech}</p>
    <p>/sample/</p>
  </div>
  <p class="word-meaning">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ex
    cumque vero libero ullam voluptatum fuga nulla. Cupiditate vitae
    aspernatur sapient.
  </p>
  <p class="word-example">
    Lorem ipsum dolor sit amet consectetur ullam voluptatum fuga nulla.
  </p>
    `)
    );
});
