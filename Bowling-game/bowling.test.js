const {expect}=require("@jest/globals")
const { bowling }=require("./bowling")

describe("Score value",()=>{
    const rolls=[2,8,3,4,6,4,10,0,10,7,1,3,3,5,5,9,1,2,8,5]
    it("Score value should be 137 for given rolls",()=>{
        expect(bowling(rolls).score).toBe(137)
    })
    const expectedFrames={
        '1': [ 2, 8, 3 ],
    '2': [ 3, 4 ],
    '3': [ 6, 4, 10 ],
    '4': [ 10, 0, 10 ],
    '5': [ 0, 10, 7 ],
    '6': [ 7, 1 ],
    '7': [ 3, 3 ],
    '8': [ 5, 5, 9 ],
    '9': [ 9, 1, 2 ],
    '10': [ 2, 8, 5 ]
    }
    it("frames should match",()=>{
        expect(JSON.stringify(bowling(rolls).frames)).toBe(JSON.stringify(expectedFrames))
        //expect(bowling(rolls).frames).toStrictEqual(expectedFrames)
    })
})

describe("Check for all 10's",()=>{
    const rolls=[10,10,10,10,10,10,10,10,10,10,10,10]
    it("Score Should return 30",()=>{
        expect(bowling(rolls).score).toBe(300)
    })
    const expectedFrames={}
    for(let i=1;i<=10;i++){
        expectedFrames[i]=[10,10,10]
    }
    it("Shouls return correct frames",()=>{
        //expect(JSON.stringify(bowling(rolls).frames)).toBe(JSON.stringify(expectedFrames))
        expect(bowling(rolls).frames).toStrictEqual(expectedFrames)
    })
})