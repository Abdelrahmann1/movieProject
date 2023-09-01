
function genRandom(start, end){
    return Math.floor(Math.random() * end) + start;				
  }  
  $(document).ready(function(){
    var quips = ["That is not what your looking for","Woops, our bad.","I sware I saw that file a week ago","Bilals' fault xD","It WAS here...","The dev responsible for this is wanted","Well then..."];
      $('.quip').html(quips[genRandom(0, quips.length - 1)]);
  });