function factorFunc() 
{
    var num = document.getElementById("number").value;

    var facts = new Array();
    
    for(var i=2;i<=num; i++){
	while(num % i == 0) {
	    facts.push(i);
	    num = num / i;
	}
    } 

    document.getElementById("factored").innerHTML=facts.toString();
}
