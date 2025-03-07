
import os
from django.conf import settings

class EmailBackend(object):
    def __init__(self, fail_silently=False, **kwargs):
        self.fail_silently = fail_silently
        self.settings_dict = kwargs

    def send_messages(self, email_messages):
        if not email_messages:
            return
        new_email_messages = []
        for message in email_messages:
            # Create a new email message for each recipient
            for recipient in message.recipients():
                new_message = self._create_message(message, recipient)
                if new_message is None:
                    continue
                new_email_messages.append(new_message)
        connection = getattr(self, 'connection', None)
        if connection is not None:
            return connection.send_messages(new_email_messages)
        else:
            for new_message in new_email_messages:
                new_message.send(fail_silently=self.fail_silently)

    def _create_message(self, message, recipient):
        # Create a copy of the original message for the specified recipient
        msg = message.__class__()
        msg.encoding = message.encoding
        msg.body = message.body
        msg.content_subtype = message.content_subtype
        msg.headers = message.headers
        msg.attachments = message.attachments
        msg.alternatives = message.alternatives
        msg.bcc = []
        msg.cc = []
        msg.connection = None
        msg.date = None
        msg.extra_headers = {}
        msg.from_email = None
        msg.headers = {}
        msg.images = None
        msg.priority = None
        msg.recipients() = [recipient]
        msg.reply_to = []
        msg.return_path = None
        msg.subject = message.subject
        msg.template = message.template
        msg.template_context = {}
        return msg