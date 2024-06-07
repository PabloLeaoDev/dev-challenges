function theGround(obj) {
        const NAME = obj.name
        const CATEGORY = obj.category    
    if (NAME.length < CATEGORY.length) {
        return CATEGORY
    } else {
        return NAME
    }
}

console.log(theGround({"name":"dirt","category":"alpha"}))
console.log(theGround({"name":"stone","category":"alpha"}))