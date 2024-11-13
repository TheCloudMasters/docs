One of the places we use components is in the Studio View Builder. If you want to know more about components you can head over to the [Components Documentation](components). Here we are going to talk about creating custom components using the ues.io CLI and your favorite code editor and source control tool. Link here to the [Tutorial Video](https://youtu.be/KW6-lreASEQ)

1. What is a Custom Component
2. What You Will Need
3. Create a Custom Component
4. Updating the Created Component

## 1. What is a Custom Component

-   When you use the Studio View Builder you are presented with standard components for layout, content, data, Interactions and visualizations. These components are really well thought out and help speed up your application building experience but it may be that you need a special component, something you would want or need to reuse. Something like a component that translates a HEX value to show the actual color of the data in a row in a table.

## 2. What You Will Need

-   A login to ues.io of course.
-   The latest installation of the ues.io CLI which you can install by following the [CLI Documentation](using-the-cli).
-   Your favorite code editor like VS Code.
-   Your chosen source control tool like GitHub.
-   Some basic knowledge of Typescript, YAML and REACT if you want to get funky.

## 3. Create a Custom Component

-   Presuming you have created an app and a workspace, open your command prompt and create a directory with your app name. Ours is called tilemojis. So we entered ‘mkdir tilemojis’ then ‘cd tilemojis’.
-   Use the ‘uesio login’ command to login to your instance.
-   Then enter ‘uesio app clone’ from your command line to clone your app to the directory you just created and in our case ‘tilemojis’
-   You will see a list of all the apps that you have access to and you can then select the one you want to clone and select ‘enter’.
-   Now we will set up our GitHub repository by entering ‘git init’.
-   Head over to your GitHub desktop app and add a repository and select the directory we just created, ours being ‘tilemoji’.
-   You will then see a list of files in GitHub that are the metadata for your app. Go ahead and commit the files.
-   Head back to the command line and enter the following ‘uesio generate componentpack’ and for Component Pack enter ‘main’ and for Component Name enter ‘colorbox’.
-   Head back over to GitHub desktop and you will see the metadata we just added. Go ahead and commit that to your main branch.
-   Open the command line and you should be in your directory you created earlier, ours being ‘tilemoji’, and now we will push it to your workspace.
-   Enter ‘uesio pack’ and uesio will package all the metadata for the component pack and the component and then enter 'uesio deploy' to deploy the new componet pack to your workspace.
-   Open the Studio View Builder in the workspace for the app you created and in the components search box type in color and you will now see the custom component you created.

## 4. Updating the Custom Component

-   To edit the component head over to your code editor, I’m using VS Code, and open the directory we created using the command line, ours ‘tilemoji’.
-   Select the ‘bundles’ directory and underneath you will see the ‘component packs main’ and then on the ‘src/components/colorbox directory, click on ‘colorbox.tsx’. Here you can use Typescript to add some styling and definitions.
-   Then select the ‘components’ directory and the ‘colorbox.yml’ file and customize your component.
-   Go back to the command line and the same directory we created earlier and enter 'uesio pack and then ‘uesio deploy’ to get your changes pushed to your workspace.
-   Head back over to the Studio View Builder and find your component and see the changes you made.
