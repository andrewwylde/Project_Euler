#!/bin/bash
echo HOME FILE: $HOME/.zshrc
echo Enter the shortcut for your alias
read NAME
echo Enter the command you wish to run
read COMMAND

printf "\nPlease confirm that you would like to add an alias with parameters:\nshortcut: $NAME\naction: $COMMAND \nConfirm? [y/n]"
read YN
if [[ $YN = "y" ]]; then
  printf "okay."
  echo "alias $NAME=\"$COMMAND\"" >> $HOME/.zshrc
  exit 0
else
  printf "rejected. Exiting..."
  exit 1
fi
