function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                  color += letters[Math.round(Math.random() * 15)];
            }
            return color;
            }
            var clickedTime; var createdTime; var reactionTime;
            function makeBox() {
                  var cssStringOval = "width: 180px; height: 120px;"
                  var cssStringSquareCircle = "width:120px; height:120px;"
                  var time=Math.random();
                  time=time*5000;
                  setTimeout(function() {
                        if (Math.random()<0.4) {
                              document.getElementById("box").style.cssText = cssStringSquareCircle;
                              document.getElementById("box").style.borderRadius="50%";
                              
                        } else  if (Math.random()<0.7) {
                              document.getElementById("box").style.cssText = cssStringSquareCircle;
                              document.getElementById("box").style.borderRadius="0";
                              
                        } else {
                              document.getElementById("box").style.cssText = cssStringOval;
                              document.getElementById("box").style.borderRadius="80%";
                              
                  
                              alert("oval")
                        }
                        var top=Math.random();
                        top=top*300;
                        var left=Math.random();
                        left=left*450;
                        document.getElementById("box").style.top=top+"px";
                        document.getElementById("box").style.left=left+"px";
                        document.getElementById("box").style.backgroundColor=getRandomColor();
                        document.getElementById("box").style.display="inline-block";
                        var boxDropShadow = document.getElementById("box")
                        boxDropShadow.style.boxShadow = "2px 2px 5px black";
                        createdTime=Date.now();
}, time);
   
   }
document.getElementById("box").onclick=function() {
      clickedTime=Date.now();
      reactionTime=(clickedTime-createdTime)/1000;
      document.getElementById("time").innerHTML=reactionTime;
      this.style.display="none";
makeBox(); }
makeBox();