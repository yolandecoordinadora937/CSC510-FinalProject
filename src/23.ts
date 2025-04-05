// package.json
{
  "name": "csc510-final-project",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "@ django/django == 3.2.8",
    "django-app==4.1.0"
  },
  "devDependencies": {
    "@babel/core == 7.6.0",
    "@babel/node == 7.6.0",
    "typescript == 4.4.0-alpha.15",
    "browserslist == 8.2.3",
    "heroku-postgres:latest"
  }
}

// main.py
import os

# Django settings for csc510-final-project.
os.environ["DJANGO_SETTINGS_MODULE"] = "csc510-final-project.settings"

from django.core.wsgi import get_wsgi_application

application = get_wsgi_application()

# Heroku settings for heroku-postgres:latest
db_user = os.getenv("DB_USER")
db_password = os.getenv("DB_PASSWORD")
database_name = os.getenv("DATABASE_NAME")
os.environ["DJANGO_DB_USER"] = db_user
os.environ["DJANGO_DB_PASSWORD"] = db_password
os.environ["DATABASES"]["default"].update({
    "HOST": "heroku-postgres-xxxxxxxxxx:xxxxxxxxx",
    "PORT": 5432,
})
