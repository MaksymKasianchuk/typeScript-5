console.log('str');
// task 1 descrybe the type of function getPromise
function getPromise (): Promise<Array<string | number>> {
    return new Promise((resolve) => {
      resolve(['Text', 50]);
    });
}
getPromise()
.then((data) => {
    console.log(data);
});

// use Pick 
type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
}
function compare (top:Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position' | 'weight'>): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    }
}
console.log(compare({name: 'Hoodie', color: 'Black'}, {position: 1, weight: 2}));

// Specify generics for the function of combining objects.
function merge<T extends object, U extends object> (objA: T, objB: U) {
    return Object.assign({}, objA, objB);
}
console.log(merge({name: 'Bob'}, {age: 22}));

// add right generics and interfaces
class Component<T> {
    constructor (public props:T) {}
}
interface IProps {
    title: string;
}
class Page extends Component<IProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}
const pageInfoObj = {
    title: 'Hello Page'

}
const myPage = new Page(pageInfoObj);
myPage.pageInfo();
