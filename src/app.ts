/**
 * @교차_타입
 */
// 객체에서의 사용
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1 = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

// 인터페이스로 구현하는 경우와 동일함
interface IAdmin {
  name: string;
  privileges: string[];
}

interface IEmployee {
  name: string;
  startDate: Date;
}

interface IElevatedEmployee extends IAdmin, IEmployee {}

type ElevatedEmployee2 = IAdmin & IEmployee; // 이것도 가능함

// 유니언 타입에서의 사용
type Combinable = string | number;
type Numeric = number | boolean;

type Universial = Combinable & Numeric;

/**
 * @타입_가드
 */
// 유니언 타입에서의 사용
const add = (a: Combinable, b: Combinable) => {
  if (typeof a === "string" || typeof b === "string") {
    // 이 부분이 타입 가드
    return a.toString() + b.toString();
  }
  return a + b;
};

// 객체에서의 사용
type UnknownEmployee = Admin | Employee;

const printEmployeeInformation = (emp: UnknownEmployee) => {
  console.log(`Name: ${emp.name}`);

  if ("privileges" in emp) console.log(`Privileges: ${emp.privileges}`);
  if ("startDate" in emp) console.log(`Start Date: ${emp.startDate}`);
};

printEmployeeInformation(e1);

// 클래스에서의 사용
class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();

  if (vehicle instanceof Truck) vehicle.loadCargo(1000);
};

useVehicle(v1);
useVehicle(v2);
