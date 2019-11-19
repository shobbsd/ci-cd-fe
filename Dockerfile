FROM node
COPY app/package*.json ./
RUN npm install --production && npm install -g serve
COPY app .
RUN npm run build 
EXPOSE 5000
CMD ["serve", "-s", "build"]
