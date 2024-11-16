from rest_framework import viewsets
from django.http import JsonResponse
from products.adapters.serializers import ProductSerializer
from products.models import Product



class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_active = False
        instance.save()
        return JsonResponse({'status': 'deleted'})

    # @action(detail=True, methods=['post'])
    # def add_to_cart(self, request, pk=None):
    #     product = self.get_object()
    #     cart = Cart.objects.get(user=request.user)
    #     cart.products.add(product)
    #     return Response({'status': 'added to cart'})