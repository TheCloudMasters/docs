import { ListenerBotApi } from "@uesio/bots"

export default function default_createlogin(bot: ListenerBotApi) {
	const redirect = "/site/app/uesio/core/changepassword?signupmethod=uesio/docs.default"
	const username = bot.params.get("username")
	const email = bot.params.get("email")
	const code = bot.params.get("code")
	const host = bot.params.get("host")
	const link = host + redirect + "&code=" + code + "&username=" + username
	const contentType = "text/html"
	const from = "noreply@ues.io"
	const fromName = "ues.io"
	const subject = "User created in the ues.io docs site"
	const body = `
	<!DOCTYPE html>
	<html>
		<body>
			A user account has been created for you in the ues.io docs site.<br/>
			Your username is: ${username}.<br/>
			<br/>
			You can set your password and log in using the link below:<br/>
			${link}
		</body>
	</html>`

	bot.runIntegrationAction("uesio/core.sendgrid", "sendemail", {
		to: [email],
		toNames: [username],
		from,
		fromName,
		subject,
		plainBody: body,
		contentType,
	})
}
