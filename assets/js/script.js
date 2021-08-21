function handleClick(event)
{
    switch(this.innerHTML)
    {
        case 'w':
            {
                var audio = new Audio('crash.mp3');
                audio.play();
                break;
            }
        case 'a':
            {
                var audio = new Audio('kick-bass.mp3');
                audio.play();
                break;
            }
        case 's':
            {
                var audio = new Audio('snare.mp3');
                audio.play();
                break;
            }
        case 'd':
            {
                var audio = new Audio('tom-1.mp3');
                audio.play();
                break;
            }    
        case 'j':
            {
                var audio = new Audio('tom-2.mp3');
                audio.play();
                break;
            }
        case 'k':
            {
                var audio = new Audio('tom-3.mp3');
                audio.play();
                break;
            }        
        case 'l':
            {
                var audio = new Audio('tom-4.mp3');
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
for(var i = 0 ; i < document.querySelectorAll('.drum').length ; i++)
{
    var x = document.querySelectorAll("button")[i].addEventListener('click',handleClick);
}

document.addEventListener("keydown",function(event){
    switch(event.key)
    {
        case 'w':
            {
                var audio = new Audio('crash.mp3');
                audio.play();
                break;
            }
        case 'a':
            {
                var audio = new Audio('kick-bass.mp3');
                audio.play();
                break;
            }
        case 's':
            {
                var audio = new Audio('snare.mp3');
                audio.play();
                break;
            }
        case 'd':
            {
                var audio = new Audio('tom-1.mp3');
                audio.play();
                break;
            }    
        case 'j':
            {
                var audio = new Audio('tom-2.mp3');
                audio.play();
                break;
            }
        case 'k':
            {
                var audio = new Audio('tom-3.mp3');
                audio.play();
                break;
            }        
        case 'l':
            {
                var audio = new Audio('tom-4.mp3');
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
    z.classList.add('pressed');
    setTimeout(function(){
        z.classList.remove('pressed');
    },100);
}
