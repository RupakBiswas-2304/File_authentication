from http.client import responses
from rest_framework.exceptions import AuthenticationFailed
from .models import User,Image_Upload
from users.serializer import UserSerializer,FileSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
import jwt,datetime
from rest_framework.parsers import MultiPartParser, FormParser ,JSONParser
from rest_framework import status
from django.views import View
from django.http import FileResponse
from django.conf import settings
import hashlib,io,json

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
        
        email = request.POST.get('email')
        user1 = User.objects.filter(email = email).first()
        
        if user1:
            response = Response({
                # "serializer": serializer.data,
                "status":403,
                "message": "user with that email exists",
            })
            return response
        
        f_name = request.POST.get('f_name')
        l_name = request.POST.get('l_name')
        phone = request.POST.get('phone')
        file = request.FILES['file']
        bytes = file.read() # read entire file as bytes
        hash = hashlib.sha256(bytes).hexdigest();
        try:
            user = User.objects.create(f_name=f_name,l_name=l_name,email=email,phoneno=phone,hash=hash)
            serializer = UserSerializer(user)
            response = Response({
                "serializer": serializer.data,
                "status":201,
                "message": "User Created Successfull",
            })
            return response
        except:
            print('something went wrong') 
        response = Response({
            # "serializer": serializer.data,
            "status":400,
            "message": "User not created",
        })
        return response

class LoginView(APIView):
    def post(self,request):
        email = request.data['email']
        file = request.FILES['file']
        bytes = file.read() # read entire file as bytes
        hash = hashlib.sha256(bytes).hexdigest();

        user = User.objects.filter(email = email).first()

        if user is None:
            return Response({
                'message':"No User found",
                'status':403
            })
        
        if not user.hash == hash:
            return Response({
                'message':"You have Choosen Incorrect File",
                'status':403
            })

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
        # now = datetime.datetime.utcnow()
        # current_time = now.year*10000000000 + now.month * 100000000 +now.day * 1000000 +now.hour*10000 +now.minute*100 +now.second
        # if(payload['exp'] < current_time ):
        #     return Response({
        #         "message":"token expired",
        #         "status":403
        #     })
        user = User.objects.filter(id = payload['id']).first()
        serializer = UserSerializer(user)

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

        try:
            name_ = request.data['name']
        except:
            name_ = user.name
        
        try:
            age_ = request.data['age']
        except:
            age_ = user.age

        try: 
            phoneno_ = request.data['phoneno']
        except:
            phoneno_ = user.phoneno

        

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

class ListAllImage(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed("Unauthenticated")
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Your Token Expired")

        images = Image_Upload.objects.all()
        response = []
        for i in images :
            response.append(FileSerializer(i).data)
        return Response({
            "data":response
        })

class DeleteImage(APIView):
    def post(self,request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed("Unauthenticated")
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Your Token Expired")
        a = (request.data['image'])
        B =  a.split('/')
        k = int((B[2].split('_'))[1])
        l = int(payload['id'])

        if(k==l):


            img = Image_Upload.objects.filter(id = request.data['id']).first()
            img.delete()

            return Response({
                "message":"image deleted Successfully"
            })
        else:
            return Response({
                "message":"Can't delete other user's image"
            })
        