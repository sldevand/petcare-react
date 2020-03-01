#!/bin/bash

red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

function myEcho(){
    echo ""
    echo "${green}--> $1 ${reset}"
}

#Local vars
LOCAL_WWW_PATH=/var/www
LOCAL_APP_NAME=petcare-react
LOCAL_APP_PATH=$LOCAL_WWW_PATH/$LOCAL_APP_NAME
LOCAL_BUILD_PATH=$LOCAL_APP_PATH/build

#Git vars
# GIT_PATH=https://github.com/sldevand/petcare-react.git
# GIT_BRANCH=develop

#Remote vars
REMOTE_HOST=pi@raspi3
REMOTE_WWW_PATH=/var/www
REMOTE_TMP_PATH=/home/pi/tmp
REMOTE_APP_NAME=petcare-react
REMOTE_SCRIPT_PATH=$LOCAL_APP_PATH/deploy/remote/commands.sh

myEcho "***START $LOCAL_APP_NAME deployer script START***"

mkdir $LOCAL_APP_PATH/tmp/
cp -vf $LOCAL_APP_PATH/src/config.js $LOCAL_APP_PATH/tmp/config.js
cp -vf $LOCAL_APP_PATH/deploy/config.js $LOCAL_APP_PATH/src/config.js

myEcho "Local : Build App"
cd $LOCAL_APP_PATH
npm run-script build

cp -vf $LOCAL_APP_PATH/tmp/config.js $LOCAL_APP_PATH/src/config.js
rm -rvf $LOCAL_APP_PATH/tmp/

myEcho "Local : Rename build folder to $LOCAL_APP_NAME"
cd $LOCAL_BUILD_PATH
zip -r $LOCAL_APP_NAME.zip .

ssh-add ~/.ssh/raspi3_key

myEcho "***Remote : copy from local $LOCAL_APP_NAME.zip to remote $REMOTE_HOST:$REMOTE_TMP_PATH***"
scp $LOCAL_APP_NAME.zip $REMOTE_HOST:$REMOTE_TMP_PATH

ssh $REMOTE_HOST 'bash -s' < $REMOTE_SCRIPT_PATH

myEcho "***Local : remove build files***"
rm -rf $LOCAL_BUILD_PATH

myEcho "***END $LOCAL_APP_NAME deployer script END***"