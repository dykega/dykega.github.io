function Stack()
{
	this.data = new Array();
	this.push = pushdata;
	this.pop = popdata;
	this.getStack = showStackData;
	this.peek = peekdata;
	this.isEmpty = isempty;
	this.size = stackSize;
	this.clone = cloneStack;

	function pushdata(obj){
			this.data.push(obj);
	}
	function popdata(){
			return this.data.pop();
	}
	function showStackData(){
			return this.data;
	}
	function peekdata(){
		return this.data[this.data.length-1];
	}
	function isempty(){
		if(this.data.length == 0) {
			return true;
		}
		else{
			return false;
		}
	}
	function stackSize(){
		return this.data.length;
	}
	function cloneStack(){
		var newStack = new Stack();
		for (var i=0;i<this.data.length;i++) {
			newStack.push(this.data[i]);
		}
		return newStack;
	}
}

function Queue()
{
	this.qdata = new Array();
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.isEmpty = isEmpty;
	this.size = size;

	function enqueue(obj){
		this.qdata.unshift(obj);
	}
	function dequeue() {
		return this.qdata.pop();
	}
	function isEmpty() {
		if(this.qdata.length == 0){
			return true;
		}
		else{
			return false;
		}
	}
	function size() {
		return this.qdata.length;
	}
}

function Set() 
{
	this.sdata = new Array();
	this.add = add;
	this.contains = contains;

	function add(obj) {
		this.sdata.push(obj);
	}
	function contains(obj) {
		if(this.sdata.indexOf(obj) == -1) {
			return false;
		}
		else{
			return true;
		}
	}
}

function getOneDiffs(word, wList){
	var oneDiffs = new Array();
	for(var i=0;i<wList.length;i++){
		var listWord = wList[i];
		var sameCh = 0;
		for(var x=0;x<listWord.length;x++){
			if (listWord[x]==word[x])
			{
				sameCh++;
			}
		}
		if (sameCh== word.length-1)
		{
			oneDiffs.push(listWord);
		}
	}
	return oneDiffs;
}

function ladderFunc() 
{
    var start = document.getElementById("start").value;
	var end = document.getElementById("end").value;
	var error_ms = new Array();
	var error = false

	if(start.length != 3 && start.length != 4 && start.length != 5) {
		error_ms.push("Your starting word needs to be either 3,4, or 5 letters long");
		error=true;
	}
	if(end.length != 3 && end.length != 4 && end.length != 5) {
		error_ms.push("Your ending word needs to be either 3,4, or 5 letters long");
		error=true;
	}
	if(start.length != end.length) {
		error_ms.push("Your starting word needs to be the same length as your ending word");
		error=true;
	}

	if(!error){
	if(start.length == 3) {
		var useList = threeLetterWords;
	}
	else if(start.length == 4) {
		var useList = fourLetterWords;
	}
	else{
		var useList = fiveLetterWords;
	}

	var queue = new Queue();
	var s = new Stack();
	s.push(start);
	queue.enqueue(s);
	var usedWords = new Set();
	usedWords.add(start);

	var done = false;
	var found = false;

	while (!done)
	{
		var currentStack = queue.dequeue();
		var topWord = currentStack.peek();
		var nextWords = getOneDiffs(topWord, useList);
		for(var w=0;w<nextWords.length;w++){
			var word1 = nextWords[w];
			if(!usedWords.contains(word1)) {
				usedWords.add(word1);
				var newStack = currentStack.clone();
				newStack.push(word1);
				if(word1==end){
					done = true;
					found = true;
					var finalList = newStack.getStack();
				}
				queue.enqueue(newStack);
			}
		}
		if (queue.size()==0)
		{
			done = true;
			found = false;
		}
	}
	}
	
	if(error) {
		document.getElementById("errors").innerHTML="";
		document.getElementById("content").innerHTML="";
		for(var x=0;x<error_ms.length;x++) {
			var node = document.createElement("P");
			var textnode=document.createTextNode(error_ms[x]);
			node.appendChild(textnode);
			console.log(node);
			document.getElementById("errors").appendChild(node);
		}
	}
	else if(!found) {
		document.getElementById("errors").innerHTML="";
		document.getElementById("content").innerHTML="<p id=\"nonefound\"> </p>";
		document.getElementById("nonefound").innerHTML="No matches could be found"; 
	}
	else {
		document.getElementById("errors").innerHTML="";
		document.getElementById("content").innerHTML="<table id=\"ladder\"><th>Word Ladder</th> </table>";
		for(var y=0;y<finalList.length;y++) {
			var n2 =document.createElement("TR");
			var node=document.createElement("TD");
			var textnode=document.createTextNode(finalList[y]);
			node.appendChild(textnode);
			n2.appendChild(node);
			document.getElementById("ladder").appendChild(n2);
		}
	}
	
}