def get_random_ts_code():
    import random
    import string

    # Define a list of characters to use in generating the code
    chars = string.ascii_letters + string.digits

    # Generate a random code using the list of characters
    code = ''.join(random.choice(chars) for i in range(10))

    return code
