#!/bin/sh
while true; do
 read prompt
 echo -n "$prompt">/dev/console
 read -N 1 key </dev/console >/dev/console
 echo >/dev/console
 echo -n "$key"
done
