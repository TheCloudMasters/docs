bash generate-author-pic-uploads.sh data/authors/pics
bash generate-user-file-uploads.sh data/articles/docs
uesio site upsert -f data/authors/authors.csv -s data/authors/authors.spec.json
uesio site upsert -f data/authors/pics -s data/authors/uploadpics.spec.json
uesio site upsert -f data/tracks/tracks.csv -s data/tracks/tracks.spec.json
uesio site upsert -f data/series/series.csv -s data/series/series.spec.json
uesio site upsert -f data/articles/articles.csv -s data/articles/articles.spec.json
uesio site upsert -f data/articles/docs -s data/articles/uploaddocs.spec.json
uesio site upsert -f data/tracks/track_articles.csv -s data/tracks/track_articles.spec.json
uesio site upsert -f data/series/series_tracks.csv -s data/series/series_tracks.spec.json
