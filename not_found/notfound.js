
function genRandom(start, end){
    return Math.floor(Math.random() * end) + start;				
  }  
  $(document).ready(function(){
    var msgs = [
      "That is not what your looking for",
      "Woops, our bad.",
      "I sware I saw that file a week ago",
      "It WAS here...",
      "The dev responsible for this is wanted",
      "Well then..."
    ];
      $('.msg').html(msgs[genRandom(0, msgs.length - 1)]);
  });