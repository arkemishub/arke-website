FROM node:lts AS runtime
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm@7.30.5 && pnpm i --no-frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

COPY . .

RUN pnpm install --no-frozen-lockfile
RUN PUBLIC_OUTPUT=server pnpm build

ENV PORT=3000
EXPOSE 3000
CMD node ./dist/server/entry.mjs