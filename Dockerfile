FROM node:lts AS runtime
WORKDIR /app

ENV PORT=3000
EXPOSE 3000
CMD node ./dist/server/entry.mjs