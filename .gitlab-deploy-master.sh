# !/bin/bash

# Get servers list:
set - f
# Variables from GitLab server:
# Note: They can't have spaces!!
string=$DEPLOY_SERVER
array=(${string//,/ })

for i in "${!array[@]}"; do
  echo "Deploy project on server ${array[i]}"
  # ssh root@${array[i]} "cd /root/yantar_front && git pull origin master"
done