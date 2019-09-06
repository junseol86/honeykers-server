FROM node:8.16.1-alpine
ADD ./ /
RUN npm install && \
  npm run-script build
EXPOSE 3000
CMD node dist/bundle.js
