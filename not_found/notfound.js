
function genRandom(start, end){
    return Math.floor(Math.random() * end) + start;				
  }  
  $(document).ready(function(){
    var quips = ["These are not the files your looking for.","Woops, our bad.","I coulda sworn I saw that file a week ago...","Must be my A.D.D.","It WAS here...","I'm sorry Dave, I'm afraid I can't do that.","Well then..."];
      $('.quip').html(quips[genRandom(0, quips.length - 1)]);
  });