/**
 * Home dialog module
 *
 * @author Pavel Pirogov
 */
$.registerModule('search', function(container, data, initCallback) {
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

	var head = {
		cls: 'head',
		items: [
			{
				cls: 'head__col',
				items: [
					{
						tag: 'a',
						cls: 'head__button-back',
						html: 'ZURUCK<i class="head__button-back_arrow"></i>'
					}
				]
			},
			{
				cls: 'head__col',
				items: [
					{
						tag: 'h2',
						cls: 'head__title right',
						text: 'Trainingsplan'
					}
				]
			}
		]
	}

	var content = {
		cls: 'content v-block_grid',
		items: [
			{
				cls: 'grid',
				items: [
					{
						cls: 'grid__col grid__col_two',
						items: [
							{
								cls: 'v-block',
								items: [
									{
										tag: 'a',
										cls: 'v-block__preview',
										items: [
											{
												cls: 'v-block__play',
											},
											{
												cls: 'v-block__mask'
											},
											{
												tag: 'img',
												cls: 'v-block__image',
												attr: {
													src: 'images/test1.png'
												}
											}
										]
									},
									{
										cls: 'v-block__info',
										items: [
											{
												cls: 'v-block__time',
												items: [
													{
														tag: 'i',
														cls: 'v-block__time_icon'
													},
													{
														tag: 'span',
														text: '08:40, Minuten lang'
													}
												]
											},
											{
												tag: 'h3',
												text: 'Leigestutzen'
											},
											{
												tag: 'p',
												text: 'Millionen Menschen in Deutschland schwitzen im Fitness-Studio fur den perfekten Korper...'
											},
											{
												tag: 'a',
												cls: 'btn btn_rounded btn_green',
												text: 'Details'
											}
										]
									}
								]
							}
						]
					},
					{
						cls: 'grid__col grid__col_two',
						items: [
							{
								cls: 'v-block',
								items: [
									{
										tag: 'a',
										cls: 'v-block__preview',
										items: [
											{
												cls: 'v-block__play',
											},
											{
												cls: 'v-block__mask'
											},
											{
												tag: 'img',
												cls: 'v-block__image',
												attr: {
													src: 'images/test2.png'
												}
											}
										]
									},
									{
										cls: 'v-block__info',
										items: [
											{
												cls: 'v-block__time',
												items: [
													{
														tag: 'i',
														cls: 'v-block__time_icon'
													},
													{
														tag: 'span',
														text: '08:40, Minuten lang'
													}
												]
											},
											{
												tag: 'h3',
												text: 'Leigestutzen'
											},
											{
												tag: 'p',
												text: 'Millionen Menschen in Deutschland schwitzen im Fitness-Studio fur den perfekten Korper...'
											},
											{
												tag: 'a',
												cls: 'btn btn_rounded btn_green',
												text: 'Details'
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				cls: 'grid',
				items: [
					{
						cls: 'grid__col grid__col_two',
						items: [
							{
								cls: 'v-block',
								items: [
									{
										tag: 'a',
										cls: 'v-block__preview',
										items: [
											{
												cls: 'v-block__play',
											},
											{
												cls: 'v-block__mask'
											},
											{
												tag: 'img',
												cls: 'v-block__image',
												attr: {
													src: 'images/test3.png'
												}
											}
										]
									},
									{
										cls: 'v-block__info',
										items: [
											{
												cls: 'v-block__time',
												items: [
													{
														tag: 'i',
														cls: 'v-block__time_icon'
													},
													{
														tag: 'span',
														text: '08:40, Minuten lang'
													}
												]
											},
											{
												tag: 'h3',
												text: 'Leigestutzen'
											},
											{
												tag: 'p',
												text: 'Millionen Menschen in Deutschland schwitzen im Fitness-Studio fur den perfekten Korper...'
											},
											{
												tag: 'a',
												cls: 'btn btn_rounded btn_green',
												text: 'Details'
											}
										]
									}
								]
							}
						]
					},
					{
						cls: 'grid__col grid__col_two',
						items: [
							{
								cls: 'v-block',
								items: [
									{
										tag: 'a',
										cls: 'v-block__preview',
										items: [
											{
												cls: 'v-block__play',
											},
											{
												cls: 'v-block__mask'
											},
											{
												tag: 'img',
												cls: 'v-block__image',
												attr: {
													src: 'images/test4.png'
												}
											}
										]
									},
									{
										cls: 'v-block__info',
										items: [
											{
												cls: 'v-block__time',
												items: [
													{
														tag: 'i',
														cls: 'v-block__time_icon'
													},
													{
														tag: 'span',
														text: '08:40, Minuten lang'
													}
												]
											},
											{
												tag: 'h3',
												text: 'Leigestutzen'
											},
											{
												tag: 'p',
												text: 'Millionen Menschen in Deutschland schwitzen im Fitness-Studio fur den perfekten Korper...'
											},
											{
												tag: 'a',
												cls: 'btn btn_rounded btn_green',
												text: 'Details'
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

	$(container).create({
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
	})

	// Call init callback when module is ready to be shown
	initCallback(this);

});