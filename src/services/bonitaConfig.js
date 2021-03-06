'use strict';

angular.module('ngBonita').provider('bonitaConfig', function () {
	var bonitaUrl = 'http://localhost:8080/bonita';
	var defaultPager = {
		p : 0,
		c : 10
	};
	var bonitaUserId = null;
	var bonitaUsername = null;
	
	/**
	 * Configure the Bonita application URL (must include application name
	 * without trailing slash)
	 * 
	 * @param url
	 */
	this.setBonitaUrl = function (url) {
		bonitaUrl = url;
	};

	this.overrideDefaultPagerValues = function (overrideDefaultPagerProperties) {
		angular.extend(defaultPager, overrideDefaultPagerProperties);
	};

	this.$get = function () {
		var api = {};

		/**
		 * Gets the Bonita application URL
		 * 
		 * @return Bonita url
		 */
		api.getBonitaUrl = function () {
			return bonitaUrl;
		};

		/**
		 * Retrieves the currently logged Bonita user id
		 * 
		 * @return logged Bonita user id
		 */
		api.getUserId = function () {
			return bonitaUserId;
		};

		/**
		 * Set the currently logged Bonita user id
		 * 
		 * @param newBonitaUserId
		 */
		api.setUserId = function (newBonitaUserId) {
			bonitaUserId = newBonitaUserId;
		};

		/**
		 * Retrieves the currently logged Bonita user name
		 * 
		 * @return logged Bonita user name
		 */
		api.getUsername = function () {
			return bonitaUsername;
		};

		/**
		 * Set the currently logged Bonita user name
		 * 
		 * @param newBonitaUsername
		 */
		api.setUsername = function (newBonitaUsername) {
			bonitaUsername = newBonitaUsername;
		};

		/**
		 * Retrieves the default pager information
		 * 
		 * @return default pager
		 */
		api.getDefaultPager = function () {
			return defaultPager;
		};

		return api;
	};
});
