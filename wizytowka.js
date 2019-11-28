window.onload = function(){
	//formularz
var name = document.querySelector('#name');
var number = document.querySelector('#number');
var email = document.querySelector('#email');
var firm =document.querySelector('#firm');
var adress = document.querySelector('#adress');



//wizytowka
var imie = document.querySelector('#imie');
var telefon = document.querySelector('#telefon');
var mail = document.querySelector('#mail');
var logo = document.querySelector('#logo');
var adres = document.querySelector('#adres');




firm.addEventListener('keyup', function(e){
	logo.innerText=firm.value;
});

name.addEventListener('keyup', function(e){
	imie.innerText=name.value;
});

number.addEventListener('keyup', function(e){
	telefon.textContent=number.value;
});

email.addEventListener('keyup', function(e){
	mail.textContent=email.value;
});

adress.addEventListener('keyup', function(e){
	adres.innerText=adress.value;
});
}


