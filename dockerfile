FROM node
ADD ./ /
RUN npm run-script build && \
  node dist/bundle.js
