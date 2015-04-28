/**
 * Home dialog module
 *
 * @author Pavel Pirogov
 */
$.registerModule("desktop_update", function(container, data, initCallback) {
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
		$.callModule("home", "count", 1);
		return true;
	};

	// module logic

	var content = {
		cls: 'content',
		items: [
			{
				tag: 'h2',
				cls: 'content__headline',
				text: 'Ihre trainingsplane werden aktualisiert, bitte warten Sie...'
			},
			{
				tag: 'a',
				cls: 'content__logo'
			},
			{
				tag: 'a',
				cls: 'btn btn_large btn_red',
				text: 'abbrechen'
			}
		]
	}

	var wrapper = {
		cls: 'wrapper',
		items: [
			content
		]
	}

	$(container).create({
		cls: 'page update',
		items: [
			{
				cls: 'screen',
				items: [{
					cls: 'screen__mask'
				}]
			},
			wrapper
		]
	})

	// Call init callback when module is ready to be shown
	initCallback(this);

});