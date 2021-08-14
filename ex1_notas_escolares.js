//Notas escolares

//Pedro

function changeGrade(oldgrade) {

    let newgrade;

    switch (true) {
        case (oldgrade >= 90 && oldgrade <= 100):
            newgrade = "A"
            break
        case (oldgrade >= 80 && oldgrade < 89):
            newgrade = "B"
            break
        case (oldgrade >= 70 && oldgrade < 79):
            newgrade = "C"
            break
        case (oldgrade >= 60 && oldgrade < 69):
            newgrade = "D"
            break
        case (oldgrade < 60):
            newgrade = "F"
            break
        default:
            console.log('Valor não implementado')
    }
    return newgrade
}

console.log(changeGrade(99))

//RS - Gabarito

function getScore(score) {

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;

    if (scoreA) {
        socreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota inválida"
    }

    return scoreFinal
}
console.log(getScore(79))