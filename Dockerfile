# === Build Stage ====
FROM oven/bun:1 AS builder

WORKDIR /app

COPY bun.lockb* package.json ./
RUN bun install

COPY . .
RUN bun run build

# === Run Stage ====
FROM oven/bun:1 AS runner

WORKDIR /app
COPY --from=builder /app .

RUN bun install --production

EXPOSE 3000
CMD ["bun", "run", "preview"]