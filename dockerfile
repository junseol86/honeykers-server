FROM node
ADD ./dist/ /
CMD node bundle.js