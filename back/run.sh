#!/usr/bin/env bash

. .env/bin/activate
export FLASK_APP=app.py
export FLASK_DEBUG=1
flask run -h '0.0.0.0' -p 6000
