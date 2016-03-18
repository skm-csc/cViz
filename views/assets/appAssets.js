module.exports = {

 assets : {
	"app-css": {
		"dev":[
			"/public/assets/w/styles/layout.css",
			"/public/assets/w/styles/pagestyles.css",
			"/public/assets/w/styles/materialform.css",
			"/public/assets/w/styles/dataview-table.css",
			"/public/assets/w/styles/dataview-panels.css",
			"/public/assets/w/styles/userpicker.css",
			"/public/mods/appController.js"
		],
		"prod":[
			"/public/assets/w/styles/layout.min.css",
			"/public/assets/w/styles/pagestyles.min.css",
			"/public/assets/w/styles/materialform.min.css",
			"/public/assets/w/styles/dataview-table.min.css",
			"/public/assets/w/styles/dataview-panels.min.css",
			"/public/assets/w/styles/userpicker.min.css",
			"/public/mods/appController.min.js"
		]
	},

	"utils":{
		"dev":[
			"/public/assets/g/js/utils.js"
		],
		"prod":[
			"/public/assets/g/js/utils.js"
		]
	},

	"admin":{
		"dev":[
			"/public/mods/admin/users/usersModule.js",
			"/public/mods/admin/users/usersControllerMain.js",
			"/public/mods/admin/users/usersRouter.js"
		],
		"prod":[
			"/public/mods/admin/users/usersModule.js",
			"/public/mods/admin/users/usersControllerMain.js",
			"/public/mods/admin/users/usersRouter.js"
		]
	},

	"directives":{
		"dev":[
			"/public/mods/directives/userprofile/script.js",
			"/public/mods/directives/userdisplay/script.js",
			"/public/mods/directives/user/script.js",
			"/public/mods/directives/datepickerDirective.js"
		],
		"prod":[
			"/public/mods/directives/userprofile/script.js",
			"/public/mods/directives/userdisplay/script.js",
			"/public/mods/directives/user/script.js",
			"/public/mods/directives/datepickerDirective.js"
		]
	},

	"customize":{
		"dev":[
			"/public/mods/keynotes/keynotesModule.js",
			"/public/mods/keynotes/keynotesControllerMain.js",
			"/public/mods/keynotes/keynotesRouter.js",

			"/public/mods/facts/factsModule.js",
			"/public/mods/facts/factsControllerMain.js",
			"/public/mods/facts/factsRouter.js",

			"/public/mods/feedback/feedbackModule.js",
			"/public/mods/feedback/feedbackControllerMain.js",
			"/public/mods/feedback/feedbackRouter.js"
		],
		"prod":[
			"/public/mods/keynotes/keynotesModule.js",
			"/public/mods/keynotes/keynotesControllerMain.js",
			"/public/mods/keynotes/keynotesRouter.js"
		]
	},
}

};
