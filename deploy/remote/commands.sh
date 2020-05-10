#!/bin/bash

red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

function myEcho(){
    echo ""
    echo "${green}--> $1 ${reset}"
}

REMOTE_HOST=pi@raspi3
REMOTE_WWW_PATH=/var/www
REMOTE_TMP_PATH=/home/pi/tmp
REMOTE_APP_NAME=petcare-react
REMOTE_APP_PATH=$REMOTE_WWW_PATH/$REMOTE_APP_NAME

myEcho "Executing remote script" &&
myEcho "***Remote : removing previous site***" &&
sudo rm -rvf $REMOTE_WWW_PATH/$REMOTE_APP_NAME &&

myEcho "Remote : Unzip from tmp folder to app folder" &&
sudo mkdir $REMOTE_APP_PATH &&
sudo unzip $REMOTE_TMP_PATH/$REMOTE_APP_NAME.zip -d $REMOTE_APP_PATH &&

myEcho "Remote : Giving correct rights" &&
sudo chown -R www-data:www-data $REMOTE_APP_PATH &&
sudo find $REMOTE_APP_PATH -type d -exec chmod 0755 {} \; &&
sudo find $REMOTE_APP_PATH -type f -exec chmod 0644 {} \;