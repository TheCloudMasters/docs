#!/usr/bin/env bash

targetDir=$1
csvPath="$targetDir/upload.csv"

crnl="\r\n"

rm -f "$csvPath"
touch "$csvPath"
printf "uesio/core.recordid,uesio/core.fieldid,uesio/core.path$crnl" >> $csvPath

# We expect a structure where files are like this,
# e.g. 
#  files
#  │   ben.jpg
#  │   gregg.jpg
#
#
# However, Markdown filese can be buried either within a folder,
# or they can be nested within their category directory.
for file in $(find "$targetDir/files" -type f -maxdepth 3)
do
    relative_path=${file#"$targetDir/files/"}
    basefile=$(basename -- "$file")
    filename="${basefile%.*}"
    printf "$filename,uesio/cms.picture,$relative_path$crnl" >> $csvPath
done
