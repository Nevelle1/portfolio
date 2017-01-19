// var el = document.getElementsByClassName('clickMe');
// el.onclick = openTab; 


// items = document.getElementsByClassName('clickMe');
// [].forEach.call(items, function (el) {
//   el.addEventListener('click', openTab);
// });

// if ($('.topLinks').click === true) {
// 	("#floatedCraits").show();
// };
// $(".thirdNav").click
// (
//   function(e)
//   {
//     if(e.target.id !== "#floatedCraits")
//     {
//       $("#floatedCraits").hide();
//       document.getElementById("body").reset();
//     }
//   }
// );

// $(document).ready(function(){
//     $(".topLinks").click(function(){
//         $("#floatedCraits").toggle();
// //         $("body").click(function(){
// // firstBlock.style.display = 'none';
// // 	secondBlock.style.display = 'none';
// // 	thirdBlock.style.display = 'none';
// // 	forthBlock.style.display = 'none';	
// // 	fithBlock.style.display = 'none';
// //      })   	
//     });
// });

var items = document.getElementsByClassName('topLinks');
var links = document.getElementById('floatedCraits');
var offClick1 = document.getElementById('bigContainer');

(function () {
	alert('For JavaScript Examples click on the main nav buttons University Academics, Living, Services, and Find.');
})();

// var outsideClick = document.getElementsByTagName('body')[0].onclick = function() {

// };

for (var i = 0; i < items.length; i++) {
	// items[i].nextElementSibling.style.display = 'none';
	offClick1.onclick = function() {
				for (var i =  0; i < items.length; i++) {
						items[i].nextElementSibling.style.display = 'none';
					};	
				}	
	items[i].onclick = function() {
			console.log(this.nextElementSibling);
			
			if (this.nextElementSibling.style.display === 'block') {
				this.nextElementSibling.style.display = 'none';
			} else {
				for(var i = 0; i < items.length; i++) {
				items[i].nextElementSibling.style.display = 'none';
				this.nextElementSibling.style.display = 'block';
				}
			}
			
			// items[i].nextElementSibling.style.display = 'none';
			// console.log(items[i].nextElementSibling);
		
		// console.log(this.nextElementSibling);
		

	}

}


// var first = document.getElementById('tab1');
// 	var second = document.getElementById('tab2');
// 	var third = document.getElementById('tab3');
// 	var forth = document.getElementById('tab4');
// 	var fith = document.getElementById('tab5');

// 	var firstBlock = document.getElementById('wrapper1');
// 	var secondBlock = document.getElementById('wrapper2');
// 	var thirdBlock = document.getElementById('wrapper3');
// 	var forthBlock = document.getElementById('wrapper4');
// 	var fithBlock = document.getElementById('wrapper5');

// first.onclick = openTab;
// second.onclick = openTab1;
// third.onclick = openTab2;
// forth.onclick = openTab3;
// fith.onclick = openTab4;





// $(document).mouseup(function (e)
// {
//     var container = $("#floatedCraits");

//     if (!container.is(e.target) // if the target of the click isn't the container...
//         && container.has(e.target).length === 0) // ... nor a descendant of the container
//     {
//         container.hide();
//     }
// });



// window.onclick=function() {
// //Hide the menus if visible
// firstBlock.style.display = 'none';
// 	secondBlock.style.display = 'none';
// 	thirdBlock.style.display = 'none';
// 	forthBlock.style.display = 'none';
// 	fithBlock.style.display = 'none';
// };
// document.getElementById('floatedCraits').onclick = function(event) {
// event.stopPropagation();
// }
// $('#floatedCraits').click(function(event){
//     event.stopPropagation();
// });
// $(window).click(function() {
// //Hide the menus if visible
// firstBlock.style.display = 'none';
// 	secondBlock.style.display = 'none';
// 	thirdBlock.style.display = 'none';
// 	forthBlock.style.display = 'none';
// 	fithBlock.style.display = 'none';
// });







// $('body').click(function() {
//     $("#floatedCraits").hide();
// });

// $('#floatedCraits').click(function(e) {
//     e.stopPropagation();
// });



// $('floatedCraits').click(function(event){
//     event.stopPropagation();
// });
// outsideClick = closeAllTabs;

// function closeAllTabs () {
// 	 if (outsideClick.clicked === true) //(outsideClick.onclick !== firstBlock || secondBlock || thirdBlock || forthBlock || fithBlock) {
// 	alert('it worked');
// 	firstBlock.style.display = 'none';
// 	secondBlock.style.display = 'none';
// 	thirdBlock.style.display = 'none';
// 	forthBlock.style.display = 'none';
// 	fithBlock.style.display = 'none';
// };
	


// function openTab () {
// 	firstBlock.style.display = 'Block';
// 	secondBlock.style.display = 'none';
// 	thirdBlock.style.display = 'none';
// 	forthBlock.style.display = 'none';
// 	fithBlock.style.display = 'none';
// 	if (true) {};
// };
// function openTab1 () {
	
// 	firstBlock.style.display = 'none';
// 	secondBlock.style.display = 'Block';
// 	thirdBlock.style.display = 'none';
// 	forthBlock.style.display = 'none';
// 	fithBlock.style.display = 'none';
// };
// function openTab2 () {
// 	firstBlock.style.display = 'none';
// 	secondBlock.style.display = 'none';
// 	thirdBlock.style.display = 'Block';
// 	forthBlock.style.display = 'none';
// 	fithBlock.style.display = 'none';
// };
// function openTab3 () {
// 	firstBlock.style.display = 'none';
// 	secondBlock.style.display = 'none';
// 	thirdBlock.style.display = 'none';
// 	forthBlock.style.display = 'Block';
// 	fithBlock.style.display = 'none';
// };
// function openTab4 () {
// 	firstBlock.style.display = 'none';
// 	secondBlock.style.display = 'none';
// 	thirdBlock.style.display = 'none';
// 	forthBlock.style.display = 'none';
// 	fithBlock.style.display = 'Block';
// };



// switch (el) {
//   case document.getElementsByClassName('clickMe')[0]:
//     console.log('negative 1');
//     break;
//   case document.getElementsByClassName('clickMe')[1]: // foo is 0 so criteria met here so this block will run
//     console.log(0);
//     // NOTE: the forgotten break would have been here
//   case document.getElementsByClassName('clickMe')[2]: // no break statement in 'case 0:' so this case will run as well
//     console.log(1);
//     break; // it encounters this break so will not continue into 'case 2:'
//   case document.getElementsByClassName('clickMe')[3]:
//     console.log(2);
//     break;
//   default:
//     console.log('default');
// }
		
	
