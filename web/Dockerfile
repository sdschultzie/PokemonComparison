# TODO: REPLACE WITH REACT CONTAINER
# Use a lightweight web server base image
FROM nginx:alpine

# Copy our HTML file into the nginx served directory
COPY index.html /usr/share/nginx/html/index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 1111 inside the container
EXPOSE 1112

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]