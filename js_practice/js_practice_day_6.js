let n = Number(prompt("enter a no."))

function matrix(n) {
    for (let i = 1; i <= n; i++) {

        let row = ""

        for (let j = 1; j <= n; j++) {

            if (i === 1 || i === n || j === 1 || j === n) {
                row = row + "* "
            } else {
                row = row + "  "
            }

        }

        console.log(row)
    }
}

matrix(n)
