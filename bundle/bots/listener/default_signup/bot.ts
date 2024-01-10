import { ListenerBotApi } from "@uesio/bots"

export default function default_signup(bot: ListenerBotApi) {
	const namespace = bot.getNamespace()
	const redirect =
		"/site/auth/" + namespace + "/default/signup/confirm"
	const username = bot.params.get("username")
	const email = bot.params.get("email")
	const code = bot.params.get("code")
	const host = bot.params.get("host")
	const firstName = bot.params.get("firstname")
	const lastName = bot.params.get("lastname")
	const toName = firstName && lastName ? `${firstName} ${lastName}` : username
	const link = `${host}${redirect}?code=${code}&username=${username}`
	const contentType = "text/html"
	const from = "noreply@ues.io"
	const fromName = "ues.io"
	const subject = "Welcome to the ues.io docs site!"
	const body = `
	<!DOCTYPE html>
	<html>
		<body>
			Hi ${toName},<br/>
			<br/>
			Thank you for registering for an account with the ues.io team!<br/>
			<br/>
			To complete your account set up, please confirm using the link below:<br/>
			${link}<br/>
			<br/>
			Cheers!<br/>
			<br/>
			The ues.io team
		</body>
	</html>`

	bot.runIntegrationAction("uesio/core.sendgrid", "sendemail", {
		to: [email],
		toNames: [toName],
		from,
		fromName,
		subject,
		plainBody: body,
		contentType,
	})
}
