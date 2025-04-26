# Use the official Node.js image from Docker Hub
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the app code to the container
COPY . .

# Expose port 3000 to access the app
EXPOSE 3000

# Command to run the app
CMD ["node", "app.js"]
