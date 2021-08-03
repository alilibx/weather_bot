
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <h1> Weather Bot</h1>
    <h2> By Ali Alhashimi</h2>
  </a>
</p>


<!-- GETTING STARTED -->
## Getting Started

This is a chatbot based on IBM Watson built with react front end and node.js backend to query 
the weather in a certain city at a certain time.


### Prerequisites

* npm
* react
* ngrok
* IBM Wastson Assistant 
* IBM Cloudant Database
  
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/alilibx/weather_bot.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Download ngrok  <a href= https://ngrok.com/download>  Ngrok Download Link </a>


<!-- USAGE EXAMPLES -->
## Usage


1. Run weatherbot_api
   ```sh
   cd <Path/to/weather_bot/project>/weatherbot_api
   nodemon app.js
   ```
   API will start on port 9000
   
2. Use Ngrok to get the public URL
   ```sh
   cd <Path/to/ngrok>/ngrok
   ./ngrok http 9000
   ```
   ngrok will show you an https public url that looks like below 
    ```sh
    Forwarding                    https://9c42f142a819.ngrok.io                                                                
   ```
   Copy the url that start with https to the watson assitant skill follow webhook section (find details in step #6)

3. Setup Watson Assistant and Cloudant Db
   <a href=https://cloud.ibm.com> IBM Cloud </a>
4. Import bot Skill (<path/to/bot/file>/bot/skils/skill-Weather-Skill.json) to the Watson Assitant
   </br> a. Open IBM Watson Assistant service that you have created (In my case it is "aliweatherbot") 
   </br> b. Then Create an assitant and enter a name for your assitant (In My Case "theassistant")
   </br> c. Click on Launch Watson Assitant and on the left side menu click on skills and then Create Skill 
            The Choose dialog skill and cick next, then from teh tabs select Upload Skill and select skill file 
            (<path/to/bot/file>/bot/skils/skill-Weather-Skill.json) 
   </br> d. The goto webhooks and paste the ngrok https URL to that and add "/currentweather" after the URl which will be 
             "https://9c42f142a819.ngrok.io/currentweather"

5. Then goto the watson assistant service and create new credentaial and copy these credentials then paste the credentials in the .env file in the <Path/to/weather_bot/project>/weatherbot_api project
   ```sh
  ASSISTANT_IAM_APIKEY=kS0cwK4wdSnEBY3LKkPDk5orOooM3a4lAi9OXtQ3oSdF
ASSISTANT_SERVICE_URL=https://api.eu-gb.assistant.watson.cloud.ibm.com/instances/ea216b74-9ca0-4a03-b16c-b7cc388689f0
ASSISTANT_ID=4d874228-10f3-4adc-ace6-4f42087fb0bf
WEATHER_APIKEY=6115365f8f294414800126a2825e8d1f
WEATHER_API_BASE_URL=https://api.weatherbit.io/v2.0/
   ```

[![IMAGE ALT TEXT](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=sXvjZ9QQ-ik "Create IBM Watson Assistant, and Setup and Import Skill and Configure Webhook and Node JS API)

6. Run Chatui react app from command
   ```sh
   cd chatui
   npm start
   ```
   chatui will start on port 3000 (you can go to app.js to change port)
   
. Goto localhost:3000 in the broswer to use the chatbot


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Ali Alhashimi - [@alilibx](https://twitter.com/alilibx) - alifaisalelz@gmail.com

Project Link: [https://github.com/alilibx/weather_bot.git](https://github.com/alilibx/weather_bot.git)



