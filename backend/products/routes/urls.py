from rest_framework.routers import DefaultRouter

from products.controller.api import ProductViewSet

router = DefaultRouter()

router.register('products', ProductViewSet)

urlpatterns = router.urls