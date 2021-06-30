
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

1. Setup Watson Assistant and Cloudant Db
   <a href=https://www.ibm.com/cloud/watson-assistant> Watson Assistant</a>
3. Clone the repo
   ```sh
   git clone https://github.com/alilibx/weather_bot.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Download ngrok  <a href= https://ngrok.com/download> Watson Assistant</a>


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
3. Run Chatui react app from command
   ```sh
   cd chatui
   npm start
   ```
   chatui will start on port 3000 (you can go to app.js to change port)
   
4. Goto localhost:3000 in the broswer to use the chatbot


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Ali Alhashimi - [@your_twitter](https://twitter.com/alilibx) - alifaisalelz@gmail.com

Project Link: [https://github.com/alilibx/weather_bot.git](https://github.com/alilibx/weather_bot.git)



