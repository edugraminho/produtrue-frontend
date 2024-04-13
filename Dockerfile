FROM node:21.7 as build

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .
RUN npm run build


FROM nginx:alpine
# Copie os arquivos de compilação do frontend React da primeira fase do Dockerfile
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
