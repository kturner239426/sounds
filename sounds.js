function start()
{
   
    document.getElementById( "startButton").disabled = true;
    Document.getElementById("stopButton").disabled = false;
}


function stop()
{

    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;

}
function Rain() //rain sound plays on command//
{
    mysound = new sound("Downloads/rain-sounds-relaxing-noise-and-sound-of-summer-rain-143334.mp3");
    mysound.play();
}

function sound(src)   //play this sound//
{
    this.sound = document.createElement("audio"); 
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
}

function NoRain()
{
    window.location.reload();
}
