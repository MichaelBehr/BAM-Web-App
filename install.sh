# Install node.js JavaScript runtime environment.
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
# sudo npm install npm@latest # Upgrade npm

# Install dependencies listed in package.json
# Can check installed packages with "npm list -g --depth=0"
sudo npm install

# At this point should be able to run "npm start" from root directory to open webpage that updates on save.
