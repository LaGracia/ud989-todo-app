/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes 
	// and an added `priority` attribute.
	app.Todo = Backbone.Model.extend({
		// Default attributes for every todo created, 
		// ensuring that each has `title`, `priority, and `completed` keys.
		defaults: {
			title: '',
			priority: false,
			completed: false
		},

		// Toggle the `priority` state of this todo item.
		togglePriority: function () {
			this.save({
				priority: !this.get('priority')
			});
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		}
	});
})();
