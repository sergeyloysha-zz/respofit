/**
 * Home dialog module
 *
 * @author Pavel Pirogov
 */
$.registerModule('category', function(container, data, initCallback) {
	// module private variables


	// module public variables

	var workouts = [];


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

	categoryName = data.category.categoryName;
	categoryId = data.category.categoryId;

	_workouts = $.get('workouts');

	$.each(_workouts, function(index, workout){
		console.log(workout.categoryName);
	});

	$(container).create($.header({
		menu: true 
	}));

	var head = $(container).create($.head({
		title: 'Meine Ubungen'
	}));

	var category = {
		cls: 'search',
		items: [
			{
				tag: 'h3',
				cls: 'search__title left',
				text: 'Kategorie'
			},
			{
				cls: 'search__category',
				items: [
					{
						tag: 'a',
						cls: 'search__category-close',
						on: {
							click: function() {
								$.closeActiveModule();
							}
						}
					},
					{
						tag: 'span',
						text: $.message(category.categoryName)
					}
				]
			}
		]
	}

	var content = {
		cls: 'content',
		items: [
			{
				cls: 'grid',
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