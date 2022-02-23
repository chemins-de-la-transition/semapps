docker-compose down
docker-compose up -d

sudo find ./data/fuseki/databases/localData -iname 'Data*' ! -wholename $(find ./data/fuseki/databases/localData -iname 'Data*' -type d | sort -n | tail -n 1)  -type d  -exec rm -rf {} +
