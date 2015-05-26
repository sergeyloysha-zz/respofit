/**
 * Home dialog module
 *
 * @author Pavel Pirogov
 */
$.registerModule('workout_details', function(container, data, initCallback) {
	// module private variables


	// module public variables

	var workout = data.workout;

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
	 * Will be fired before module is close
	 * @returns		{Boolean}	if returns false - module will not close
	 */
	this.onDestroy = function() {
		return true;
	};

	$(container).create($.header({
		menu: true
	}));

	var head = $(container).create($.head({
		title: $.message('Workout Details')
	}));

	var category = {
		cls: 'search',
		items: [
			{
				tag: 'h3',
				cls: 'search__title left',
				text: $.message('category')
			},
			{
				cls: 'search__category',
				items: [
					{
						tag: 'span',
						text: $.message(workout.categoryName)
					}
				]
			}
		]
	}

	var content = {
		cls: 'content',
		items: [
			{
				items: [
					{
						tag: 'h3',
						text: workout.name
					},
					{
						tag: 'video',
						attr: {
							src: workout.videoUrl
						}
					},
					{
						html: workout.description
					}
				]
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
					category,
					content
				]
			}
		]
	})

	$(container).create($.footer());

	

	// Call init callback when module is ready to be shown
	initCallback(this);

});