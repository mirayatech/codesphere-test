# Codesphere Test - Frontend Test Task

The frontend task is to create a Workspace Management System. This web application should allow users to add new workspaces, manage existing workspaces, and enjoy live interaction with real time updates.

Design can be found here: [Figma](https://www.figma.com/file/Clq9hU4HI3hHQqj2lRowBZ/Test?type=design&node-id=0-1&mode=design&t=L4BB2C6bvzZ2vGVN-0)

See the app live here: [Codesphere Frontend Test](https://codesphere-test.vercel.app/)

## ⚙️ Technologies

- `CSS`
- `Vite`
- `Lit Framework`
- `TypeScript`
- `WebSockets`
- `Playwright`

## 🎨 How It Works

Users can add new workspaces, manage workspaces, and enjoy live interaction.

1. Click the **"+ New Workspace"** button to open the modal, enter a workspace name, and create it instantly.
2. If you want to delete a workspace, click on the ellipsis icon and select **"Delete"**.
3. You can see the live updates of the workspaces in real time.

## ⚙️ Process

I began by building the UI, starting with the table and manually adding some table data elements. Following this, I added styling to enhance the appearance.

Next, I developed the modal and, after completing both the modal and workspace-table components, implemented functionality that allows users to create new workspaces.

Afterward, I made sure the user had the ability to delete workspaces.

A key part of creating the software was ensuring it could update in real time using WebSocket and the whole API. Then, I made sure the app was accessible to all users and also cleaned up by renaming things and organizing folders and files.

Finally, I added e2e testing with Playwright to ensure the app is reliable and offers a good user experience.

## 💭 Improvements

If I had more time, I would have done the following:

- - Creating a mock API and WebSocket server for the e2e tests to avoid reliance on the real server, which isn't reliable. If the server is down, the tests will fail.
- Add a feature that allows users to edit the workspace name.
- Ensure the modal is fully accessible.
- Add a feature that allows users to add a description to the workspace.
- Enable pressing enter to submit the form in the modal.
- Implement lazy loading for many workspaces so the app doesn't slow down.
- Display errors in the app where the workspace is located.
- Add skeleton loading for the workspaces.
- - When dropdown is open, close it when clicking outside.

## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` or `yarn` in the project directory to install the required dependencies.
3. Run `npm run start` or `yarn start` to get the project started.
4. Open [http://localhost:5173](http://localhost:5173) (or the address shown in your console) in your web browser to view the app.

## 🎥 Video

https://github.com/mirayatech/codesphere-test/assets/71933266/2b818dbf-42dc-4730-a34c-6705ef1ea3fe

## 📸 Image

![Screenshot 2024-03-17 at 22 34 19](https://github.com/mirayatech/codesphere-test/assets/71933266/6a467b7a-b4b4-4e86-a0bd-27f05965449a)
