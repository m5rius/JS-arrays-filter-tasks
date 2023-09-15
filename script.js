// Dirbti su šiuo masyvu:

let arr = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751];

// 3. Tęsiant darbą su ankstesniu masyvu atlikti šias užduotis naudojant filter metodą. Kiekvienai užduočiai sukurti naują kintamąjį, jame išsaugoti reikšmę, kurią grąžina filter metodas, ir šį kintamąjį išvesti į konsolę:

// 3.1. Gauti tik teigiamus skaičius.
let task1 = arr.filter(function(num) {
    return num > 0
})
console.log(task1)

// 3.2. Gauti tik neigiamus skaičius.
let task2 = arr.filter(function(num) {
    return num < 0
})
console.log(task2)

// 3.3. Gauti tik skaičius, kurie dalinasi iš 2.
let task3 = arr.filter(function(num) {
    return !isNaN(num) && num % 2 === 0
})
console.log(task3)

// 3.4. Gauti tik skaičius, kurie dalinasi iš 3.
let task4 = arr.filter(function(num) {
    return !isNaN(num) && num % 3 === 0
})
console.log(task4)

// 3.5. Gauti tik skaičius, kurie dalinasi iš 5.
let task5 = arr.filter(function(num) {
    return !isNaN(num) && num % 5 === 0
})
console.log(task5)

// 3.6. Gauti tik skaičius, kurie dalinasi iš 11.
let task6 = arr.filter(function(num) {
    return !isNaN(num) && num % 11 === 0
})
console.log(task6)

// 3.7. Gauti tik skaičius, kurie dalinasi iš 31.
let task7 = arr.filter(function(num) {
    return !isNaN(num) && num % 31 === 0
})
console.log(task7)

// 3.8. Gauti tik skaičius, kurie dalinasi iš 2 ir iš 3.
let task8 = arr.filter(function(num) {
    return !isNaN(num) && num % 2 === 0 && num % 3 === 0
})
console.log(task8)

// 3.9. Gauti tik skaičius, kurie dalinasi iš 3 ir iš 7.
let task9 = arr.filter(function(num) {
    return !isNaN(num) && num % 3 === 0 && num % 7 === 0
})
console.log(task9)

// 3.10. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 9.
let task10 = arr.filter(function(num) {
    return !isNaN(num) && num % 5 === 0 && num % 9 === 0
})
console.log(task10)

// 3.11. Gauti tik skaičius, kurie dalinasi iš 5 ir iš 11.
let task11 = arr.filter(function(num) {
    return !isNaN(num) && num % 5 === 0 && num % 11 === 0
})
console.log(task11)

// 3.12. Gauti tik skaičius, kurie dalinasi iš 2, 8 ir 12.
let task12 = arr.filter(function(num) {
    return !isNaN(num) && num % 2 === 0 && num % 8 === 0 && num % 12 === 0
})
console.log(task12)

// 3.13. Gauti tik skaičius, kurie dalinasi iš 2 arba iš 3.
let task13 = arr.filter(function(num) {
    return !isNaN(num) && num % 2 === 0 || num % 3 === 0
})
console.log(task13)

// 3.14. Gauti tik skaičius, kurie dalinasi iš 3 arba iš 5.
let task14 = arr.filter(function(num) {
    return !isNaN(num) && num % 3 === 0 || num % 5 === 0
})
console.log(task14)

// 3.15. Gauti tik skaičius, kurie dalinasi iš 5 arba iš 6.
let task15 = arr.filter(function(num) {
    return !isNaN(num) && num % 5 === 0 || num % 6 === 0
})
console.log(task15)

// 3.16. Gauti tik skaičius, kurie dalinasi iš 7 arba iš 8.
let task16 = arr.filter(function(num) {
    return !isNaN(num) && num % 7 === 0 || num % 8 === 0
})
console.log(task16)

// 3.17. Gauti tik skaičius, kurie dalinasi iš 9 arba iš 13.
let task17 = arr.filter(function(num) {
    return !isNaN(num) && num % 9 === 0 || num % 13 === 0
})
console.log(task17)

// 3.18. Gauti tik skaičius, kurie dalinasi iš 2, 3 arba iš 5.
let task18 = arr.filter(function(num) {
    return !isNaN(num) && num % 2 === 0 || num % 3 === 0 || num % 5 === 0
})
console.log(task18)

// 3.19. Gauti tik skaičius, kurie dalinasi iš 5, 7 arba iš 9.
let task19 = arr.filter(function(num) {
    return !isNaN(num) && num % 5 === 0 || num % 7 === 0 || num % 8 === 0
})
console.log(task19)

