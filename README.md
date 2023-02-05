##The FBC (Faruk Broadcast Channel) is a website which enables you to see the top news in the US, as well as search articles about topics which interest you

# How to use the project

Clone the project into desired directory by navigating to desired directory opening bash and running:

```
git clone https://github.com/FarukIm/RottenPear.git
```

## After download

Next, you should navigate to the RottenPear directory within your terminal and install all dependencies by running:

```
npm install
```

Once that is done, to run the server you use the command:

```
npm start
```

If you followed the steps above a browser window will pop up with the website displayed

## Potential issue

Since the API used for this site is provided by newsapi.org, network traffic is limited to 100 API requests per day, in order to get around that please insert your API key for the newsapi in the src/utils/constants apiKey variable
