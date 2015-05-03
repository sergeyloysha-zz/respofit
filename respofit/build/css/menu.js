/**
 * Home dialog module
 *
 * @author Pavel Pirogov
 */
$.registerModule('menu', function(container, data, initCallback) {
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

	// module logic

	$.loadNotificationCount();
	count = $.get('notificationsCount');

	notifications_link = {
		tag: 'a',
		cls: 'menu_link',
		text: $.message('menu.item.new_messages'),
		on: {
			click: function() {
				$.openModule('messages');
			}
		}
	}

	if(count > 0){
		notifications_link.text = 'Есть новые сообщения'
	}
	else {
		notifications_link.text = 'Нет новых сообщений'
	}

	$(container).create($.header());

	var menu = {
		tag: 'ul',
		cls: 'menu menu_clear',
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
						on: {
							click: function() {
								$.openModule('categories');
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
						text: $.message('menu.item.history'),
						items: [
							{
								tag: 'i',
								cls: 'menu__icon menu__icon_history'
							}
						],
						on: {
							click: function() {
								$.openModule('home');
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
						text: $.message('menu.item.extras'),
						items: [
							{
								tag: 'i',
								cls: 'menu__icon menu__icon_heart'
							}
						],
						on: {
							click: function() {
								$.openModule('home');
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
			},
			{
				tag: 'li',
				cls: 'menu__item',
				items: [
					{
						tag: 'a',
						cls: 'menu__link',
						text: $.message('menu.item.export'),
						items: [
							{
								tag: 'i',
								cls: 'menu__icon menu__icon_calendar'
							}
						],
						on: {
							click: function() {
								$.openModule('export');
							}
						}
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
					notifications_link,
					menu
				]
			}
		]
	})

	$(container).create($.footer());

	// Call init callback when module is ready to be shown
	initCallback(this);

});