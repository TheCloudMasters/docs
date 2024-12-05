## REST API

This example uses the Swiss Commercial Registry (Zefix) API as an example to connect to the registry and query a Swiss company to see if it exists and more company details. To see this working then watch the video on our [YouTube](https://youtu.be/l0evKBknlIY) channel.

**NOTE:** You will need to request access to <zefix@bj.admin.ch> acquire your username and password with a reason for your request.

- Create a workspace called dev<br></br>

- Go to the Bots tile and create a new integration load bot named company (you can leave it as default) dialect TypeScript.<br></br>

- Add the following TypeScript code to the body.
**NOTE:** This is particular to Zefix that requires a username and password for authentication. You can adjust the authentication method accordingly for your use case.

```
import { LoadBotApi } from "@uesio/bots"


type ZefixRequest = {
 name: string
}
 // These are the available fields from the full response body
type ZefixCompany = {
 name: string
 chid: string
 canton: string
 legalSeat: string
 status: string
 purpose: string
 capitalNominal: string
 cantonalExcerptWeb: string
 uid: string
}

type ZefixResponse = ZefixCompany[]

export default function company(bot: LoadBotApi) {

 const { conditions } = bot.loadRequest
 const baseUrl = bot.getIntegration().getBaseURL()

 // If no conditions were provided, return no records.
 if (!conditions || conditions.length === 0) {
   return
 }

 let searchCondition = ""
 let idCondition = ""

 // Figure out which type of condition was sent in.
 conditions.forEach((condition) => {
   if (condition.type === "SEARCH") {
     searchCondition = condition.value as string
   } else if (condition.field === "uesio/core.id") {
     idCondition = condition.value as string
   }
 })

 let url = ""
 let method = ""
 let body = undefined

 if (searchCondition) {
   // If we were sent a search condition, use the search API
   url = `${baseUrl}/api/v1/company/search`
   method = "POST"
   body = {
     name: searchCondition,
   }
 } else if (idCondition) {
   // If we were sent an id condition use the chid API
   url = `${baseUrl}/api/v1/company/chid/${idCondition}`
   method = "GET"
 } else {
   return
 }

 const response = bot.http.request<ZefixRequest,ZefixResponse>({
   headers: {
     "Content-Type": "application/json",
   },
   method,
   url,
   body,
 })

 // Here we match the retrieved data records to the collection data
 response.body.forEach((record) => {
   bot.addRecord({
     ["name"]: record.name,
     ["canton"]: record.canton,
     ["legalseat"]: record.legalSeat,
     ["status"]: record.status,
     ["purpose"]: record.purpose,
     ["capitalnominal"]: record.capitalNominal,
     ["cantonalexcerptweb"]: record.cantonalExcerptWeb,
     ["uid"]: record.uid,
     ["uesio/core.id"]: record.chid,
   })
 })

}
```

- Select the Integration Types tile and create a new integration type called zefix then leave everything blank except name.<br></br>

- Select the Collections tile and create a new collection called company then change the data source type to external and set the integration to zefix.<br></br>

- Then add the following new fields all with the type = text:
  - canton
  - cantonalexcerptweb
  - capitalnominal
  - legalseat
  - name
  - purpose, Type= Long Text
  - status
  - uid<br></br>
- Go to the Installed Bundles tile and select the Browse Bundle Store button and Install AppKit. <br></br>

- Afterwards go to the Collections Tile and select the company collection and the click on the Generators Tile and Run ‘Generate Admin Views’ with the Zefix collection and selected fields then select Run Generator.<br></br>

- Then select the collection called company and then edit and set the company load bot as the load bot for the company collection.<br></br>

- In your workspace select the Home tile and Run the AppKit starter bot but do NOT toggle the “Use AI” to generate initial collections for this app.<br></br>

- Select the Secrets Tile and create two new secrets called username and password.<br></br>

- Select the Credentials Tile and create a credential called zefix of type “Username & Password” and select secrets we created called password under Password (secret) and username under Username (secret).<br></br>
- Select the Integrations Tile and edit the Integration called zefix . Set the authentication to “Basic HTTP Authentication”, set the Username/Password Credentials to the zefix credential you just created, and set the base URL to `https://www.zefix.admin.ch/ZefixPublicREST` <br></br>

- Go to the workspace settings page and set the values for the username and password secrets.<br></br>

- Select the Views Tile and the Home view and then Preview.<br></br>

- Select the Companies Menu and type a Swiss company name in the search box and you will see the company appear in the list. Select the company in the list and then you will see all the details of the company information as it appears in the Zefix database.
