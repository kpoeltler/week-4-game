//--------------------Psuedo Code-------------------------created on Saturday w/class-------
// +++var target = math.floor(math.random between 19-120
// +++var crystal1, var crystal2, var crystal3, var crystal4 all get random number between 1-12
// +++var userScore = 0
// S(".crystal").on("click", updateScore);
// var updateScore = function() {
// 	$(this).val();};

// }
// 	 userScore += crystal1/2/3/4
// 	 if (userScore > targetScore) {
// 		 display ("lose"; GOOGLE
// 	 }
// 	 else if (userScore ===targetScore){
// 		 display ("winner";)
// 	 };
//  }


var userScore = 0;
var target = Math.floor(Math.random() * (100 + 19) +19 );
console.log(target);
				 //doesn't work until I call it and put the min=19 and max=120
	//I am lost as to what to do to get this attached to the buttons.			
var crystal1 = Math.floor(Math.random() * (12 - 1)) + 1;

var crystal2 = Math.floor(Math.random() * (12 - 1)) + 1;

var crystal3 = Math.floor(Math.random() * (12 - 1)) + 1;

var crystal4 = Math.floor(Math.random() * (12 - 1)) + 1;

console.log (crystal1, crystal2, crystal3, crystal4 );
// var targetScore; 
// var updateScore;

// "clicked" this.value


// //---------- Add click listener-----------
// var game = function (){
// //put the whole game in here

// };


$("#crystal1").on("click",function(){
	userScore += crystal1
	console.log (userScore);
	winCheck ();
});

$("#crystal2").on("click",function(){
	userScore += crystal2
	console.log (userScore);
	winCheck();
});
$("#crystal3").on("click",function(){
	userScore += crystal3
	console.log (userScore);
	winCheck();
});
$("#crystal4").on("click",function(){
	userScore += crystal4
	console.log (userScore);
	winCheck();
});
//---------------TONIGHT----------------------------------------------------------
//_______________if I have time learn to group fxns-----------
// var updateScore = function (){
// 	$(this).val();  //google userScore += num
	//in each block of code userScore += the crystal1/2/3/4/

function winCheck(){
	if (userScore > target) {
	console.log ("you lost");
	} else if (userScore === target) {
		console.log (" you win");
	
	}
}
///apply the other elements to the crystals and create a display function replace console.log with the display fxn
//if you lose reset the game change the target and crystal values
 
//---------------------If I have time----------------------------------------------
//make an array to hold all the crystals
//



//-------------------------------------Game Things I Found On Google----------------
//<body onload="startGame()">
	// <script>
	// function startGame() {
	// 		myGameArea.start();
	// }
	
	// var myGameArea = {
	// 		canvas : document.createElement("canvas"),
	// 		start : function() {
	// 				this.canvas.width = 480;
	// 				this.canvas.height = 270;
	// 				this.context = this.canvas.getContext("2d");
	// 				document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	// 		}
	// }
	//local storage
	//firebase it is a real time database it works well with react similar to mongo 
	// wednesday github collaboration
	//agile methodology-workflow, waterfall the alternate
	//organizing workflow and code mvp-wireframingof ui then flowchart feature dump
	//

	