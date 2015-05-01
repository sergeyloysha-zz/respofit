/**
 * Provides base components
 *
 * @author Pavel Pirogov
 */
(function($) {
	/**
	 * Create HTML element
	 *
	 * @param	{Object}	config
	 * @returns	{Object}	HTML element
	 */
	$.fn.create = function(config) {
		config = $.extend({
			tag: 'DIV',
			append: true
		}, config || {});

		var container = this;
		var i;
		var component = document.createElement(config.tag);
		var wrapped = $(component);
		for (i in config) {
			if(i != "cls" && i != "attr" && i != "on" && i != "append" && i != "items") {
				if (config.hasOwnProperty(i)) {
					"function" == typeof wrapped[i] ? wrapped[i](config[i]) : null;
				}
			}
		}
		if (config.cls) {
			wrapped.addClass(config.cls);
		}
		if (config.attr) {
			for (i in config.attr) {
				if(config.attr.hasOwnProperty(i)) {
					wrapped.attr(i, config.attr[i]);
				}
			}
		}
		if (config.on) {
			for (i in config.on) {
				if(config.on.hasOwnProperty(i)) {
					wrapped.on(i, config.on[i]);
				}
			}
		}
		if (config.items) {
			for (i = 0; i < config.items.length; i++) {
				var item = config.items[i];
				if ("object" == typeof (item) && "[object Object]" == String(item) && undefined === item.length) {
					item.append = true;
					$(component).create(item);
				}
				else if ("array" == typeof (item) && "[object Array]" == String(item) && 0 < item.length) {
					item.append = true;
					for (var j = 0; j < item.length; j++)
						$(component).create(item[j]);
				}
				else {
					wrapped.append(item);
				}
			}
		}
		config.append ? container.append(component) : null;
		return component;
	};
	/**
	 * Render mask
	 *
	 * @param	{Object}	config
	 * @returns	{Object}	HTML Element
	 */
	$.mask = function(config) {
		config = $.extend({
			cls: ''
		}, config || {});

		var component = $('body').create({
			tag: 'DIV',
			cls: 'mask ' + config.cls
		});
		$(component).show();
		return component;
	};
	/**
	 * Get object centered
	 *
	 * @returns	{Object}
	 */
	$.fn.center = function() {
		this.css("margin-top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
		this.css({
			"margin-left": "auto",
			"margin-right": "auto"
		});
		return this;
	};
	/**
	 * Render modal window
	 *
	 * @param	{Object}	config
	 * @returns	{Object}	with close method
	 */
	$.modal = function(config) {
		config = $.extend({
			cls: '',
			clear: false,
			width: $.CONST('DEFAULT_MODAL_WIDTH'),
			headerText: '&nbsp;',
			autoCenter: false,
			externalClickClose: true // if true click on mask closes window
		}, config || {});

		var mask = $.mask();
		var component = $(mask).create({
			tag: 'DIV',
			attr: {
				tabindex: '0'
			},
			cls: 'modal ' + config.cls,
			width: config.width,
			height: config.height
		});
		component.mask = mask;
		$(component).show();
		/**
		 * Close modal window and initialize onBeforeClose event
		 */
		component.close = function() {
			if (config.onBeforeClose && config.onBeforeClose() || !config.onBeforeClose) {
				$(mask).remove();
			}
		};
		/**
		 * Close modal window
		 */
		component.destroy = function() {
			$(mask).remove();
		};
		if (config.externalClickClose) {
			$(mask).click(function(e) {
				if (e.target === this) {
					component.close();
				}
			});
		}
		var headerClose = $(component).create({
			tag: 'DIV',
			cls: 'modal-header-close',
			on: {
				click: function() {
					component.close();
				}
			}
		});
		component.headerText = $(component).create({
			tag: 'DIV',
			cls: 'modal-header-text',
			html: config.headerText
		});
		component.content = $(component).create({
			tag: 'DIV',
			cls: 'modal-content'
		});
		var footer = $(component).create({
			tag: 'DIV',
			cls: 'modal-footer'
		});
		if (config.autoCenter) {
			$(window).resize(function() {
				$(component).center();
			});
			$(component).resize(function() {
				$(component).center();
			});
		}
		$(component).on('navigationChanged', component.close);
		$(component).keyup(function(e) {
			if (e.keyCode == 27) {
				component.close();
			}
		});
		$(headerClose).focus();
		return component;
	};
	/**
	 * Render alert modal window
	 *
	 * @param	{Object}	config
	 * @returns	{Object}
	 */
	$.alertTextModal = function(config) {
		var component = $.modal(config);
		var okButton = $(component).find('.modal-content').create({
			tag: 'input',
			cls: 'button button-center',
			attr: {
				type: 'button',
				value: config.btntext ? config.btntext : $.message('button.ok')
			},
			on: {
				click: function() {
					if (config.callback) {
						config.callback();
					}
					component.close();
				}
			}
		});
		$(okButton).focus();
		$(component).center();
		return component;
	};

	$.header = function(config) {
		config = $.extend({
			export: false,
			menu: false,
			logout: true
		}, config || {});

		var exp,menu,logout;

		var link_export = (
			{
				tag: 'li',
				cls: 'header__menu-item hm',
				items: [
					{
						tag: 'span',
						html: 'Trainingsplan<br/>exportieren'
					}
				]
			},
			{
				tag: 'li',
				cls: 'header__menu-item',
				items: [
					{
						tag: 'a',
						cls: 'header__menu-link header__menu-link_calendar',
						on: {
							click: function() {
								$.openModule('export');
							}
						}
					}
				]
			})

		var link_menu = {
			tag: 'li',
			cls: 'header__menu-item',
			items: [
				{
					tag: 'a',
					cls: 'header__menu-link header__menu-link_menu',
					on: {
						click: function() {
							if($(this).hasClass('active')) {
								$(this).removeClass('active');
							}
							else {
								$(this).addClass('active');
							}
						}
					}
				},
				{
					tag: 'ul',
					cls: 'dropdown',
					items: [
						{
							tag: 'li',
							cls: 'menu__item',
							items: [
								{
									tag: 'a',
									cls: 'menu__link',
									text: $.message('menu.item.plan'),
									items: [
										{
											tag: 'i',
											cls: 'menu__icon menu__icon_time'
										}
									],
									on: {
										click: function() {
											$.openModule('plan');
										}
									}
								}
							]
						},
						{
							tag: 'li',
							cls: 'menu__item',
							items: [
								{
									tag: 'a',
									cls: 'menu__link',
									text: $.message('menu.item.exercises'),
									items: [
										{
											tag: 'i',
											cls: 'menu__icon menu__icon_exercises'
										}
									],
								}
							]
						},
						{
							tag: 'li',
							cls: 'menu__item',
							items: [
								{
									tag: 'a',
									cls: 'menu__link',
									text: $.message('menu.item.history'),
									items: [
										{
											tag: 'i',
											cls: 'menu__icon menu__icon_history'
										}
									],
								}
							]
						},
						{
							tag: 'li',
							cls: 'menu__item',
							items: [
								{
									tag: 'a',
									cls: 'menu__link',
									text: $.message('menu.item.extras'),
									items: [
										{
											tag: 'i',
											cls: 'menu__icon menu__icon_heart'
										}
									],
								}
							]
						},
						{
							tag: 'li',
							cls: 'menu__item',
							items: [
								{
									tag: 'a',
									cls: 'menu__link',
									text: $.message('menu.item.settings'),
									items: [
										{
											tag: 'i',
											cls: 'menu__icon menu__icon_settings'
										}
									],
									on: {
										click: function() {
											$.openModule('settings');
										}
									}
								}
							]
						}
					]
				}
			]
		}

		var link_logout = ({
			tag: 'li',
			cls: 'header__menu-item',
			items: [
				{
					tag: 'a',
					cls: 'header__menu-link header__menu-link_logout',
					on: {
						click: function() {
							$.logout()
						}
					}
				}
			]
		})

		if (config.export) {
			console.log('added export');
			exp = link_export;
		}

		if (config.menu) {
			console.log('added menu');
			menu = link_menu;
		}

		if (config.logout) {
			console.log('added logout');
			logout = link_logout;
		}

		var component = {
			cls: 'header',
			items: [
				{
					cls: 'header__inner',
					items: [
						{
							tag: 'a',
							cls: 'header__logo',
							on: {
								click: function() {
									$.openModule('menu');
								}
							}
						},
						{
							tag: 'ul',
							cls: 'header__menu right',
							items: [
								exp,
								menu,
								logout
							]
						}
					]
				}
			]
		};

		return component
	}

	$.head = function(config) {
		config = $.extend({
			back: true,
			title: 'undefined'
		}, config || {});

		var back_button = {
			cls: 'head__col',
			items: [
				{
					tag: 'a',
					cls: 'head__button-back',
					html: 'ZURUCK<i class="head__button-back_arrow"></i>',
					on: {
						click: function() {
							$.closeActiveModule()
						}
					}
				}
			]
		}

		if (config.back) {
			console.log('added back');
			button = back_button;
		}

		var component = {
			cls: 'head',
			items: [
				button,
				{
					cls: 'head__col',
					items: [
						{
							tag: 'h2',
							cls: 'head__title right',
							text: config.title
						}
					]
				}
			]
		};

		return component
	}

	$.footer = function() {

		var component = {
			cls: 'footer',
			items: [
				{
					cls: 'footer__inner',
					items: [
						{
							cls: 'footer__links'
						}
					]
				}
			]
		};

		return component
	}
})(jQuery);
