const sounds=["clap","hithat","kick","openhat","boom","ride","snare","tom","tink"]

const keys=Array.from(document.querySelectorAll("[data-key]"))
console.log(keys)
const idx=keys.map((e)=>{
    return e.target
})
console.log(idx)