from rest_framework import viewsets
from django.http import JsonResponse
from products.adapters.serializers import ProductSerializer
from products.models import Product



class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

