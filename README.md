# Django_assignment

### To Run this project:
    [1] Clone this project
    [2] Make sure mysql is installed in pc
    [3] goto settings.py in auth, and change the user and password

```bash
  DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'new_database',
        'USER': 'ADD YOUR USER NAME HERE',
        'PASSWORD': 'ADD YOUR PASSWORD HERE',
        'HOST':'127.0.0.1',
        'PORT':'3306',
    }
}
  ```

    [4] open terminal and run server by ->


```bash
  python manage.py runserver
```

#### Below the screenshots are added :

###### Successfull Register
![App Screenshot](https://github.com/RupakBiswas-2304/Django_assignment/blob/main/screenshots/register_success.png)

###### Trying to register with the same email id which gives error
![App Screenshot](https://github.com/RupakBiswas-2304/Django_assignment/blob/main/screenshots/register_failed.png)

###### Successfull login which gives a "jwt" token valid for 60 min
![App Screenshot](https://github.com/RupakBiswas-2304/Django_assignment/blob/main/screenshots/login.png)

###### Image Upload 
      for every user a new folder is created in img_upload folder and stored all image of that user 
      here is the screenshot for a success full image upload from a auhenicated user 

![App Screenshot](https://github.com/RupakBiswas-2304/Django_assignment/blob/main/screenshots/successfull_imgupload.png)

###### accessing uploaded Image : 
     only authenticated user can have access to the uploaded images,  every user have a access to all images in the data base ( image from all user  ) 
![App Screenshot](https://github.com/RupakBiswas-2304/Django_assignment/blob/main/screenshots/image_Access_success.png)

###### also screen shot for unauthenticated user 

![App Screenshot](https://github.com/RupakBiswas-2304/Django_assignment/blob/main/screenshots/photo_access_failure.png)