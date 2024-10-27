#!/bin/bash

rm -r /nuk/app/
cp -r app/build/ /nuk/
cp -r login/ /nuk/build/
mv /nuk/build/ /nuk/app/

# sftp -i ~/.ssh/mothernuk.pem ubuntu@kloudnuk.com <<EOF
# cd /home/ubuntu/kn/
# put -r /nuk/app/
# bye
# EOF
