@echo off
title PastaSelf v1.00
echo Starting WDGaster
echo Aucune requête ne sera montrée dans cette console, tout est dans log.txt
node pasta.js > log.txt
echo Un crash a été detecté ! Redémarrage...
node pasta.js > log.txt