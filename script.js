const lyricButton = document.getElementById('begin_lyric');
const showLyricResult = document.getElementById('lyric-result')

let lyricList = "";

document.addEventListener('click', event => {
    if(event.target.className ==='begin_lyric'){
        function lyricList (list){
            let num = list.length;
            return Math.floor(Math.random()*num)
            }
    }
})

const location = [
"Miami", "New York","California", "Texas", "Kansas"  
]

const drinks = [
    "Tequila", "Soda","Milk", "Tea"
]

const celebrity =[
    "Michael Jackson", "Obama", "Bennedict Cumberbatch", "elmo"
]

const action =[
    "nod", "point", "kindly gesture", 'pop my collar'
]


lyricButton.innerHTML = `We down in ${location} going hard tonight, 
gonna throw down ${drinks} like its going out of style, 
Walk in the club fly like ${celebrity}. 
When the DJ sees me ${action} he clears the floor, 
for famous dance action that I am known for. `;

<h2 id='lyric-result'></h2>





