# Bots

ues.io bots allow you to write custom server-side logic with TypeScript.

See Bots as workflow processes that you create to do something when something happens. A simple example would be to tell the ues.io Bot to update a sales target reached checkbox when the sales figure matches the forecasted sales figure.

There are 5 types of bots waiting to be used and bots can even call each other or fired off in the view triggered by a signal attached to a button or other components and even from a route.

-   **Listener bot**: Can be run on-demand in response to user interaction (e.g. a button click), can be called by other bots, or can be invoked via the REST API.
-   **Route bot**: Perfroms a route actin and can be run on-demand in response to user interaction (e.g. a button click), can be called by other bots, or can be invoked via the REST API.
-   **Collection - Before-save / after-save bot**: Run before/after a collection record is saved to the ues.io database. Each of these bots is collection-specific, and has access to the record(s) being inserted/updated/deleted as part of the bot context.
-   **Integration - Load / Save / Run Action**: Can be run on-demand in response to user interaction (e.g. a button click), can be called by other bots, or can be invoked via the REST API.
-   **Generator bot**: Used to define the logic for [generators](concepts/generators)
