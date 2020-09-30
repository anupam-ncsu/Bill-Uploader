# Small Business Expense Uploader

This is a google app script project to track various costs of a small business enterprise.
The purpose of this project is to develop a google app script plugin which can be served through a web platform to interact with other google services.
Google has done a good job of exposing service interactions with a plethora of APIs per service.

In this example we are trying to interact with google drive, google sheet with this app script.
The script presents a form to the user to record a transaction. The input on the form ranges from strings, integer to a picture object.
The picture of the object is stored to a configured google drive folder and a hyperlink is collected from the drive api.
The hyperlink to the picture along with all the details from the form are stored as a transaction on a google sheet.

Transaction might not be the right word for this interaction as the flow does not allow for edits from the script itself (one has to go into the sheet and drive and delete the contents to revert the transaction)

The google sheet of transaction is used for generating reports on tableau public. The reports are again tied back to the same website giving it a cohererent experience.

#### Deployment Process:

- Sign out of all google accounts on your browser. Sign in again to only the google account which is to serve the app script along with the google drive folder and the google sheet
- GOTO google drive and create a folder to store the pictures of the expenses receipts. Oen the folder in your browser. You will get the hyperlink in the format : https://drive.google.com/drive/folders/< FOLDER-ID-HASH-CODE > . 
- Create a google sheet to record the transactions. Open the google sheet in browser and copy the sheet ID similiar to drive. https://docs.google.com/spreadsheets/d/< SHEET ID HASH CODE >
- Replace these values in the [code.gs](code.gs) file in this directory.
- Click "+ New" > "google app script" in the google drive
- In the app script the default file open will be [code.gs](code.gs), replace the content with the one we have here.
- Create a new file in the same app script editor: [frontend.html](frontend.html)
- GOTO Publish > Deploy as Webapp
- Select the following options: 
    > Execute the app as: User accessing the webapp
    > Who can access the app: anyone
- this opens up the script frontend. The hyperlink to the published script in the format :
    ```
    https://script.google.com/macros/s/HASH-CODE-ID/dev
    ```

- To Embed this into a website as a html code wrap it with an iframe
    ```
    <iframe src="https://script.google.com/macros/s/HASH-CODE-ID/exec" width="1200" height="950" frameborder="0"></iframe>
    ```
    Note: The "dev" postfix has been changed to "exec" in the iframe format.