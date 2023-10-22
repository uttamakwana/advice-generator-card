let quote = "";

fetch("https://api.adviceslip.com/advice")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data.slip);
    quote = data.slip.advice;
    const quoteSpan = document.querySelector(".text");
    const adviceID = document.querySelector(".advice-id");
    adviceID.innerText += data.slip.id;
    quoteSpan.innerText = quote;
  });

function changeAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data.slip);
      quote = data.slip.advice;
      const quoteSpan = document.querySelector(".text");
      const adviceID = document.querySelector(".advice-id");
      adviceID.innerText = data.slip.id;
      quoteSpan.innerHTML = `
      <p>"${quote}"</p>
      `;
    });
}
