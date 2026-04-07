from rest_framework import serializers
from .models import Category, Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def validate(self, data):
        count = data.get('count')
        is_active = data.get('is_active')
        if count == 0:
            raise serializers.ValidationError("количество товара 0,ошибка")
        if is_active is False:
            raise serializers.ValidationError("is_active=false,нельзя создать товар")
        return data

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
