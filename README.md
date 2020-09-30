# Bill-Uploader

This is a google app script project to track various costs of a small business enterprise.
The purpose of this project is to develop a google app script plugin which can be served through a web platform to interact with other google services.
Google has done a good job of exposing service interactions with a plethora of APIs per service.

In this example we are trying to interact with google drive, google sheet with this app script.
The script presents a form to the user to record a transaction. The input on the form ranges from strings, integer to a picture object.
The picture of the object is stored to a configured google drive folder and a hyperlink is collected from the drive api.
The hyperlink to the picture along with all the details from the form are stored as a transaction on a google sheet.

Transaction might not be the right word for this interaction as the flow does not allow for edits from the script itself (one has to go into the sheet and drive and delete the contents to revert the transaction)

The google sheet of transaction is used for generating reports on tableau public. The reports are again tied back to the same website giving it a cohererent experience.

