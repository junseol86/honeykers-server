FROM node
ADD ./dist/ /
RUN npm run-script build && \
  node bundle.js
