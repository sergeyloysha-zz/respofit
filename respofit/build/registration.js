/**
 * Sample dialog module
 *
 * @author Pavel Pirogov
 */
$.registerModule("login", function(container, data, initCallback) {
	// module private variables

	// module public variables

	// module private methods

	// module public methods
	/**
	 * For calls from other modules
	 * @param    {String}    subject
	 * @param    {Object}    data
	 */
	this.call = function(subject, data) {

	};
	/**
	 * Will be fired before module is closed
	 * @returns        {Boolean}    if returns false - module will not close
	 */
	this.onDestroy = function() {
		return true;
	};
	this.dontAddToStack = true; // prevents go back to this module

	var login = {
		tag: 'input',
		attr: {
			name: 'j_username',
			type: 'text',
			placeholder: 'Benutzername'
		}
	};

	var password = {
		tag: 'input',
		attr: {
			name: 'j_password',
			type: 'password',
			placeholder: 'Passwort'
		}
	};

	var asd = {
		tag: 'form'
	};

	var form = {
		tag: 'form',
		items: [
			{
				tag: 'fieldset',
				items: [
					login
				]
			},
			{
				tag: 'fieldset',
				items: [
					password
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
						text: $.message("button.login"),
						on: {
							click: function() {
								var formData = $(form).getValues();
								$.xhr({
									type: "POST",
									data: formData,
									headers: {
										"Content-Type": "application/x-www-form-urlencoded"
									},
									url: $.CONST("REST.USER.LOGIN.POST"),
									success: function() {
										$.getSelf(function(user) {
											if (user && user.id) {
												$.openModule("home");
											}
										});
									},
									error: function(response) {
										alert(response);
									}
								});
							}
						}
					}
				]
			}
		]
	};

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
									form,
									{
										tag: 'a',
										cls: 'centered',
										text: $.message("button.registration"),
										on: {
											click: function() {
												$.openModule("registration");
											}
										}
									}
								]
							}
						]
					}
				]
			}
		]
	});

	// Call init callback when module is ready to be shown
	initCallback(this);

});