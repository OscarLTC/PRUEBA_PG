from django.core.management.base import BaseCommand
from django.db import connection

class Command(BaseCommand):
    help = 'Truncates all tables in the database'

    def handle(self, *args, **options):
        with connection.cursor() as cursor:
            cursor.execute("PRAGMA foreign_keys = OFF;")
            cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
            tables = cursor.fetchall()

            for table in tables:
                table_name = table[0]
                cursor.execute(f"DELETE FROM {table_name};")

            cursor.execute("PRAGMA foreign_keys = ON;")
        
        self.stdout.write(self.style.SUCCESS('Successfully truncated all tables in the database.'))