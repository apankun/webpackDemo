// Greeter.js
module.exports = function() {
    require ('./main.less');
    var greet = document.createElement('div');
    greet.className='demo';
    greet.textContent = "Hi there and greetings!";
    return greet;
};