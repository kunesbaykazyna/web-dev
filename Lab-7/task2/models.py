class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"The engine of the {self.brand} is started."

    def drive(self):
        return f"{self.brand} {self.model} is moving."

    def __str__(self):
        return f"{self.year} {self.brand} {self.model}"

class Car(Vehicle):
    def __init__(self, brand, model, year, fuel_type):
        super().__init__(brand, model, year)
        self.fuel_type = fuel_type

    def drive(self):
        return f"The {self.brand} car is driving on the highway using {self.fuel_type}."

class ElectricScooter(Vehicle):
    def __init__(self, brand, model, year, battery_capacity):
        super().__init__(brand, model, year)
        self.battery_capacity = battery_capacity

    def charge(self):
        return f"The {self.brand} scooter is charging. Capacity: {self.battery_capacity}Wh."

    def drive(self):
        return f"The {self.brand} scooter is quietly gliding on the sidewalk."
