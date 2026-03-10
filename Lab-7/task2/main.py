from models import Car, ElectricScooter

def main():
    my_car = Car("Toyota", "Camry", 2022, "gasoline")
    my_scooter = ElectricScooter("Xiaomi", "Mi Pro 2", 2023, 474)

    vehicles = [my_car, my_scooter]

    print("--- Vehicle Demonstration ---")
    for v in vehicles:
        print(f"Vehicle: {v}")
        print(f"Action: {v.drive()}")
        print("-" * 35)

    print(my_scooter.charge())

if __name__ == "__main__":
    main()
