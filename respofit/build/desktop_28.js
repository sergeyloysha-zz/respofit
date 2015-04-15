/**
 * Home dialog module
 *
 * @author Pavel Pirogov
 */
$.registerModule("desktop_24", function(container, data, initCallback) {
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

	$(container).create({
		cls: "page start",
		items: {
			cls: "screen",
			items: {
				cls: "screen__mask"
			}
		}
	})

	// Call init callback when module is ready to be shown
	initCallback(this);

});