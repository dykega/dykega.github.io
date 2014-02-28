Person = function() {

    var ssn = "123-45-6789";
    var wght = 100;

    this.name = "Name"
    this.age = 45;

    this.getWeight = function() {
	return wght;
	}
    this.getSSN = function() {
	return ssn;
    }
    this.gainWeight = function(lbs) {
	wght = wght + lbs;
    }

    Person.prototype.outerfunction = function() {
	this.age ++;
	return this.age;
    }
}
