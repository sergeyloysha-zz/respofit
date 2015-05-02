/**
 * Provides constant variables
 *
 * @author Pavel Pirogov
 */
(function($) {
	/**
	 * Get constant value by dot separated path
	 *
	 * @param	{String}	propPath
	 * @returns	{String}
	 */
	$.CONST = function(propPath) {
		return $.getObjectProperty(constants, propPath);
	};
	var constants = {
		DEBUG: true,
		COOKIE: {
			AUTH: {
				NAME: "auth_user",
				EXPIRES: 30,
			}
		},
		REST: {
			USER: {
				LOGIN: {
					POST: "j_spring_security_check"
				},

				REGISTRATION: {
					POST: "registrations"
				},

				LOGOUT: {
					GET: "j_spring_security_logout"
				},

				SELF: {
					GET: "currentuser"
				}
			},

			IMAGES: {
				GET: "images/"
			},

			MESSAGES: {
				ENGLISH: {
					GET: "js/client/json/messages_en.json"
				},
				GERMAN: {
					GET: "js/client/json/messages_de.json"
				}
			},

			NOTIFICATIONS: {
				GET: "notifications.do",
				COUNT: {
					GET: "notificationCount.do"
				}
			},

			CLIENT: {
				GET: "client.do"
			},

			SETTINGS: {
				GET: "settings.do",
				POST: "settings.do",
				PASSWORD: {
					POST: "clientPassword.do"
				}
			}

		},
		LANGUAGES: {
			ENGLISH: "ENGLISH",
			GERMAN: "GERMAN"
		},
		GOLDEN_SECTION: 0.381966011250105,
		DEFAULT_MODAL_WIDTH: '80%'
	};
})(jQuery);