

function translateTime(givenTime) {

	var timeInSec = givenTime;
	var hours = Math.floor((timeInSec/3600));
	var minutes = Math.floor(((timeInSec%3600)/60));
	var seconds = ((timeInSec%3600)%60);

	if (timeInSec < 60) {

		console.log('Time: ' + seconds + 'sec');

	} else if (timeInSec < 3600) {

		console.log('Time: ' + minutes + 'min:' + seconds + 'sec');
		
	} else { // == (timeInSec >= 3600)

		console.log('Time: ' + hours + 'h:' + minutes + 'min:' + seconds + 'sec');

	}

}


exports.timeDisplay = translateTime;