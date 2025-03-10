#!/bin/bash

rm -r /nuk/app/
mv dist /nuk/app
cp -r ../login/ /nuk/app

sftp -i ~/.ssh/mothernuk.pem ubuntu@kloudnuk.com <<EOF
cd /home/ubuntu/kn/
put -r /nuk/app/
bye
EOF

# On the EC2 instance:
## docker stop webserver
## sudo rm -r /var/lib/docker/volumes/kloudnuk/_data/app
## sudo rm -r /var/lib/docker/volumes/kloudnuk/_data/app
## sudo mv -t /var/lib/docker/volumes/kloudnuk/_data kn/app
## docker start webserver
