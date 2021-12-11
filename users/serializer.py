from rest_framework import serializers
from .models import User,Image_Upload

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','f_name','email','hash','l_name','phoneno']
        extra_kwargs = {
            'hash': {'write_only': True}
        }

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance

class FileSerializer(serializers.ModelSerializer):
    class Meta():
        model = Image_Upload
        fields = [ 'id','user','title','image']