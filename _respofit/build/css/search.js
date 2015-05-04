/**
 * Home dialog module
 *
 * @author Pavel Pirogov
 */
$.registerModule('search', function(container, data, initCallback) {
	// module private variables


	// module public variables

	var workouts = [];
	var q = data.query;

	// module private methods


	// module public methods
	/**
	 * For calls from other modules
	 * @param	{String}	subject
	 * @param 	{Object}	data
	 */
	this.call = function (subject, data) {

	};
	/**
	 * Will be fired before module is closed
	 * @returns		{Boolean}	if returns false - module will not close
	 */
	this.onDestroy = function() {
		return true;
	};
	
	_workouts = $.get('workouts');

	$.each(_workouts, function(index, workout){
		workouts.push($.createWorkout(workout));
	});

	function searchWorkouts(query) {
		$(".workouts .workout").each(function(){
			if ($(this).find('h3').text().search(new RegExp(query, "i")) < 0) {
				$(this).fadeOut();
			} else {
				$(this).fadeIn();
			}
		});
	}

	searchInput = {
		tag: 'input',
		cls: 'search__input',
		id: 'search',
		attr: {
			type: 'text',
			value: data.query
		},
		on: {
			keyup: function(e) {
				searchWorkouts($(this).val());
			}
		}
	}

	$(container).create($.header({
		menu: true 
	}));

	var head = $(container).create($.head({
		title: 'Meine Ubungen'
	}));

	var content = {
		cls: 'content',
		items: [
			{
				cls: 'workouts',
				items: workouts
			}
		]
	}

	$(container).create({
		cls: 'container',
		items: [
			{
				cls: 'container__inner',
				items: [
					head,
					{
						cls: 'search',
						items: [
							searchInput,
							{
								tag: 'a',
								cls: 'search__close',
								on: {
									click: function() {
										$.openModule('plan');
									}
								}
							}
						]
					},
					content
				]
			}
		]
	})

	$(container).create($.footer());

	// Call init callback when module is ready to be shown
	initCallback(this);

	if(q) {
		searchWorkouts(q);
	}

});