// 3.20. Gauti tik skaičius, kurie dalinasi iš 7, 8 arba iš 11.
let task20 = arr.filter(function(num) {
    return !isNaN(num) && num % 7 === 0 || num % 8 === 0 || num % 11 === 0
})
console.log(task20)

// 3.21. Gauti tik skaičius, kurie dalinasi iš 9, 12 arba iš 13.
let task21 = arr.filter(function(num) {
    return !isNaN(num) && num % 9 === 0 || num % 12 === 0 || num % 13 === 0
})
console.log(task21)

// 3.22. Gauti tik skaičius, kurie yra didesni už 100.
let task22 = arr.filter(function(num) {
    return !isNaN(num) && num > 100
})
console.log(task22)

// 3.23. Gauti tik skaičius, kurie yra didesni už 555.
let task23 = arr.filter(function(num) {
    return !isNaN(num) && num > 555
})
console.log(task23)

// 3.24. Gauti tik skaičius, kurie yra didesni arba lygūs 888.
let task24 = arr.filter(function(num) {
    return !isNaN(num) && num >= 888
})
console.log(task24)

// 3.25. Gauti tik skaičius, kurie yra didesni arba lygūs 6789.
let task25 = arr.filter(function(num) {
    return !isNaN(num) && num >= 6789
})
console.log(task25)

// 3.26. Gauti tik skaičius, kurie yra mažesni už 50.
let task26 = arr.filter(function(num) {
    return !isNaN(num) && num < 50
})
console.log(task26)

// 3.27. Gauti tik skaičius, kurie yra mažesni už 1000.
let task27 = arr.filter(function(num) {
    return !isNaN(num) && num < 1000
})
console.log(task27)

// 3.28. Gauti tik skaičius, kurie yra mažesni arba lygūs -1.
let task28 = arr.filter(function(num) {
    return !isNaN(num) && num <= -1
})
console.log(task28)

// 3.29. Gauti tik skaičius, kurie yra mažesni arba lygūs -5564.
let task29 = arr.filter(function(num) {
    return !isNaN(num) && num <= -5564
})
console.log(task29)

// 3.30. Gauti tik skaičius, kurie yra mažesni už 1000 ir didesni už 500.
let task30 = arr.filter(function(num) {
    return !isNaN(num) && num < 1000 && num > 500
})
console.log(task30)

// 3.31. Gauti tik skaičius, kurie yra mažesni už 100 ir didesni už 0.
let task31 = arr.filter(function(num) {
    return !isNaN(num) && num < 100 && num > 0
})
console.log(task31)

// 3.32. Gauti tik skaičius, kurie yra mažesni už 0 ir didesni už -50.
let task32 = arr.filter(function(num) {
    return !isNaN(num) && num < 0 && num > -50
})
console.log(task32)

// 3.33. Gauti tik skaičius, kurie yra mažesni arba lygūs 0 ir didesni už -100.
let task33 = arr.filter(function(num) {
    return !isNaN(num) && num <= 0 && num > -100
})
console.log(task33)

// 3.34. Gauti tik skaičius, kurie yra didesni arba lygūs 0 ir mažesni už 55.
let task34 = arr.filter(function(num) {
    return !isNaN(num) && num >= 0 && num < 55
})
console.log(task34)

// 3.35. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir mažesni arba lygūs 654.
let task35 = arr.filter(function(num) {
    return !isNaN(num) && num >= 444 && num <= 654
})
console.log(task35)

// 3.36. Gauti tik teigiamus skaičius, kurie dalinasi iš 2.
let task36 = arr.filter(function(num) {
    return !isNaN(num) && num > -1 && num % 2 === 0
})
console.log(task36)

// 3.37. Gauti tik teigiamus skaičius, kurie dalinasi iš 3.
let task37 = arr.filter(function(num) {
    return !isNaN(num) && num > -1 && num % 3 === 0
})
console.log(task37)

// 3.38. Gauti tik neigiamus skaičius, kurie dalinasi iš 4.
let task38 = arr.filter(function(num) {
    return !isNaN(num) && num < 0 && num % 4 === 0
})
console.log(task38)

// 3.39. Gauti tik neigiamus skaičius, kurie dalinasi iš 111.
let task39 = arr.filter(function(num) {
    return !isNaN(num) && num < 0 && num % 111 === 0
})
console.log(task39)

