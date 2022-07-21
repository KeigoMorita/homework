// Write JavaScript here 
$("#btn").click(function(){
  let result = ["大吉", "中吉", "小吉"];
  let r = Math.floor(Math.random()*result.length);
  $("#btn").text(result[r]);
});
$("#reset").click(function(){
  $("#btn").text("今日の運勢は");
  $("#reset").css("display", "none")
})