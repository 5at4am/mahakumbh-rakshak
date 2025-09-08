import sqlite3
import pickle
from datetime import datetime
from typing import Optional, List, Dict

DB_PATH = "people.db"


class Database:
    def __init__(self, path: str = DB_PATH):
        self.conn = sqlite3.connect(path, check_same_thread=False)
        self.conn.execute("PRAGMA foreign_keys = ON;")
        self._create_table()

    def _create_table(self):
        """Create persons table if it doesn't exist."""
        query = """
        CREATE TABLE IF NOT EXISTS persons (
            aadhar TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            gender TEXT NOT NULL,
            phone TEXT NOT NULL,
            encoding BLOB NOT NULL,
            created_at TEXT NOT NULL
        )
        """
        self.conn.execute(query)
        self.conn.commit()

    def add_person(
        self, aadhar: str, name: str, gender: str, phone: str, encoding
    ) -> bool:
        """Insert a new person. Returns False if Aadhar already exists."""
        try:
            self.conn.execute(
                """
                INSERT INTO persons (aadhar, name, gender, phone, encoding, created_at)
                VALUES (?, ?, ?, ?, ?, ?)
                """,
                (
                    aadhar,
                    name,
                    gender,
                    phone,
                    sqlite3.Binary(pickle.dumps(encoding)),
                    datetime.utcnow().isoformat(),
                ),
            )
            self.conn.commit()
            return True
        except sqlite3.IntegrityError:
            return False

    def get_all(self) -> List[Dict]:
        """Return all persons as list of dicts."""
        rows = self.conn.execute(
            "SELECT aadhar, name, gender, phone, encoding, created_at FROM persons"
        ).fetchall()
        return [
            {
                "aadhar": aadhar,
                "name": name,
                "gender": gender,
                "phone": phone,
                "encoding": pickle.loads(enc_blob),
                "created_at": created_at,
            }
            for aadhar, name, gender, phone, enc_blob, created_at in rows
        ]

    def get_by_aadhar(self, aadhar: str) -> Optional[Dict]:
        """Return one person by Aadhar number, or None if not found."""
        row = self.conn.execute(
            "SELECT aadhar, name, gender, phone, encoding, created_at FROM persons WHERE aadhar=?",
            (aadhar,),
        ).fetchone()
        if not row:
            return None
        aadhar, name, gender, phone, enc_blob, created_at = row
        return {
            "aadhar": aadhar,
            "name": name,
            "gender": gender,
            "phone": phone,
            "encoding": pickle.loads(enc_blob),
            "created_at": created_at,
        }

    def close(self):
        self.conn.close()