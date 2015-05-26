/**
 * Home dialog module
 *
 * @author Pavel Pirogov
 */
$.registerModule('workout', function(container, data, initCallback) {
	// module private variables


	// module public variables
	var audio;
	var w = data.workout;
	var ex = w.duration.toExhaustion;
	var time = w.duration.time;
	var unit = w.duration.unit;
	var timer = (ex) ? 0 : $.timer(time, unit);
	var originalTime = $.toTime(timer);
	var started = 0;
	var settings = $.get('settings');

	// module private methods

	console.log(timer);

	// module public methods
	/**
	 * For calls from other modules
	 * @param	{String}	subject
	 * @param 	{Object}	data
	 */
	this.call = function (subject, data) {

	};
	/**
	 * Will be fired before module is close
	 * @returns		{Boolean}	if returns false - module will not close
	 */
	this.onDestroy = function() {
		$('.timer').countdown('destroy');
		return true;
	};

	console.log(w);

	$(container).create($.header({
		menu: true
	}));

	var head = $(container).create($.head());

	var timer = {
		tag: 'span',
		cls: 'timer',
		text: originalTime
	}

	audio = {

	}

	if(settings.music) {
		audio = {
			cls: 'audio',
			text: 'audio on',
			on: {
				click: function() {
					
				}
			},
			items: [
				{
					tag: 'audio',
					attr: {
						controls : ''
					},
					items: [
						{
							tag: 'source',
							attr: {
								src: $.getAudioUrl(w)
							}
						}
					]
				}
			]
		}
	}

	var play = {
		tag: 'button',
		cls: 'cbtn',
		text: 'play',
		on: {
			click: function() {
				if(started == 0) {
					if(ex) {
						$('.timer').countdown({
							since: 0,
							format: 'MS',
							compact: true
						});
					}
					else {
						$('.timer').countdown({
							until: +100,
							format: 'MS',
							compact: true,
							onExpiry: alert('We have lift off!')
						});
					}
				}
				else {
					$('.timer').countdown('resume');
				}
				started = 1;
				$.sendHistory(w.workoutId, 'play');
			}
		}
	}

	var pause = {
		tag: 'button',
		cls: 'cbtn',
		text: 'pause',
		on: {
			click: function() {
				$.sendHistory(w.workoutId, 'pause');
				$('.timer').countdown('pause');
			}
		}
	}

	var stop = {
		tag: 'button',
		cls: 'cbtn',
		text: 'stop',
		on: {
			click: function() {
				$.sendHistory(w.workoutId, 'stop');
				$('.timer').countdown('destroy');
				$('.timer').text(originalTime);
				started = 0;
			}
		}
	}

	var restart = {
		tag: 'button',
		cls: 'cbtn',
		text: 'restart',
		on: {
			click: function() {
				$.sendHistory(w.workoutId, 'restart');
			}
		}
	}

	var content = {
		cls: 'content',
		items: [
			{
				tag: 'h3',
				text: w.name
			},
			timer,
			audio,
			play,
			stop,
			pause,
			restart
		]
	}

	$(container).create({
		cls: 'container',
		items: [
			{
				cls: 'container__inner',
				items: [
					head,
					content
				]
			}
		]
	})

	$(container).create($.footer());

	// Call init callback when module is ready to be shown
	initCallback(this);

});