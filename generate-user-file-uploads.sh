#!/usr/bin/env bash

targetDir=$1
csvPath="$targetDir/upload.csv"

crnl="\r\n"

rm -f "$csvPath"
touch "$csvPath"
printf "uesio/core.recordid,uesio/core.fieldid,uesio/core.path$crnl" >> $csvPath

# We expect a structure where files are nested at a max of 2 levels,
# e.g. 
#  files
#  ├── first-app
#  │   ├── createroute.png
#  │   ├── suggestfields.png
#  │   └── first-app.md
#  │   create-account.md
#
# We expect that any NON-markdown files, e.g. PNG / JPG,
# would be nested within a folder that has the same name as the markdown file
# to which the image is related and should be attached,
# e.g. "first-app/createroute.png" is related to "first-app.md"
#
# However, Markdown filese can be buried either within a folder,
# or they can be nested within their category directory.
for file in $(find "$targetDir/files" -type f -maxdepth 3)
do
    relative_path=${file#"$targetDir/files/"}
    basefile=$(basename -- "$file")
    filename="${basefile%.*}"
    if [[ $file == *".md" ]]; then
        printf "$filename,uesio/cms.content,$relative_path$crnl" >> $csvPath
    else
        # we need to get the dirname to know where to attach it to
        dirname=$(basename $(dirname "$file"))
        printf "$dirname,,$relative_path$crnl" >> $csvPath
    fi
done
