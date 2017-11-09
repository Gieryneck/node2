
var os = require('os');




function getOSInfo() {
				
	var type = os.type();

	if(type === 'Darwin') {

		type = 'OSX';

	} else if(type === 'Windows_NT') {

		type = 'Windows';
	}

	var release = os.release();
	var cpu = os.cpus()[0].model; // metoda cpus() zwraca tablicę ze wszystkimi rdzeniami cpu, my chcemy tylko model
	var uptime = os.uptime(); //podawany w sec
	var userInfo = os.userInfo();


	console.log('System:', type);
	console.log('Release:', release);
	console.log('CPU model:', cpu);
	console.log('Uptime: ~', (uptime/60).toFixed(0), 'minutes.'); // toFixed(0) zaokr. do 0 miejsc po przecinku
	console.log('User name:', userInfo.username);
	console.log('Home dir:', userInfo.homedir);
	break;
	/*
	process.stdout a console.log. Nie są to funkcje, 
	które działają tak samo. Różnią się tym, że 
	console.log zawsze stawia na końcu znak nowej linii (\n). 
	*/

}


exports.print = getOSInfo;

