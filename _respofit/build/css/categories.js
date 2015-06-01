/**
 * Home dialog module
 *
 * @author Pavel Pirogov
 */
$.registerModule('categories', function(container, data, initCallback) {
	// module private variables


	// module public variables


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

	this.onShow = function() {
		$('input.search__input').val('');
	}

	// module logic

	var _categories = $.get('categories');

	var categories = [];

	$.each(_categories, function(index, category){
		categories.push($.createCategory(category));
	});

	$(container).create($.header({
		menu: true 
	}));

	var head = $(container).create($.head({
		title: $.message('workouts.title') 
	}));

	var search = {
		tag: 'input',
		cls: 'search__input',
		id: 'search',
		attr: {
			type: 'text',
			placeholder: $.message('workouts.search'),
			value: ''
		},
		on: {
			keypress: function(e) {
				if(e.which == 13) {
					$.openModule('search', {'query': $(this).val()});
				}
			}
		}
	}

	$(container).create({
		cls: 'container',
		items: [
			{
				cls: 'container__inner',
				items: [
					head,
					{
						cls: 'search search_break',
						items: [
							search
						]
					},
					{
						tag: 'ul',
						cls: 'menu menu_clear',
						items: categories
					}
				]
			}
		]
	})

	$(container).create($.footer());

	// Call init callback when module is ready to be shown
	initCallback(this);

});