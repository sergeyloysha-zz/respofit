/**
 * Provides modules handling methods
 *
 * @author Pavel Pirogov
 */
(function($) { //TODO: handle hash change (back button)
	var modules = {}, activeModule, modulesContainer, activeModules = [], modulesStack = [];
	/**
	 * Activate module
	 *
	 * @param    {Object}    moduleInstance
	 */
	var activateModule = function(moduleInstance) {
		var perviousModule = activeModule;
		activeModule = moduleInstance;
		perviousModule ? $(perviousModule.container).hide() : null;
		$(activeModule.container).show();
	};
	/**
	 * Get module
	 *
	 * @param    {String}    moduleName
	 * @returns    {Object}
	 */
	var getModule = function(moduleName) {
		return modules[moduleName];
	};
	/**
	 * Get active module index by name
	 * @param    {String}    moduleName
	 * @returns    {Number}
	 */
	var getActiveModuleIndex = function(moduleName) {
		var foundIndex = -1;
		for (var i = 0; i < activeModules.length; i++) {
			if (activeModules[i].name == moduleName) {
				foundIndex = i;
				break;
			}
		}
		return foundIndex;
	};
	/**
	 * Register module
	 *
	 * @param    {String}    moduleName
	 * @param    {Function}    module
	 */
	$.registerModule = function(moduleName, module) {
		modules[moduleName] = module;
	};
	/**
	 * Open module
	 *
	 * @param    {String}    moduleName
	 * @param    {Object}    data
	 * @returns    {Object}
	 */
	$.openModule = function(moduleName, data) {
		if (!modulesContainer) {
			modulesContainer = $('body').create({
				cls: "modules-container"
			});
		}
		var module = getModule(moduleName);
		var moduleInstance = $.getActiveModule(moduleName);
		if(activeModule && !activeModule.dontAddToStack) {
			modulesStack.push(activeModule);
		}
		if (module) {
			window.location.hash = "#" + moduleName;
			if(moduleInstance) {
				moduleInstance.call("open", data);
				activateModule(moduleInstance);
			}
			else {
				var container = $(modulesContainer).create({
					cls: "module-container module-" + moduleName
				});
				new module(container, data, function(moduleInstance) {
					activateModule(moduleInstance);
					moduleInstance.container = container;
					moduleInstance.name = moduleName;
					activeModules.push(moduleInstance);
				});
			}
		}
	};
	/**
	 * Close active module
	 */
	$.closeActiveModule = function() {
		var moduleIndex = getActiveModuleIndex(activeModule.name);
		if (-1 != moduleIndex && modulesStack.length > 0) {
			if (activeModule.onDestroy && activeModule.onDestroy() || !activeModule.onDestroy) {
				$(activeModule.container).remove();
				activeModules.splice(moduleIndex, 1);
				var previousModule = modulesStack.splice(modulesStack.length - 1, 1)[0];
				// if module have "back to" configured 
				if (activeModule.backToModule) {
					var module = getModule(activeModule.backToModule);
					if (module && !module.dontAddToStack) {
						previousModule = module;
					}
				}
				activeModule = null;
				activateModule(previousModule);
			}
		}
	};
	/**
	 * Get active module by name
	 * @param    {String}    moduleName
	 * @returns    {Object}
	 */
	$.getActiveModule = function(moduleName) {
		var found;
		for (var i = 0; i < activeModules.length; i++) {
			if (activeModules[i].name == moduleName) {
				found = activeModules[i];
				break;
			}
		}
		return found;
	};
	/**
	 * Call module
	 *
	 * @param    {String}    moduleName
	 * @param    {String}    subject
	 * @param    {Object}    data
	 */
	$.callModule = function(moduleName, subject, data) {
		var module = $.getActiveModule(moduleName);
		if (module && module.call) {
			return module.call(subject, data);
		}
	}

	/**
	 * Handle browser 'back' button
	 */
	$(window).on('navigate', function (event, data) {
		var direction = data.state.direction;
		if (direction == 'back') {
			$.closeActiveModule();
		}
	});
})(jQuery);