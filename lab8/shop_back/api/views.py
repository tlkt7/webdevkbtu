from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Category, Product

def product_list(request):
    products = Product.objects.all()
    data = list(products.values())
    return JsonResponse(data, safe=False)

def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    data = {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category_id": product.category_id
    }
    return JsonResponse(data)

def category_list(request):
    categories = Category.objects.all()
    data = list(categories.values())
    return JsonResponse(data, safe=False)

def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    data = {
        "id": category.id,
        "name": category.name
    }
    return JsonResponse(data)

def category_products(request, id):
    category = get_object_or_404(Category, id=id)
    products = Product.objects.filter(category=category)
    data = list(products.values())
    return JsonResponse(data, safe=False)