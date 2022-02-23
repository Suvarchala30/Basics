const { expect }=require("@jest/globals")
const { add,division }=require("./addition")

describe("Addition testing",()=>{
    it("should return 7 for 5 and 2",()=>{
        expect(add(5,2)).toBe(7)
    })
})

describe("Division testing",()=>{
    it("Should return 2 for 10 and 5",()=>{
        expect(division(10,5)).toBe(2)
    })
    it("Should return invalid if a is Nan",()=>{
        expect(division("5",5)).toBe("Invalid")
    })
    it("Should return close to 1.67 for 5 and 3",()=>{
        expect(division(5,3)).toBeCloseTo(1.67)
    })
})