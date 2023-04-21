# Discord Message Deletion Script
This JavaScript code is designed to be used in the Chrome console in order to delete all the messages that you have sent in a specific Discord channel. This script utilizes Discord's API to fetch and delete messages.

## Installation


1. Copy the script from the code block above.
2. Open the Discord web app in Chrome.
3. Open the developer console by pressing CTRL + SHIFT + J or CMD + OPT + J on a Mac.
4. Paste the script into the console and replace the placeholders with your Discord token, channel ID, and user ID.
5. Press enter to run the script.

## Usage
Once you have installed the script, it will automatically start deleting messages that you have sent in the specified channel. The script will delete messages in batches of 100 and will wait for 1 second in between batches to avoid rate limiting.

You can monitor the progress of the script by looking at the console output. Once the script has finished running, it will output a message indicating that all messages have been deleted.

Note: This script can only delete messages that you have sent, and not messages sent by other users. Use it with caution and make sure you are deleting the right messages before running the script.


This script utilizes the following JavaScript features:

- async/await for asynchronous operations

- fetch for making HTTP requests

- URLSearchParams for constructing query parameters
