# To call this script every night at 4am, call "crontab -e" and enter this line :
# 0 4 * * * /home/ubuntu/semapps/cleanup.sh

# On each restart, Fuseki will compact its databases
docker-compose down
docker-compose up -d

# Wait for the compacting to be executed
sleep 5

# Delete the old datasets
sudo find ./data/fuseki/databases/localData -iname 'Data*' ! -wholename $(find ./data/fuseki/databases/localData -iname 'Data*' -type d | sort -n | tail -n 1)  -type d  -exec rm -rf {} +
