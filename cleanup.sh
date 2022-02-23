docker-compose stop fuseki
docker-compose up fuseki_compact
docker-compose up -d fuseki

sudo find ./data/fuseki/databases/localData -iname 'Data*' ! -wholename $(find ./data/fuseki/databases/localData -iname 'Data*' -type d | sort -n | tail -n 1)  -type d  -exec rm -rf {} +
