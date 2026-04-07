# FBV
#from .fbv import category_list, category_detail, product_list, product_detail


# CBV

"""from .cbv import (
    CategoryListAPIView as category_list, 
    CategoryDetailAPIView as category_detail,
    ProductListAPIView as product_list, 
    ProductDetailAPIView as product_detail
)"""



# Mixins
"""from .mixins import (
    CategoryListMixin as category_list, 
    CategoryDetailMixin as category_detail,
    ProductListMixin as product_list, 
    ProductDetailMixin as product_detail
)"""



# Generics

from .generics import (
    CategoryListGeneric as category_list, 
    CategoryDetailGeneric as category_detail,
    ProductListGeneric as product_list, 
    ProductDetailGeneric as product_detail
)

from .fbv import category_products