
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

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* react
* ngrok
 https://ngrok.com/download
  
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
   cd weatherbot_api
   nodemon app.js
   ```
   API will start on port 9000
   
3. Use Ngrok to get the public URL
   ```sh
   cd <Path/to/ngrok>/ngrok
   ./ngrok http 9000
   ```
   ngrok will show you an https public url that looks like below 
    ```sh
    Forwarding                    http://9c42f142a819.ngrok.io -> http://localhos
    Forwarding                    https://9c42f142a819.ngrok.io -> http://localho                                                                
   ```
4. Setup Watson Assistant and Cloudant Db
   <a href=https://cloud.ibm.com/> IBM Cloud/a>
5. Import bot Skill (<path/to/bot/file>/bot/skils/skill-Weather-Skill.json) to the Watson Assitant

5. Run Chatui react app from command
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

Ali Alhashimi - [@your_twitter](https://twitter.com/alilibx) - alifaisalelz@gmail.com

Project Link: [https://github.com/alilibx/weather_bot.git](https://github.com/alilibx/weather_bot.git)



