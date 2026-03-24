from .views import product_list, product_det, category_list, category_det, categ_prod
from django.urls import path

urlpatterns = [
    path('products/', product_list),
    path('products/<int:id>/', product_det),
    path('categories/', category_list),
    path('categories/<int:id>/', category_det),
    path('categories/<int:id>/products/', categ_prod)

]