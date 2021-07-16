from rest_framework import serializers
from .models import User,Image_Upload

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','name','email','password','age','phoneno']
        extra_kwargs = {
            'password':{'write_only':True}
        }

    def create(self, validated_data):
        password = validated_data.pop("password",None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class FileSerializer(serializers.ModelSerializer):
    class Meta():
        model = Image_Upload
        fields = [ 'id','user','title','image']