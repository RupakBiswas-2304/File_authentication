from .views import RegisterView,LoginView,UserView,LogoutView,EditProfileView,FileView,ListAllImage,DeleteImage
from django.urls import path
# from django.conf.urls import urlreact

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user',UserView.as_view()),
    path('profile',EditProfileView.as_view()),
    path('logout',LogoutView.as_view()),
    path('upload', FileView.as_view()),
    path('listview', ListAllImage.as_view()),
    path('deleteimage', DeleteImage.as_view()),
]
