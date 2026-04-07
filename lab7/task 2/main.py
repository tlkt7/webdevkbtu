from models import Electronics, Clothing

def main():
    inventory = [
        Electronics("Samsung", 240000, 13, 18),
        Electronics("Macbook", 1200000, 8, 12),
        Clothing("Hoodie", 14000, 20, 'L'),
        Clothing("Jeans", 12000, 32, 'M')
    ]

    print("Products:")
    for item in inventory:
        print(item)

        discount_price = item.get_discount_price(10)
        print(f"Price with discount 10%: {discount_price}")

        if isinstance(item, Electronics):
            print(item.get_warranty_info())
        elif isinstance(item, Clothing):
            print(item.check_fitting())


if __name__ == "__main__":
    main()