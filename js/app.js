const form = document.querySelector('#form');
var bin = document.querySelector('input#input_binary');
var result = document.querySelector('div#result');


form.addEventListener('submit', (e) => {

	e.preventDefault();

	if (bin.value.match(/^[0-1]+$/g) === null) {
		alert('Please, enter either 0 or 1');
  	}
	else{
		var calc = [];
		var conclusion = 0;

		var bin_invert = invert(bin.value);

		for (var i = bin_invert.length-1; i >= 0 ; i--) {
				calc[i] = (2 ** i) * bin_invert[i];
				conclusion = conclusion + calc[i];
		}
		
		result.innerHTML = conclusion;
		bin.value = "";

	}
});

function invert(bin_string){
	return bin_string.split('').reverse().join('');
}