import os
import json
from django.shortcuts import render
from .models import Book
from django.http import JsonResponse

def get_all_books(request):
    books = Book.objects.all()
    data = []
    for book in books:
        data.append({
            'id': book.id,
            'title': book.title,
            'author': book.author,
            'publisher': book.publisher,
            'publication_date': book.publication_date,
        })
    return JsonResponse(data, safe=False)