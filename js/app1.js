//console.log("Hello world");

var calc = [];
var conclusion = 0;
var num = 2;

while(num >= 0){

	var bin = prompt("Coloque um número binário para conversão");

	if (bin.match(/^[0-1]+$/g) === null) {

	      console.log('Please, enter either 0 or 1');
	      
	    }
	else{

		function inverte(bin) {
			return bin.split('').reverse().join('');
		}

		var bin_invert = inverte(bin);

		for (var i = bin_invert.length-1; i >= 0 ; i--) {
			calc[i] = (2 ** i) * bin_invert[i];
			conclusion = conclusion + calc[i];
		}

		console.log(conclusion)
		console.log(typeof(bin_invert))
		console.log(typeof(bin))

		num -= 1;

		10101111
	}
}