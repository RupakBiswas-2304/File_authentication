from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    name = models.CharField(max_length= 255)
    email = models.EmailField(max_length=255,unique=True)
    password = models.CharField(max_length= 255)
    age = models.IntegerField()
    phoneno = models.CharField(max_length=14)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name','password']
    
