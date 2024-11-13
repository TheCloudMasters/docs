ues.io comes with a database where you can configure your data schema for your Collections as explained in the [Collections](collections) documentation but you can also connect to other data sources and let ues.io extend the functionality that is missing from other platforms. You can connect to multiple data sources and view all of them in ues.io and work with their data.

Many of our connectors and the integrations for them are features that are included in our commercial license that is included in the Large Enterprise subscription but can be requested from [Support](support@ues.io) if you want to test it out.

The current connectors are available:

1. Salesforce
2. Smartsheet
3. ClickUp
4. REST

## Salesforce

-   You need to head over to the Setup cog and then to the App Manager menu.
-   Click on the ‘New Connected App’ button.
-   Give your Connected App a Name and API Name, add your contact email.
-   Select the ‘Enable Auth Settings’ checkbox and then you will see the settings menus.
-   For the ‘Callback URL’ enter ‘https://studio.ues.io/site/oauth2/callback’
-   For the ‘Selected OAuth Scopes’ choose ‘Access the identity URL service’ and ‘Access unique user identifiers’ and ‘Manage user data via APIs’ and ‘PErform requests at any time’.
-   Check the ‘Require Proof Key for Code Exchange’ and ‘Require Secret for Web Server Flow’ and ‘Require Secret for Refresh Token Flow’ and ‘Enable Authorization Code and Credentials Flow’ and then ‘Save’.
-   You will then see a view that tells you that it will take 10 minutes to take effect but it is normally quite quick.
-   Select the ‘Continue’ button.
-   In the next view select the ‘Manage Consumer Details’ button.
-   Next you will see a view asking you to verify your identity by means of an email that was sent to the email address we entered when we created the connected app.
-   Enter the code and ‘Verify’ and then you will see a view that displays the ‘Consumer Key’ and ‘Consumer Secret’ which we will use in the next steps.

## In ues.io

-   Next head over to your ues.io app and to your Workspace and if you haven’t created an app yet you can read more about it in the [Create your first app](Create-your-first-app) documentation.
-   Select the ‘Installed Bundles’ tile on the left and then select the ‘BROWSE BUNDLE STORE’ button. Look for the Salesforce Integration Bundle and install it.
-   Then select the ‘Settings’ tile in your Workspace.
-   Look under the ‘Secrets’ section and select the ‘uesio/salesforce.salesforce_client_id’ ‘SET’ button and then head back over to Salesforce and copy the ‘Consumer Key’ value and paste it in and select the ‘SET’ button.
-   Then select the ‘uesio/salesforce.salesforce_client_isecret’ ‘SET’ button and then head back over to Salesforce and copy the ‘Consumer Secret’ value and paste it in and select the ‘SET’ button.
-   Head back over to Salesforce to your connected app and copy the URL up to the end of ‘salesforce.com’. It should look like this: ‘https://uesio2-dev-ed.develop.my.salesforce.com/’.
-   Then head back to the Workspace Settings and find the setting ‘uesio/salesforce.salesforce_url’ and then set the value with the URL you copied in the previous step.
-   Go to the ‘Integrations’ section and deselect the ‘Only local integrations’ toggle and select the Salesforce integration and select the ‘TEST AUTHENTICATION’ button and ‘AUTHENTICATE’ to make sure your integration is authenticating.
-   Head over to the [Collections](collections) section in ues.io and create a new Collection’
-   Name the new Collection ‘accounts’ and label ‘Accounts’ and label plural ‘Accounts’.
-   Set the ‘Data Source Type’ to ‘External Integration’ .
-   Set the ‘Data Source Integration’ to ‘Salesforce’ and set the ‘External Collection Name’ to Account, leave the rest blank and select ‘SAVE’.
-   Create a new field for the Collection and enter ‘accounts’ for the name and ‘Label’ as ‘Accounts’, ‘Type’ as ‘Text’ and ‘External Field Name’ as ‘Name’. (In the future we will be able to draw all the fields into the Collection without having to create any.)
-   Now head over to the [Views](views) tile and generate a list view and select the Collection ‘Accounts’.
-   Preview the View and you will see a list of all the Accounts on Salesforce.

## Connectors in Production - Site Deployment

We connected to Salesforce in the Studio [Workspace](workspaces) which will allow you to build out your app while you are connected to the Salesforce instance but to move to production and a Site you will need to have your users login to the Site and perform an authentication into Salesforce from there. To do that you will need:

-   Create a login method.
-   A custom login view.
-   A view with the workflow to perform the Salesforce authentication.
-   User Profile and associated permission set to auto assign to new and existing users.

## 2. Smartsheet

-   Available on request with Docs

## 3. ClickUp

-   Available on request with Docs

## 4. REST

-   Available on request with Docs
