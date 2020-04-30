docker run --name cellularjs_jsonserver --rm -d -p 8001:80 -v $PWD/dist/htdocs/pages/api/db.json:/data/db.json clue/json-server