// 3.40. Gauti tik skaičius, kurie yra didesni už 500 ir kurie dalinasi iš 2.
let task40 = arr.filter(function(num) {
    return !isNaN(num) && num > 500 && num % 2 === 0
})
console.log(task40)

// 3.41. Gauti tik skaičius, kurie yra didesni už 1000 ir kurie dalinasi iš 3.
let task41 = arr.filter(function(num) {
    return !isNaN(num) && num > 1000 && num % 3 === 0
})
console.log(task41)

// 3.42. Gauti tik skaičius, kurie yra mažesni už 1000 ir kurie dalinasi iš 9.
let task42 = arr.filter(function(num) {
    return !isNaN(num) && num < 1000 && num % 9 === 0
})
console.log(task42)

// 3.43. Gauti tik skaičius, kurie yra mažesni už 500 ir kurie dalinasi iš 2.
let task43 = arr.filter(function(num) {
    return !isNaN(num) && num < 500 && num % 2 === 0
})
console.log(task43)

// 3.44. Gauti tik skaičius, kurie yra didesni arba lygūs 33 ir kurie dalinasi iš 3.
let task44 = arr.filter(function(num) {
    return !isNaN(num) && num >= 33 && num % 3 === 0
})
console.log(task44)

// 3.45. Gauti tik skaičius, kurie yra didesni arba lygūs 444 ir kurie dalinasi iš 12.
let task45 = arr.filter(function(num) {
    return !isNaN(num) && num >= 444 && num % 12 === 0
})
console.log(task45)

// 3.46. Gauti tik skaičius, kurie yra mažesni arba lygūs 155 ir kurie dalinasi iš 5.
let task46 = arr.filter(function(num) {
    return !isNaN(num) && num <= 155 && num % 5 === 0
})
console.log(task46)

// 3.47. Gauti tik skaičius, kurie yra mažesni arba lygūs -333 ir kurie dalinasi iš 9.
let task47 = arr.filter(function(num) {
    return !isNaN(num) && num <= -333 && num % 9=== 0
})
console.log(task47)

// 3.48. Gauti tik skaičius, kurie yra didesni už 100, mažesni už 500 ir kurie dalinasi iš 5.
let task48 = arr.filter(function(num) {
    return !isNaN(num) && num > 100 && num < 500 && num % 5 === 0
})
console.log(task48)

// 3.49. Gauti tik skaičius, kurie yra didesni arba lygūs 888, mažesni už 1000 ir kurie dalinasi iš 2.
let task49 = arr.filter(function(num) {
    return !isNaN(num) && num >= 888 && num < 1000 && num % 2 === 0
})
console.log(task49)

// 3.50. Gauti tik skaičius, kurie yra mažesni arba lygūs 888, didesni arba lygūs -333, dalinasi iš 3 ir nėra nulis.
let task50 = arr.filter(function(num) {
    return !isNaN(num) && num <= 888 && num > -333 && num % 3 === 0 && num != 0
})
console.log(task50)

// 3.51. Gauti tik skaičius.
let task51 = arr.filter(function(num) {
    return !isNaN(num)
})
console.log(task51)

// 3.52. Gauti tik tekstus (string).
let task52 = arr.filter(function(num) {
    return isNaN(num)
})
console.log(task52)

// 3.53. Gauti tik tekstus (string), kurie turi daugiau nei 5 simbolius.
let task53 = arr.filter(function(num) {
    return isNaN(num) && num.length > 5
})
console.log(task53)

// 3.54. Gauti tik tekstus (string), kurie turi mažiau arba lygiai 5 simbolius.
let task54 = arr.filter(function(num) {
    return isNaN(num) && num.length <= 5
})
console.log(task54)

// 3.55. Gauti tik tekstus (string), kurie turi mažiau nei 7 simbolius.
let task55 = arr.filter(function(num) {
    return isNaN(num) && num.length < 7
})
console.log(task55)

// 3.56. Gauti tik tekstus (string), kurie turi raidę t.
let task56 = arr.filter(function(num) {
    return isNaN(num) && num.includes('t')
})
console.log(task56)

// 3.57. Gauti tik tekstus (string), kurie turi raidę y.
let task57 = arr.filter(function(num) {
    return isNaN(num) && num.includes('y')
})
console.log(task57)

// 3.58. Gauti tik tekstus (string), kurie turi raides e arba a.

// 3.59. Gauti tik tekstus (string), kurie turi raides t ir i.
let task59 = arr.filter(function(num) {
    return isNaN(num) && num.includes('t') && num.includes('i')
})
console.log(task59)

