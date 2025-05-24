const arrVariants = [
    "yes",
    "no",
    "heh no loser",
    "mayboy",
    "poshel ot suda",
    "fyy kakaska",
    "nemogy skazat",
    "mozet bit",
    "if you try hard",
    "ia nichego wam ne skazy",
    "zzzzzzzzzzzzz",
    "Ask another one",
    "idk",
    "I think another time",
    "y teba net sansow",
]

const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    const randInt = Math.floor (Math.random()*arrVariants.length)
    alert(arrVariants[randInt])
})
    