console.log('Hey');
async function getaudio(song) {
    let a = await fetch(`http://127.0.0.1:5500/song/`).then(console.log("eger")).catch((e)=>console.log(e));
    let response = await a.text();
    let elm=response.getElementsByTagName('#wrapper')
    let div=document.createElement("div")
    div.innerHTML=response;
    let t=div.getElementsByTagName("a")
    let songs=[]
    for(let i=0;i<t.length;i++)
      {const element=t[i];
       if(element.href.endsWith(".aac"))
         {songs.push(element.href.split("/song/")[1])
       }
   }
    return(songs);
}

async function main() {
  let audios=await getaudio()
  console.log(audios);
  let songul=document.querySelector(".list").getElementsByTagName("ul")
  for (const song of audios) {
    songul.innerHTML=songul.innerHTML+ `<li> 
                            <img class="invert" src="music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20"," ")}</div>
                                <div>song artist</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="play.svg" alt="">
                            </div>
    
    </li>`;
  }
  var audio=new Audio(audios[0]);
  audio.play();
  audio.addEventListener("loaddata",()=>{
    let duration=audio.duration;
  });
}


main()