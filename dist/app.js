"use strict";
function getPromise() {
    return new Promise((resolve) => {
        resolve(['Text', 50]);
    });
}
getPromise()
    .then((data) => {
    console.log(data);
});
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
console.log(compare({ name: 'Hoodie', color: 'Black' }, { position: 1, weight: 2 }));
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
console.log(merge({ name: 'Bob' }, { age: 22 }));
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
const pageInfoObj = {
    title: 'Hello Page'
};
const myPage = new Page(pageInfoObj);
myPage.pageInfo();
//# sourceMappingURL=app.js.map