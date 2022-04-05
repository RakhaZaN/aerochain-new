google.charts.load("current", {
    packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    const data = google.visualization.arrayToDataTable([
        ['Tokenomics', 'percent'],
        ['Dev Wallet', 5],
        ['Marketing wallet', 5],
        ['RnD wallet', 5],
        ['Burn', 10],
        ['Presale', 38],
        ['Private', 10],
        ['Add supply & LP', 27]
    ]);

    var options = {
        title: '',
        pieHole: 0.5,
        height: 250,
        backgroundColor: 'none',
        colors: ['#f97316', '#facc15', '#c084fc', '#fb923c', '#7e22ce', '#fbbf24', '#9333ea'],
        chartArea: {
            left: 0,
            top: 0,
            width: '100%',
            height: '90%',
        },
        legend: {
            position: 'right',
            textStyle: {
                color: 'white',
                // fontSize: 16
            },
        },
    };

    var chart = new google.visualization.PieChart(document.getElementById('pie'));
    chart.draw(data, options);
}