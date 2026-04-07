class Product:
    def __init__(self, name, price, stock_quantity):
        self.name = name
        self.price = price
        self.stock_quantity = stock_quantity
    
    def update_stock(self, amount):
        self.stock_quantity += amount
    
    def get_discount_price(self, discount_percent):
        return self.price * (1- discount_percent / 100)
    
    def __str__(self):
        return f"Product: {self.name}   Price: {self.price}   Amount: {self.stock_quantity}"

class Electronics(Product):
    def __init__(self, name, price, stock_quantity, warranty_months):
        super().__init__(name, price, stock_quantity)
        self.warranty_months = warranty_months
    
    def __str__(self):
        return super().__str__() + f"   Warranty: {self.warranty_months} months"
    
    def get_warranty_info(self):
        return f"{self.name} has {self.warranty_months} warranty months"
    
class Clothing(Product):
    def __init__(self, name, price, stock_quantity, size):
        super().__init__(name, price, stock_quantity)
        self.size = size
    
    def check_fitting(self):
        return f"For {self.name} there is {self.size} size"
    
    def __str__(self):
        return super().__str__() + f"   Size: {self.size}"