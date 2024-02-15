# Signals

When you want something to do something you have to give a signal. Depending on what you want done depends on the type of signal you would give. A green signal to go and a red to stop.
We refer to actions and instructions as Signals and we use them in a variety of categories.

1. Signals vs. Bots
2. Signal Categories
3. Component Signals

# 1. Signals vs. Bots

Signals are executed in the front-end and rely on an interaction or a state to be fired off. They can only work if the browser is active. Bots on the other hand are run back-end on the server side and they work as long as the server is running. If a user was to fire off a signal in the browser and turn off the power then the signal may fail. If a listener bot was executed and triggers a back-end workflow then the signal will most likely not fail. Signals are really good for adding to the user experience.

# 2. Signal Categories

-   Wires – This how you bring your data from your Collections into the Studio View Builder.  
    Add Wire Order
    Cancel Wire Changes
    Create Record
    Empty Wire
    Init Wire(s)
    Load All
    Load Next Batch
    Load Wire(s)
    Mark For Delete
    Reset All Named Conditions On Wire
    Reset Wire
    Save Wire(s)
    Search Wire
    Set Wire Condition
    Set Wire Condition Value
    Set Wire Order
    Toggle Delete Status
    Toggle Wire Conditions
    Unmark For Delete
    Update Fields

-   Notifications – There are standard and custom notifications that can be displayed to the user.  
    Add Notification
    Remove Notification
-   Panels – These are pop up windows, we like to call them Panels, that can be used to either prompt a user to complete something or displaying different sets of data.  
    Close all Panels
    Close Panel
    Open Panel
    Toggle Panel Visibility

-   Routes – The highways for your Views to travel along.  
    Navigate To Path
    Navigate To Route
    Navigate To Route Assignment
    Redirect To Route
    Reload Current Route
-   Bots – Programmable workflows that can interact with each other.  
    Call Bot

-   Integrations – Other systems connected to your application.  
    Run Integration action to an integration

-   Developer Tools – Helpful if you are stepping through some logic or testing.  
    Capture Performance Measurement
    Log To Browser Console
    Record Performance Marker

-   Components – Components in the Studio View Builder can be controlled, either toggled between edit and read mode, or for controlling a specific component or all components with the same id.  
    Run Component Signal

-   Collections – Collection of your data.  
    Create Export Job
-   User – The customer  
    Create Login
    Forgot Password
    Forgot Password Confirmation
    Login
    Logout
    Signup

# 3. Component Signals

The following components in the Studio View Builder can run signals:

-   Box
-   Image
-   Tile
-   Button
-   Metric
-   Panels
