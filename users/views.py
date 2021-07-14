from http.client import responses
from rest_framework.exceptions import AuthenticationFailed
from .models import User
from users.serializer import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
import jwt,datetime

# Create your views here.

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
            "jwt":token,
            "message":hello,
            "status":200})


class EditProfileView(APIView):
    def post(self,request):
        pass


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            "message": "success",
        }
        return response