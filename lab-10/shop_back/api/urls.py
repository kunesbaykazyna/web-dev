from django.urls import path
from api import views

urlpatterns = [
    #для левела 3,4,5(cbv,mixins,generics)
    
    path('products/', views.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),
    
    #for  only level 5(generic)
     
    # path('categories/', views.CategoryListAPIView.as_view()),
    # path('categories/<int:category_id>/', views.CategoryListAPIView.as_view()),
    # path('categories/<int:category_id>/products/', views.CategoryProductsAPIView.as_view()),

    # only level 2(fbv)
    
    # path('products/', views.product_list),
    # path('products/<int:product_id>/', views.product_detail),
]
