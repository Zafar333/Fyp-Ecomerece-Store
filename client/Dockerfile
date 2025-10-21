# instruction with arguments
# === Dockerfile (for React frontend) ===
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the frontend code
COPY . .

# Build the production React app
RUN npm run build

# Use nginx to serve the built app
FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# docker file code is end here
