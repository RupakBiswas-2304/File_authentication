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
    
def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    ext = filename.split('.')[-1]
    return 'user_{0}/{1}.{2}'.format(instance.user.id, instance.title,ext)

class Image_Upload(models.Model):
    user = models.ForeignKey(User , on_delete = models.CASCADE)
    title = models.CharField(max_length= 40)
    image = models.ImageField(upload_to=user_directory_path, max_length=None )
