const quotes = [{
    quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    writer: `-Marilyn Monroe`
},
{
    quote: `“You only live once, but if you do it right, once is enough.”`,
    writer:`― Mae West`
},
{
    quote: `“In three words I can sum up everything I've learned about life: it goes on.”`,
    writer:`― Robert Frost`
},
{
    quote: `“To live is the rarest thing in the world. Most people exist, that is all.”`,
    writer:`― Oscar Wilde`
},
{
    quote: `“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”`,
    writer:`― Albert Einstein`
},
{
    quote: `“It does not do to dwell on dreams and forget to live.”`,
    writer:`― J.K. Rowling`
},
{
    quote: `“Good friends, good books, and a sleepy conscience: this is the ideal life.”`,
    writer:`― Mark Twain`
},
{
    quote: `“Life is what happens to us while we are making other plans.”`,
    writer:`― Allen Saunders`
},
{
    quote: `“Everything you can imagine is real.”`,
    writer:`― Pablo Picasso`
},
{
    quote: `“Life isn't about finding yourself. Life is about creating yourself.”`,
    writer:`― George Bernard Shaw`
},
{
    quote: `“Life is like riding a bicycle. To keep your balance, you must keep moving.”`,
    writer:`― Albert Einstein`
},
{
    quote: `“Who are you to judge the life I live?
    I know I'm not perfect
    -and I don't live to be-
    but before you start pointing fingers...
    make sure you hands are clean!”`,
    writer:`― Bob Marley`
},
{
    quote: `“But better to get hurt by the truth than comforted with a lie.”`,
    writer:`― Khaled Hosseini`
},
{
    quote: `“The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.”`,
    writer:`― Mark Twain`
},
{
    quote: `“The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.”`,
    writer:`― Isaac Asimov`
},
{
    quote: `“If you don't know where you're going, any road'll take you there”`,
    writer:`― George Harrison`
},
{
    quote: `“Be yourself; everyone else is already taken.”`,
    writer:`― Oscar Wilde`
},
{
    quote: `“Be the change that you wish to see in the world.”`,
    writer:`― Mahatma Gandhi`
},
{
    quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
    writer:`― Mahatma Gandhi`
},
{
    quote: `“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”`,
    writer:`― Marilyn Monroe`
},
{
    quote:`“I have not failed. I've just found 10,000 ways that won't work.”`,
    writer: `― Thomas A. Edison`
},
{
    quote:`“It is never too late to be what you might have been.”`,
    writer: `― George Eliot`
},
{
    quote:`“Do what you can, with what you have, where you are.”`,
    writer: `― Theodore Roosevelt`
},
{
    quote:`“A room without books is like a body without a soul.”`,
    writer:`― Marcus Tullius Cicero`
},
{
    quote:`“The fool don't think he is wise, but the wise man knows himself to be a fool.”`,
    writer:`― William Shakespeare`
},
{
    quote:`“Knowing yourself is the beginning of all wisdom.”`,
    writer:`― Aristotle`
},
{
    quote:`“The only true wisdom is in knowing you know nothing.”`,
    writer:`― Socrates`
},
{
    quote:`“Count your age by friends, not years. Count your life by smiles, not tears.”`,
    writer:`― John Lennon`
},
{
    quote:`“The secret of life, though, is to fall seven times and to get up eight times.”`,
    writer:`― Paulo Coelho`
},
{
    quote:`“Turn your wounds into wisdom.”`,
    writer:`― Oprah Winfrey`
}
];
let btn = document.querySelector('.Qbtn');
let quote = document.querySelector('.quote');
let writer = document.querySelector('.writer');
let btn2 = document.querySelector('.btn2');
let quote1 = document.querySelector('.quote1');
let writer1 = document.querySelector('.writer1');
btn.addEventListener('click', function(){
   let random = Math.floor(Math.random() * quotes.length);
   let colorArr = ['lightblue', 'lightpink', 'lightgoldenrodyellow', 'lightsalmon'];
   let randC = Math.floor(Math.random() * colorArr.length);
   quote.innerHTML = quotes[random].quote;

   writer.innerHTML = quotes[random].writer;

    document.getElementById('color1').style.backgroundColor= colorArr[randC];
});
btn2.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    let colorArr = ['lightcyan', 'skyblue', 'lightyellow', 'ghostwhite' ];
    let randC = Math.floor(Math.random() * colorArr.length);
    
    quote1.innerHTML = quotes[random].quote;

    writer1.innerHTML = quotes[random].writer;
    
    document.getElementById('color2').style.backgroundColor= colorArr[randC];
 });


let frontSide = document.querySelector('.frontside');
let backSide = document.querySelector('.backside');
function rotation(){ 
    backSide.classList.toggle('rotateB'); 
    frontSide.classList.toggle('rotateF'); 
}
const randomFunc =[oneImg, twoImg, threeImg, fourImg, fiveImg, sixImg, sevenImg, eightImg, nineImg, tenImg, elevenImg, twelveImg, thirteenImg, fourteenImg, fifteenImg];


function oneImg () {
    document.body.style.backgroundImage = "url('image (1).jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}
function twoImg () {
    document.body.style.backgroundImage = "url('image (2).jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}
function threeImg () {
    document.body.style.backgroundImage = "url('image (3).jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}
function fourImg () {
    document.body.style.backgroundImage = "url('image (4).jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}
function fiveImg () {
    document.body.style.backgroundImage = "url('image (5).jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}
function sixImg () {
    document.body.style.backgroundImage = "url('image (6).jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}
function sevenImg () {
    document.body.style.backgroundImage = "url('image (7).jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}
function eightImg () {
    document.body.style.backgroundImage = "url('image (8).jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}
function nineImg () {
    document.body.style.backgroundImage = "url('image (9).jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}
function tenImg () {
    document.body.style.backgroundImage = "url('image (10).jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}
function elevenImg () {
    document.body.style.backgroundImage = "url('image (11).jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}
function twelveImg () {
    document.body.style.backgroundImage = "url('image (12).jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}
function thirteenImg () {
    document.body.style.backgroundImage = "url('image (13).jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}
function fourteenImg () {
    document.body.style.backgroundImage = "url('image (14).jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}
function fifteenImg () {
    document.body.style.backgroundImage = "url('image (15).jpg')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}

btn.addEventListener('click', function () {  
    const a = randomFunc[Math.floor(Math.random() * randomFunc.length)];
    a();
});

btn2.addEventListener('click', function () {  
    const a = randomFunc[Math.floor(Math.random() * randomFunc.length)];
    a();
});