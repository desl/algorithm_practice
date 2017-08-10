#!/bin/sh
FILE="automatic.js"
FILE_CONTENT=`cat $FILE`
DATE=`date +%Y-%m-%d:%H:%M:%S`;

echo $FILE_CONTENT | sed s/\".*\"/\"$DATE\"/ > algorithm_practice/automatic.js

git add $FILE;
git commit -m "updated date"
git push origin master

# var date = "2017-08-10:15:03:00";
# console.log(`this file was last updated at: ${date}`);