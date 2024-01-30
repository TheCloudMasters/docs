
declare module "@uesio/app/selectlists/uesio/docs" {
	export type ReleasePlatform = "linux" | "mac" | "windows"
}
declare module "@uesio/app/bots/listener/uesio/docs/default_createlogin" {

	type Params = {
		username: string
		email: string
		code: string
		host: string
	}

	export type {
		Params
	}
}
declare module "@uesio/app/bots/listener/uesio/docs/default_forgotpassword" {

	type Params = {
		username: string
		email: string
		code: string
		host: string
	}

	export type {
		Params
	}
}
declare module "@uesio/app/bots/listener/uesio/docs/default_signup" {

	type Params = {
		username: string
		email: string
		code: string
		host: string
	}

	export type {
		Params
	}
}
declare module "@uesio/app/bots/route/uesio/docs/download_release" {
	declare type ReleasePlatform = import("@uesio/app/selectlists/uesio/docs").ReleasePlatform
	type Params = {
		version: string
		platform: ReleasePlatform
		arch?: string
	}

	export type {
		Params
	}
}