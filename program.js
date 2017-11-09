 var os = require('os');


 process.stdin.setEncoding('utf-8');
 /*Bez tego informacje, które przekazujemy do aplikacji będą odczytywane jako dane szesnastkowe 
 (potraktuje wejście jako buffer). Poprawne enkodowanie zapewnia, że program "zrozumie" co do niego
  mówimy (odczyta wartość jako string z kodowaniem UTF-8). W Node.js istnieją obiekty globalne,
 których nie spotkamy w przeglądarce. Jednym z nich jest przykładowo buffer, który jest heksadecymalną
 (szesnastkową) reprezentacją danych.*/




console.log('NODE.JS version:', process.versions.node);


process.stdin.on('readable', function() {
/*Powyższy kod można odczytać w następujący sposób: na zdarzenie (.on) odczytu (readable), masz wykonać funkcję (function...).
*/
	

	var input = process.stdin.read(); // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu

	if(input !== null) {

		var instruction = input.toString().trim(); // trim() pozbywamy się wszystkich białych znaków z przz i za tekstem. Znikają wszystkie spacje, tabulatory, entery - pozostaje sam czysty tekst. 

		switch(instruction) { 

			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;

			case '/sayhello':
				process.stdout.write('hello!\n');
				break;

			case '/getOSInfo':
				getOSInfo();
				break;

			case '/test':
				translateTime(0);
				break;

			default:
				process.stderr.write('Wrong instruction!\n');
		}
		
	}
});


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
	
	/*
	process.stdout a console.log. Nie są to funkcje, 
	które działają tak samo. Różnią się tym, że 
	console.log zawsze stawia na końcu znak nowej linii (\n). 
	*/

}


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
				