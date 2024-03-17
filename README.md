# Codesphere Test - Frontend Test Task

The frontend task is to create a Workspace Management System. This web application should allow users to add new workspaces, manage existing workspaces, and enjoy live interaction with real-time updates.

Design can be found here: [Figma](https://www.figma.com/file/Clq9hU4HI3hHQqj2lRowBZ/Test?type=design&node-id=0-1&mode=design&t=L4BB2C6bvzZ2vGVN-0)

See the app live here: [Codesphere Frontend Test](https://codesphere-test.vercel.app/)

## ⚙️ Technologies

- `CSS`
- `Lit Framework`
- `TypeScript`
- `WebSockets`
- `Playwright`

## 🎨 How It Works

User can add new workspace, manage workspaces and enjoy live interaction.

1. Click the **"+ New Workspace"** button to open the modal, enter a workspace name, and create it instantly.
2. If you want to delete a workspace, click on th ellipsis icon and select **"Delete"**.
3. You can see the live updates of the workspaces in real-time.

## ⚙️ Process

I began by building the UI, starting with the table and manually adding some table data elements. Following this, I added styling to enhance the appearance.

Next, I developed the modal and, after completing both the modal and workspace-table components, proceeded to implement functionality that allows users to create new workspaces.

Afterwards, I made sure user have the ability to delete workspaces.

A key part of creating the software was making sure it could update in real-time using WebSocket and the whole API. Then, I made sure the app was accessible to all users and also did some tidying up by renaming things and organizing folders and files.

Finally, I added e2e testing with Playwright to make sure the app is reliable and offers a good user experience.

## 📦 Improvements

If i had more time, I would have done the following:

- Add a feature that allows users to edit the workspace name.
- Ensure the modal is fully accessible.
- Add a feature that allows users to add a description to the workspace.
- Enable pressing enter to submit the form in the modal.
- Implement lazy loading for many workspaces, so the app doesn't slow down.
- Display errors in the app where the workspace is located.
- Add skeleton loading for the workspaces.

## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` or `yarn` in the project directory to install the required dependencies.
3. Run `npm run start` or `yarn start` to get the project started.
4. Open [http://localhost:5173](http://localhost:5173) (or the address shown in your console) in your web browser to view the app.

## 🎥 Preview
