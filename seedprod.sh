bash generate-author-pic-uploads.sh data/authors/pics
bash generate-user-file-uploads.sh data/articles/docs
uesio site upsert -f data/authors/authors.csv -s data/authors/authors.spec.json
uesio site upsert -f data/authors/pics -s data/authors/uploadpics.spec.json
uesio site upsert -f data/articles/articles.csv -s data/articles/articles.spec.json
uesio site upsert -f data/articles/docs -s data/articles/uploaddocs.spec.json
