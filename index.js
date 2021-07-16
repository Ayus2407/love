for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{var t= i+1;
document.querySelectorAll(".drum")[i].addEventListener("click",function ()
{
var b=this.innerHTML;
sound(b);
animation(b);
}
);
document.addEventListener("keypress",function(event)
{
sound(event.key);
animation(event.key);

});
}
function sound(key)
{
  switch (key) {
    case "T":
    var audio=new Audio("Record/Record-001.aac");
    audio.play();
  break;
  case "A":
  var audio=new Audio("Record/Record-002.aac");
  audio.play();

    break;
    case "N":
    var audio=new Audio("Record/Record-003.aac");
    audio.play();

      break;
      case "I":
      var audio=new Audio("Record/Record-004.aac");
      audio.play();

        break;
        case "K":
        var audio=new Audio("Record/Record-005.aac");
        audio.play();

          break;
          case "A1":
          var audio=new Audio("Record/Record-006.aac");
          audio.play();

            break;
            case "S":
            var audio=new Audio("Record/Record-007.aac");
            audio.play();

              break;
    default:

  }
}
function animation(key)
{
  var active=  document.querySelector("."+key);
  active.classList.add("pressed");
  setTimeout(function(){
    active.classList.remove("pressed");
  },2000)
}
