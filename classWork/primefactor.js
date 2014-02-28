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

    if(facts.length == 1) {
	facts.unshift(1);
    }

    document.getElementById("factored").innerHTML=facts.toString();
}
