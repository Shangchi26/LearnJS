var greeting = 'Howdy';
var name = 'Molly';
var message = ', please check your order:';

var welcome = greeting + name + message;

var sign = 'Montague House';
var titles = sign.length;
 var subtotal = titles*5;
 var shipping = 7;
 var grandTotal = subtotal + shipping;

 var el = document.getElementById('greeting');
 el.textContent = welcome;

 var elSign = document.getElementById('userSign');
 elSign.textContent = sign;

 var elTitles = document.getElementById('title');
 elTitles.textContent = titles;

 var elSubTotal = document.getElementById('subTotal');
 elSubTotal.textContent = '$' + subtotal;

 var elShipping = document.getElementById('grandTotal');
 elShipping.textContent = '$' + grandTotal;

 var elGrandTotal = document.getElementById('grandTotal');
 elGrandTotal.textContent = '$' + grandTotal;