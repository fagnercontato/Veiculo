#!/bin/sh

echo "🔄 Aguardando banco de dados ficar disponível..."

# Aguarda o PostgreSQL responder na porta correta
until nc -z ${POSTGRES_HOST} ${POSTGRES_PORT}; do
  echo "⏳ Banco ainda não disponível em ${POSTGRES_HOST}:${POSTGRES_PORT}..."
  sleep 2
done

echo "✅ Banco disponível! Aplicando migrações..."

#Realiza a leitura do schema.prisma
npx prisma generate

# Aplica as migrações do Prisma
npx prisma migrate deploy

echo "🚀 Iniciando aplicação Node.js..."
exec node index.js