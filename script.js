(function(){
    const schedule = [
		[
			{ start:  0, duration: 2, text: '00:00 - 02:00', blackout: true  },
			{ start:  2, duration: 4, text: '02:00 - 06:00', blackout: false },
			{ start:  6, duration: 2, text: '06:00 - 08:00', blackout: true  },
			{ start:  8, duration: 4, text: '08:00 - 12:00', blackout: false },
			{ start: 12, duration: 2, text: '12:00 - 14:00', blackout: true  },
			{ start: 14, duration: 4, text: '14:00 - 18:00', blackout: false },
			{ start: 18, duration: 2, text: '18:00 - 20:00', blackout: true  },
			{ start: 20, duration: 8, text: '20:00 - 04:00', blackout: false },
		],
		[
			{ start:  4, duration: 2, text: '04:00 - 06:00', blackout: true  },
			{ start:  6, duration: 4, text: '06:00 - 10:00', blackout: false },
			{ start: 10, duration: 2, text: '10:00 - 12:00', blackout: true  },
			{ start: 12, duration: 4, text: '12:00 - 16:00', blackout: false },
			{ start: 16, duration: 2, text: '16:00 - 18:00', blackout: true  },
			{ start: 18, duration: 4, text: '18:00 - 22:00', blackout: false },
			{ start: 22, duration: 2, text: '22:00 - 00:00', blackout: true  },
		],
		[
			{ start:  0, duration: 2, text: '00:00 - 02:00', blackout: false },
			{ start:  2, duration: 2, text: '02:00 - 04:00', blackout: true  },
			{ start:  4, duration: 4, text: '04:00 - 08:00', blackout: false },
			{ start:  8, duration: 2, text: '08:00 - 10:00', blackout: true  },
			{ start: 10, duration: 4, text: '10:00 - 14:00', blackout: false },
			{ start: 14, duration: 2, text: '14:00 - 16:00', blackout: true  },
			{ start: 16, duration: 4, text: '16:00 - 20:00', blackout: false },
			{ start: 20, duration: 2, text: '20:00 - 22:00', blackout: true  },
			{ start: 22, duration: 2, text: '22:00 - 00:00', blackout: false },
		]
	];	

    function clock(){
        const timeDiv = document.querySelector('.time');
        const date =  new Date();
        timeDiv.innerHTML = `Today: ${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
    }

    function renderSchedule(day){    
        const scheduleDiv = document.querySelector('.schedule');
		scheduleDiv.innerHTML = '';
        for (let interval of schedule[day % 3]){
            scheduleDiv.innerHTML += `<div class='${interval.blackout?'off':'on'}'>${interval.text}</div>`;
        }
    }

    function changeDate(){
		const dateInput = document.querySelector('.date');
		const day = Number(dateInput.value.split('-')[2]);
		console.log(day);
        renderSchedule(day);
    }

	clock();
	const today = new Date();
	const dateInput = document.querySelector('.date');
	dateInput.value = today.toISOString().split('T')[0];
	dateInput.addEventListener('change', changeDate);
	dateInput.addEventListener('input', changeDate);
    renderSchedule(today.getDate());
    setInterval(clock, 1000);
})();
