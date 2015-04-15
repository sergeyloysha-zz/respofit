/**
 * Home dialog module
 *
 * @author Pavel Pirogov
 */
$.registerModule("desktop_27", function(container, data, initCallback) {
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
		cls: 'header',
		items: [
			{
				cls: 'header__inner',
				items: [
					{
						tag: 'a',
						cls: 'header__logo'
					},
					{
						tag: 'ul',
						cls: 'header__menu right',
						items: [
							{
								tag: 'li',
								cls: 'header__menu-item hm',
								items: [
									{
										tag: 'span',
										text: 'Trainingsplan<br>exportieren'
									}
								]
							},
							{
								tag: 'li',
								cls: 'header__menu-item',
								items: [
									{
										tag: 'a',
										cls: 'header__menu-link header__menu-link_calendar'
									}
								]
							},
							{
								tag: 'li',
								cls: 'header__menu-item',
								items: [
									{
										tag: 'a',
										cls: 'header__menu-link header__menu-link_menu'
									}
								]
							}
						]
					}
				]
			}
		]
	})

	// Call init callback when module is ready to be shown
	initCallback(this);

});