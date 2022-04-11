/**
 * @교차_타입
 */
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

// 인터페이스로 구현하는 경우
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
