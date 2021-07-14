function handleClick(event)
{
    console.log('I got clicked ' + this.innerHTML + ' ' + event);
    this.style.color = "white";
    switch(this.innerHTML)
    {
        case 'w':
            {
                var audio = new Audio('./assets/audio/crash.mp3');
                audio.play();
                break;
            }
        case 'a':
            {
                var audio = new Audio('kick./assets/audio/-bass.mp3');
                audio.play();
                break;
            }
        case 's':
            {
                var audio = new Audio('./assets/audio/snare.mp3');
                audio.play();
                break;
            }
        case 'd':
            {
                var audio = new Audio('./assets/audio/tom-1.mp3');
                audio.play();
                break;
            }    
        case 'j':
            {
                var audio = new Audio('./assets/audio/tom-2.mp3');
                audio.play();
                break;
            }
        case 'k':
            {
                var audio = new Audio('./assets/audio/tom-3.mp3');
                audio.play();
                break;
            }        
        case 'l':
            {
                var audio = new Audio('./assets/audio/tom-4.mp3');
                audio.play();
                break;
            }
        default:
            {
                console.log('Select a valid sound option....');
            }        
    }
    buttonAnimation(this.innerHTML);
}
console.log(document.querySelectorAll('.drum').length)
for(var i = 0 ; i < document.querySelectorAll('.drum').length ; i++)
{
    var x = document.querySelectorAll("button")[i].addEventListener('click',handleClick);
}

document.addEventListener("keydown",function(event){
    console.log(event.key);
    switch(event.key)
    {
        case 'w':
            {
                var audio = new Audio('./assets/audio/crash.mp3');
                audio.play();
                break;
            }
        case 'a':
            {
                var audio = new Audio('kick./assets/audio/-bass.mp3');
                audio.play();
                break;
            }
        case 's':
            {
                var audio = new Audio('./assets/audio/snare.mp3');
                audio.play();
                break;
            }
        case 'd':
            {
                var audio = new Audio('./assets/audio/tom-1.mp3');
                audio.play();
                break;
            }    
        case 'j':
            {
                var audio = new Audio('./assets/audio/tom-2.mp3');
                audio.play();
                break;
            }
        case 'k':
            {
                var audio = new Audio('./assets/audio/tom-3.mp3');
                audio.play();
                break;
            }        
        case 'l':
            {
                var audio = new Audio('./assets/audio/tom-4.mp3');
                audio.play();
                break;
            }
        default:
            {
                console.log('Select a valid sound option....');
            }        
    }
    buttonAnimation(event.key);
});
function buttonAnimation(currentKey)
{
    var z = document.getElementById(currentKey+" drum");
    console.log(z)
    z.classList.add('pressed');
    setTimeout(function(){
        z.classList.remove('pressed');
    },100);
}

console.log("hello")