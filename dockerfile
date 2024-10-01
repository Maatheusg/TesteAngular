# Etapa 1: Compilar o projeto Angular
FROM node:20 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @angular/cli

EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]

#FROM node:20 as builder
#WORKDIR /app
#COPY . .
#RUN npm install
#RUN npm run build
#
#FROM nginx:alpine
#COPY --from=builder /app/dist/teste/browser usr/share/nginx/html
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY mime.types /etc/nginx/mime.types
#
#EXPOSE 81
#CMD ["nginx", "-g", "daemon off;"]