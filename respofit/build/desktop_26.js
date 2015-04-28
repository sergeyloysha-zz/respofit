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
		cls: 'page login',
		items: [
			{
				cls: 'screen',
				items: [{
					cls: 'screen__mask'
				}]
			},
			{
				cls: 'wrapper',
				items: [
					{
						cls: 'content',
						items: [
							{
								tag: 'h2',
								cls: 'content__headline',
								text: 'Willkomen bei der'
							},
							{
								cls: 'content__bottom',
								items: [
									{
										tag: 'a',
										cls: 'content__logo',
										attr: {
											href: '#'
										}
									},
									{
										tag: 'form',
										items: [
											{
												tag: 'fieldset',
												items: [
													{
														tag: 'input',
														attr: {
															type: 'text',
															placeholder: 'Benutzername'
														}
													}
												]
											},
											{
												tag: 'fieldset',
												items: [
													{
														tag: 'input',
														attr: {
															type: 'password',
															placeholder: 'Passwort'
														}
													}
												]
											},
											{
												tag: 'fieldset',
												items: [
													{
														cls: 'checkbox__field',
														items: [
															{
																tag: 'input',
																cls: 'checkbox',
																attr: {
																	id: 'switch',
																	type: 'checkbox'
																}
															},
															{
																tag: 'label',
																cls: 'left',
																attr: {
																	for: 'switch'
																}
															},
															{
																tag: 'label',
																text: 'Eingaben speichern',
																attr: {
																	for: 'switch'
																}
															}
														]
													}
												]
											},
											{
												tag: 'fieldset',
												items: [
													{
														tag: 'a',
														cls: 'login__bottom_btn btn btn_medium btn_green',
														text: 'Start',
														attr: {
															href: '#'
														}
													}
												]
											}
										]
									},
									{
										tag: 'a',
										cls: 'centered',
										text: 'Noch nicht registriert?',
										attr: {
											href: '#'
										}
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