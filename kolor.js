document.addEventListener("DOMContentLoaded", function() {

    //krok 1
    const tlo = document.querySelector("#wizytowkaa");
    const buttons = document.querySelectorAll("button");

    //krok 2
    //mamy kolekcję buttonów - koniecznie pętla po nich
    for (const btn of buttons) {
        btn.addEventListener("click", function() {
            //krok 4
            //działamy
            tlo.style.background = this.dataset.color;
            tlo.innerText = this.dataset.color;
        })
    }

});