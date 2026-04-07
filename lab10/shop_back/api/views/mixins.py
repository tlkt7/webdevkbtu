from rest_framework import generics, mixins
from api.models import Category, Product
from api.serializers import CategorySerializer, ProductSerializer

class CategoryListMixin(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    def get(self, request, *args, **kwargs): return self.list(request, *args, **kwargs)
    def post(self, request, *args, **kwargs): return self.create(request, *args, **kwargs)

class CategoryDetailMixin(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'id'
    def get(self, request, *args, **kwargs): return self.retrieve(request, *args, **kwargs)
    def put(self, request, *args, **kwargs): return self.update(request, *args, **kwargs)
    def delete(self, request, *args, **kwargs): return self.destroy(request, *args, **kwargs)

class ProductListMixin(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    def get(self, request, *args, **kwargs): return self.list(request, *args, **kwargs)
    def post(self, request, *args, **kwargs): return self.create(request, *args, **kwargs)

class ProductDetailMixin(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'id'
    def get(self, request, *args, **kwargs): return self.retrieve(request, *args, **kwargs)
    def put(self, request, *args, **kwargs): return self.update(request, *args, **kwargs)
    def delete(self, request, *args, **kwargs): return self.destroy(request, *args, **kwargs)