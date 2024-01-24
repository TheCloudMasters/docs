import { ConditionRequest, RouteBotApi } from "@uesio/bots"
import { Params } from "@uesio/app/bots/route/uesio/docs/download_release"

type UserFile = {
	"uesio/core.id": string
	"uesio/core.updatedat": string
}

export default function download_release(bot: RouteBotApi) {
    const params = bot.params.getAll() as Params
	const ns = bot.getNamespace()
	const { version, platform, arch = "amd64" } = params
	const order = []
	const conditions = [] as ConditionRequest[]
	let fileField = ""
	if (version !== "latest") {
		conditions.push({ "field": `${ns}.version`, "operator": "EQ", "value": version })
	} else {
		order.push({ "field": `uesio/core.createdat`, "desc": true })
	}
	if (platform === "linux") {
		fileField = `${ns}.binary_linux`
	}
	if (platform === "mac") {
		fileField = `${ns}.binary_mac` + (arch === "arm64" ? "_arm" : "")
	}
	if (platform === "windows") {
		fileField = `${ns}.binary_windows`
	}
	const results = bot.load({
		batchsize: 1,
		collection: `${ns}.release`,
		fields: [
			{ "id": `${ns}.number` },
			{ "id": fileField },
		],
		conditions,
		order,
	})
	if (!results.length) {
		bot.response.setStatusCode(404)
		return
	}
	const fileResult = results[0][fileField] as UserFile
	const userFileId = fileResult["uesio/core.id"]
	const updatedAt = fileResult["uesio/core.updatedat"]
	let url = `/userfiles/download?userfileid=${userFileId}&version=${updatedAt}`
	if (bot.getSession().inWorkspaceContext()) {
		url = `${bot.getSession().getWorkspace().getUrlPrefix()}}${url}`
	} else {
		url = `/site${url}`
	}
	bot.response.redirectToURL(url)
}