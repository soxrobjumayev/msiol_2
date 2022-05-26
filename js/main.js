var salaries = { 
	"Akmal": 1200,
	"Salim": 5200,
	"Karima": 1800,


}

function sumJami(salaries){
	var sum = 0
	for (var i = 0; i < salaries.length;i++){
		sum += salaries[i]
	}

	return sum
}

alert(sumJami([1200,5200,1800]))



// 2 usul

var salaries = [ 1200,5200,1800]

var sum = 0

for (var i = 0; i < salaries.length;i++){
	sum += salaries[i]
}

alert(sum)
	


