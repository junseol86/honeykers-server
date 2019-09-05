FROM node
ADD ./ /
RUN npm install && \
  npm run-script build && \
  node dist/bundle.js
