/**
 * Home dialog module
 *
 * @author Pavel Pirogov
 */
$.registerModule("desktop_40", function(container, data, initCallback) {
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

	/*
		Dropdown: header item
	*/

	var dropdown = {
		tag: 'ul',
		cls: 'dropdown',
		items: [
			{
				tag: 'li',
				cls: 'dropdown__item',
				items: [
					{
						tag: 'a',
						cls: 'dropdown__link',
						text: 'Mein Trainingsplan',
						items: [
							{
								tag: 'i',
								cls: 'dropdown__icon dropdown__icon_time'
							}
						],
					}
				]
			},
			{
				tag: 'li',
				cls: 'dropdown__item',
				items: [
					{
						tag: 'a',
						cls: 'dropdown__link',
						text: 'Ubungen',
						items: [
							{
								tag: 'i',
								cls: 'dropdown__icon dropdown__icon_headphones'
							}
						]
					}
				]
			},
			{
				tag: 'li',
				cls: 'dropdown__item',
				items: [
					{
						tag: 'a',
						cls: 'dropdown__link',
						text: 'Training Historie',
						items: [
							{
								tag: 'i',
								cls: 'dropdown__icon dropdown__icon_calendar'
							}
						]
					}
				]
			},
			{
				tag: 'li',
				cls: 'dropdown__item',
				items: [
					{
						tag: 'a',
						cls: 'dropdown__link',
						text: 'Extras',
						items: [
							{
								tag: 'i',
								cls: 'dropdown__icon dropdown__icon_heart'
							}
						]
					}
				]
			},
			{
				tag: 'li',
				cls: 'dropdown__item',
				items: [
					{
						tag: 'a',
						cls: 'dropdown__link',
						text: 'Einstellungen',
						items: [
							{
								tag: 'i',
								cls: 'dropdown__icon dropdown__icon_gear'
							}
						]
					}
				]
			},
			{
				tag: 'li',
				cls: 'dropdown__item',
				items: [
					{
						tag: 'a',
						cls: 'dropdown__link',
						text: 'Narichrichten',
						items: [
							{
								cls: 'dropdown__icon dropdown__icon_label'
							}
						]
					}
				]
			}
		]
	}

	/*
		Header
	*/

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
										text: 'Trainingsplan<br/>exportieren'
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
									},
									dropdown
								]
							}
						]
					}
				]
			}
		]
	})

	/*
		Intro
	*/

	$(container).create({
		cls: 'intro',
		items: [
			{
				cls: 'image',
				items: [
					{
						tag: 'img',
						cls: 'image__preview',
						attr: {
							src: 'images/40.jpg'
						}
					}
				]
			}
		]
	})

	/*
		Head
	*/

	var head = {
		cls: 'head',
		items: [
			{
				cls: 'head__col',
				items: [
					{
						tag: 'a',
						cls: 'head__button-back',
						text: 'ZURUCK',
						attr: {
							href: '#'
						},
						items: [
							{
								tag: 'i',
								cls: 'head__button-back_arrow'
							}
						]
					}
				]
			},
			{
				cls: 'head__col'
			},
			{
				cls: 'head__col',
				items: [
					{
						tag: 'h2',
						cls: 'head__title right',
						text: 'Einstellungen',
					}
				]
			}
		]
	}

	var content = {
		cls: 'content',
		items: [
			{
				cls: 'grid grid_border',
				items: [
					{
						cls: 'grid__col grid__col_two left',
						items: [
							{
								tag: 'fieldset',
								items: [
									{
										tag: 'input',
										cls: 'field',
										attr: {
											placeholder: 'Registrierungsnummer',
											type: 'text'
										}
									},
									{
										tag: 'a',
										cls: 'field_info',
										text: 'i'
									}
								]
							},
							{
								tag: 'fieldset',
								items: [
									{
										tag: 'input',
										attr: {
											placeholder: 'Muller Schmidt',
											type: 'text'
										}
									}
								]
							},
							{
								tag: 'fieldset',
								items: [
									{
										tag: 'select',
										items: [
											{
												tag: 'option',
												text: 'Buro'
											}
										]
									}
								]
							}
						]
					},
					{
						cls: 'grid__col grid__col_two right',
						items: [
							{
								tag: 'fieldset',
								items: [
									{
										cls: 'switch',
										items: [
											{
												tag: 'span',
												text: 'Begleitende Musik (default)'
											},
											{
												tag: 'input',
												cls: 'switch__toggle',
												attr: {
													id: 'switch1',
													type: 'checkbox'
												}
											},
											{
												tag: 'label',
												cls: 'right',
												attr: {
													for: 'switch1'
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
										cls: 'switch',
										items: [
											{
												tag: 'span',
												text: 'Neue Nachrichten'
											},
											{
												tag: 'input',
												cls: 'switch__toggle',
												attr: {
													id: 'switch2',
													type: 'checkbox'
												}
											},
											{
												tag: 'label',
												cls: 'right',
												attr: {
													for: 'switch2'
												}
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	}

	/*
		Container
	*/

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

	/*
		Footer
	*/

	$(container).create({
		cls: 'footer',
		items: [
			{
				cls: 'footer__inner',
				items: [
					{
						cls: 'footer__links',
						items: [
							{
								tag: 'a',
								cls: 'footer__link footer__link_facebook',
								attr: {
									href: '#'
								}
							},
							{
								tag: 'a',
								cls: 'footer__link footer__link_twitter',
								attr: {
									href: '#'
								}
							},
							{
								tag: 'a',
								cls: 'footer__link footer__link_instagram',
								attr: {
									href: '#'
								}
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