// 3.60. Gauti tik tekstus (string), kurie turi raide t, bet neturi raidės k.
let task60 = arr.filter(function(num) {
    return isNaN(num) && num.includes('t') && !num.includes('k')
})
console.log(task60)

// 3.61. Gauti tik tekstus (string), kurie turi raide a, bet neturi raidės s.
let task61 = arr.filter(function(num) {
    return isNaN(num) && num.includes('a') && !num.includes('s')
})
console.log(task61)

// 3.62. Gauti tik tekstus (string), kurie turi daugiau nei vieną raidę t.


// 3.63. Gauti tik tekstus (string), kurie turi raidžių junginį st.
let task63 = arr.filter(function(num) {
    return isNaN(num) && num.includes('st')
})
console.log(task63)

// 3.64. Gauti tik tekstus (string), kurie turi raidžių junginį nd.
let task64 = arr.filter(function(num) {
    return isNaN(num) && num.includes('nd')
})
console.log(task64)

// 3.65. Gauti tik tekstus (string), kurie neturi raidės s.
let task65 = arr.filter(function(num) {
    return isNaN(num) && !num.includes('s')
})
console.log(task65)

// 3.66. Gauti tik tekstus (string), kurie neturi raidės t.
let task66 = arr.filter(function(num) {
    return isNaN(num) && !num.includes('t')
})
console.log(task66)

// 3.67. Gauti tik tekstus (string), kurie neturi raidės r ir l.
let task67 = arr.filter(function(num) {
    return isNaN(num) && !num.includes('r') && !num.includes('l')
})
console.log(task67)

// 3.68. Gauti tik tekstus (string), kurie prasideda skaičiumi.
let task68 = arr.filter(function(num) {
    return isNaN(num) && /^\d/.test(num)
})
console.log(task68)

// 3.69. Gauti tik tekstus (string), kurie prasideda raide s.
let task69 = arr.filter(function(num) {
    return isNaN(num) && num.startsWith('s')
})
console.log(task69)

// 3.70. Gauti tik tekstus (string), kurie prasideda raide o.
let task70 = arr.filter(function(num) {
    return isNaN(num) && num.startsWith('o')
})
console.log(task70)

// 3.71. Gauti tik tekstus (string), kurie baigiasi raide d.
let task71 = arr.filter(function(num) {
    return isNaN(num) && num.endsWith('d')
})
console.log(task71)

// 3.72. Gauti tik tekstus (string), kurie baigiasi raide s.
let task72 = arr.filter(function(num) {
    return isNaN(num) && num.endsWith('s')
})
console.log(task72)

// 3.73. Gauti tik tekstus (string), kurie turi daugiau nei 4 simbolius ir turi raidę o.
let task73 = arr.filter(function(num) {
    return isNaN(num) && num.length > 4 && num.includes('o')
})
console.log(task73)

// 3.74. Gauti tik tekstus (string), kurie turi daugiau arba lygiai 5 simbolius ir turi raidę a.
let task74 = arr.filter(function(num) {
    return isNaN(num) && num.length >= 5 && num.includes('a')
})
console.log(task74)

// 3.75. Gauti tik tekstus (string), kurie turi porinį simbolių skaičių.
let task75 = arr.filter(function(num) {
    return isNaN(num) && num.length % 2 === 0
})
console.log(task75)

// 3.76. Gauti tik tekstus (string), kurie turi neporinį simbolių skaičių ir turi raidę s.
let task76 = arr.filter(function(num) {
    return isNaN(num) && num.length % 2 !== 0 && num.includes('s')
})
console.log(task76)

// 3.77. Gauti tik tekstus (string), kurių trečias simbolis yra a.
let task77 = arr.filter(function(num) {
    return isNaN(num) && num[2] === 'a'
})
console.log(task77)

// 3.78. Gauti tik tekstus (string), kurių ketvirtas simbolis yra l.
let task78 = arr.filter(item => isNaN(item) && item[3] === 'l')
console.log(task78)

// 3.79. Gauti tik tekstus (string), kurių penktas simbolis nėra t ir kurie turi daugiau simbolių nei 4.
let task79 = arr.filter(item => isNaN(item) && item[4] !== 't' && item.length > 4)
console.log(task79)

// 3.80. Gauti tik tekstus (string), kurių pirmas simbolis nėra e, kurie turi mažiau simbolių nei 6 ir kurie neprasideda skaičiumi.

let task80 = arr.filter(item => isNaN(item) && item[0] !== 'e' && item.length < 6 && isNaN(item[0]));
console.log(task80)
