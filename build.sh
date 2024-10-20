#!/bin/bash

npm run build
rm -r /nuk/app/
cp -r build/ /nuk/
mv /nuk/build /nuk/app/

sftp -i ~/.ssh/mothernuk.pem ubuntu@kloudnuk.com <<EOF
cd /home/ubuntu/kn/
put -r /nuk/app/
bye
EOF
