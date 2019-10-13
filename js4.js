

var str = "Dontre lives in Henderson"; 
 
function firstE(){
	var dontre = str.slice(0, 5);
	var lives = str.slice(6,30);
	var dontreLives = dontre + lives;
	document.write(dontreLives);
 }

function secondE(){
	var dontre = str.slice(0, 5);
	var lives = str.slice(6,10);
	var dontreLives = dontre + lives;
	var inH = str.slice(11,30);
	var dontreLivesInH = dontreLives + inH
	document.write(dontreLivesInH)
 }
 
function thirdE(){
	var dontre = str.slice(0, 5);
	var lives = str.slice(6,10);
	var dontreLives = dontre + lives;
	var inH = str.slice(11,17);
	var dontreLivesInH = dontreLives + inH;
	var dontreLivesInHende = str.slice(18,30);
	var almostFull = dontreLivesInH + dontreLivesInHende;
	document.write(almostFull);
}

function lastE() {
	var dontre = str.slice(0, 5);
	var lives = str.slice(6,10);
	var dontreLives = dontre + lives;
	var inH = str.slice(11,17);
	var dontreLivesInH = dontreLives + inH;
	var dontreLivesInHende = str.slice(18,20);
	var almostFull = dontreLivesInH + dontreLivesInHende;
	var dontreLivesInHenderson = str.slice(21,30);
	var done = almostFull + dontreLivesInHenderson;
	document.write(done);
}

function lineBreak(){
	document.write("<br>", "<br>")
}

document.write(str);
lineBreak();
firstE();
lineBreak();
secondE();
lineBreak();
thirdE();
lineBreak();
lastE();


