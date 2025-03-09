import random

def get_random_ts_code():
    return f"{random.randint(1000, 9999)}{random.randint(1000, 9999)}"
