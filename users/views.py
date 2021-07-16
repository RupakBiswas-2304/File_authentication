from http.client import responses
from rest_framework.exceptions import AuthenticationFailed
from .models import User,Image_Upload
from users.serializer import UserSerializer,FileSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
import jwt,datetime
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from django.views import View
from django.http import FileResponse
from django.conf import settings

# Create your views here.

def is_loggedin(token):
        if not token:
            raise AuthenticationFailed("Unauthenticated")
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticated")

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data = request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        response = Response({
            "serializer": serializer.data,
            "status":201,
            "message": "User Created Successfull",
        })
        return response

class LoginView(APIView):
    def post(self,request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email = email).first()

        if user is None:
            raise AuthenticationFailed("User not found")
        
        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect password")

        payload = {
            'id': user.id,
            'exp':datetime.datetime.utcnow()+ datetime.timedelta(minutes=60),
            'iat':datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')
        response = Response()
        response.set_cookie(key ='jwt', value = token, httponly=True)
        response.data = {
            'message':"Successfully logged in",
            'status':200
        }

        return response

class UserView(APIView):
    def get(self,request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed("Unauthenticated")

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticated")
        
        user = User.objects.filter(id = payload['id']).first()
        serializer = UserSerializer(user)
        hello = f"Hello {user.name}"

        return Response({
            "message":serializer.data,
            "status":200})


class EditProfileView(APIView):
    def post(self,request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed("Unauthenticated")
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticated")
        
        user = User.objects.filter(id = payload['id']).first()
        name_ = request.data['name']
        age_ = request.data['age']
        phoneno_ = request.data['phoneno']

        user.name = name_ 
        user.age = age_
        user.phoneno = phoneno_
        user.save()

        response = Response({
            "message": "Your Profile Updated Successfully",
            "status":200
        })
        return response




class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            "message": "success",
        }
        return response


class FileView(APIView):

    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, *args, **kwargs):

        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed("Unauthenticated")
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticated")

        
        a = int(payload['id'])
        b = int(request.data['user'])
        if(a==b):

            file_serializer = FileSerializer(data=request.data)
            if file_serializer.is_valid():
                file_serializer.save()
                return Response(file_serializer.data, status=status.HTTP_201_CREATED)
            else:
                # print("Serializer not valid")
                return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({
                "message":"Wrong Id",
                "status":405
            })


class DocumentDownload(View): # view for displaying images only to autherized pleople 
    def get(self, request, relative_path):
        token = request.COOKIES.get('jwt')
        is_loggedin(token)
        
        absolute_path = '{}/{}'.format(settings.MEDIA_ROOT, relative_path)
        response = FileResponse(open(absolute_path, 'rb'), as_attachment=True)
        return response

