docker build -t trocaqui_api .
docker run -p 3000:3000 --name trocaqui_api trocaqui_api