# Use the official Node.js 20 image from Docker Hub
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose port 3000 to access the app
EXPOSE 3000

# Command to run the app
CMD ["node", "app.js"]

