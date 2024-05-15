function calculate() {
	let startTime = input.get('start_time').time().raw();
	let endTime = input.get('end_time').time().raw();
	if(!input.valid()) return;
	let totalSeconds = (endTime.getTime() - startTime.getTime()) / 1000;
	if(totalSeconds < 0) {
		endTime.setDate(endTime.getDate() + 1);
		totalSeconds = (endTime.getTime() - startTime.getTime()) / 1000;
	}

	const seconds = Math.floor(totalSeconds % 60);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);

	_('result').innerHTML = toDaysMinutesSeconds(hours, minutes, seconds);
	_('result-hours-minutes').innerHTML = `or ${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
	_('result-in-hours').innerHTML = 'or '  + plural(+(totalSeconds / 3600).toFixed(5), 'hours:hour:hours:hours:hours:hours');
	_('result-in-minutes').innerHTML = 'or ' + plural(+(totalSeconds / 60).toFixed(5), 'minutes:minute:minutes:minutes:minutes:minutes');
}

function toDaysMinutesSeconds(hours, minutes, seconds){
	let result = '';
	result += plural(hours, 'hours:hour:hours:hours:hours:hours') + ' ';
	if(minutes) {
		result += plural(minutes, 'minutes:minute:minutes:minutes:minutes:minutes') + ' ';
	}
	if(seconds) {
		result += plural(seconds, 'seconds:second:seconds:seconds:seconds:seconds');
	}
	return result;
}
