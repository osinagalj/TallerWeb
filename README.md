# FirstWebApp
Stack MEAN

## 1. Download the proyect

## 2. Install node.js
	
	2.1 sudo curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
	2.2 sudo apt install -y nodejs
	2.3 sudo apt install -y build-essential
	
	2.4 sudo npm install -g @angular/cli
	
	2.5 sudo apt install npm
	
	
## 2. Execute Backend
	sudo npm install nodemon -g (First time only)
	npm run dev



## 3. Execute FrontEnd
	ng serve --o 


## Nota

	Si se corre en Ubuntu:
	- sudo gedit /etc/sysctl.conf
	
	Add a line at the bottom
	f- s.inotify.max_user_watches=524288
	
	Then save and exit!
	- sudo sysctl -p
	

# proyect dependencys
	 - npm install express mongose dotenv
	 - npm install -D nodemon
	 - npm init
	 - npm install cors
	 
# kill process
 sudo netstat -tupln
 sudo kill -9 25022
	 
	 

	 
	 npm run dev
