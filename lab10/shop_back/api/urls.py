from django.urls import path
from api import views

urlpatterns = [
    path('categories/', views.category_list if not hasattr(views.category_list, 'as_view') else views.category_list.as_view()),
    path('categories/<int:id>/', views.category_detail if not hasattr(views.category_detail, 'as_view') else views.category_detail.as_view()),
    
    path('products/', views.product_list if not hasattr(views.product_list, 'as_view') else views.product_list.as_view()),
    path('products/<int:id>/', views.product_detail if not hasattr(views.product_detail, 'as_view') else views.product_detail.as_view()),
    
    path('categories/<int:id>/products/', views.category_products),
]