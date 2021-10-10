renderOccupiedParking();

function renderOccupiedParking() {
    const labels = ["First quarter", "Second quarter", "Third quarter", "Fourth quarter"]
    const data = {
        labels: labels,
        datasets: [{
            data: [3000, 4000, 3800, 3500],
            backgroundColor: [
                '#f8aa4b',
                '#ff6150',
                '#54d2d2',
                '#ffcb00',
            ],
            borderColor: [
                '#f8aa4b',
                '#ff6150',
                '#54d2d2',
                '#ffcb00',
            ],
            borderWidth: 1
        }],
    };
    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    suggestedMin: 0,
                    suggestedMax: 4500,
                    // title: {
                    //     display: true,
                    //     text: "Total",
                    //     font: {
                    //         size: 18
                    //     },
                    //     padding: 20
                    // },
                    // ticks: {
                    //     stepSize: 500
                    // }
                }
            },
            plugins: {
                // title: {
                //     display: true,
                //     text: 'The number of parking Spaces occupied in 2020',
                //     font: {
                //         size: 24
                //     },
                //     padding: 40
                // },
                legend: {
                    display: false
                }
            },
        }
    };
    var myChart = new Chart(
        document.getElementById('chartParking'),
        config
    );
}