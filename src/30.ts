// This is a simple example of a Django app deployed to Heroku.
import os

from django.core.management import execute_from_command_line

def main():
    execute_from_command_line([os.path.dirname(__file__), 'manage.py'])

if __name__ == "__main__":
    main()
