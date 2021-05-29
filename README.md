# API Taller Web


## 1. Download the proyect

## 2. Install node.js
	
	2.1 sudo curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
	2.2 sudo apt install -y nodejs
	2.3 sudo apt install -y build-essential
	2.5 sudo apt install npm
	
## 2. Execute Backend
	sudo npm install nodemon -g (First time only)
	npm run dev

## 3. API 
	get all users. [Link](http://localhost:4000/api/users)
	get User by Id. [Link](http://localhost:4000/api/users/60b25cf36d990a2fb5fe361f)
	update (Postman)
	delete link = http://localhost:4000/api/users/"XXXXXXXXXXXXXX"
## Nota

	Si se corre en Ubuntu:
	- sudo gedit /etc/sysctl.conf
	
	Add a line at the bottom
	f- s.inotify.max_user_watches=524288
	
	Then save and exit!
	- sudo sysctl -p
	

	 
	 
