const object = {
    location: ["Miami", "New York", "California", "Texas", "Kansas"],
    drinks: ["Tequila", "Soda", "Milk", "Tea"],
    celebrity: ["Michael Jackson", "Obama", "Bennedict Cumberbatch", "elmo"],
    action: ["nod", "point", "kindly gesture", 'pop my collar']
};

const getRandom = (array) => array[Math.floor(Math.random()*array.length)];

document.getElementById('begin_lyric').addEventListener('click', event => { 
document.getElementById('text').innerHTML = `We down in ${getRandom(object.location)}
 going hard tonight, 
gonna throw down ${getRandom(object.drinks)} like its going out of style, 
Walk in the club fly like ${getRandom(object.celebrity)}. 
When the DJ sees me ${getRandom(object.action)} he clears the floor, 
for famous dance action that I am known for. `; }
);








