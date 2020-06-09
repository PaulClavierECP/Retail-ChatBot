# Retail Chatbot

This application, written in Typescript, using NodeJs, Express, MongoDB, Twilio enables a user to send a whatsapp text to a bot and to receive an information message about this product. The message must be written as follows:

"Check #XYZ", XYZ being the code of the product. Here you will find some examples of messages sent to the bot and its answers:

## Initialization:

### App

First you need to install all the packages using the following command:
```bash
npm install
```

Copy the template used for .env file using the .env.copy file. 

### Twilio

Head over to [Twilio] (https://www.twilio.com/try-twilio) to sign-up. Write down your ```Account SID``` and ```Auth Token```. Then go to the [Whatsapp sandbox] (https://www.twilio.com/console/sms/whatsapp/learn) and follow the instructions to start using the sandbox environment.

Add your ```Account SID``` and ```Auth Token``` to the .env file

### MongoDB

Go to [Mongo DB Atlas] (https://www.mongodb.com/cloud/atlas) to create an account and then build a cluster. Once it is done, connect the cluster, creating a ```Username``` and a ```Password``` you need to note down. Choose "Connect Your application" for the connection method. Copy paste the ```Atlas URI``` link and put it in the .env file. Don't forget to change the password and dbname tags.

### Data

Go to data/insertion.js and paste the ```Atlas URI``` link.
Then run the following command that will make the data insertion into the database you just created:
```bash
node data/insertion.js
```

## Demo

For the demo to work properly you need to enable the port on which your app is currently working to be made public to the internet. To perform this task, I used Ngork.

### Ngrok
You can download [Ngrok] (https://ngrok.com/) here.
Once the installation is completed, launch ngrok and write:

```bash
ngrok http 3000
```

The port 3000 is the port I used in the code but if you make your app run on another port, don't forget to change it in this command too.

Open the Whatsapp sandbox and replace the URL by the one provided by ngrok and add ```/api/bot``` in the end.

### Run

Run the following command

```bash
npm run dev:watch
```

The app will launch. Once the connection to MongoDb is made (it can take up to 1 minute) you can now open whatsapp and start chatting with the ChatBot !


