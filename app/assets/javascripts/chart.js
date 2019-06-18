function click_func(event, object) {
    var curr = object[0]._index;
    var params = {
        group: curr,
    }

    $.post('type', params, function(type) {

        $('#ap-test').html('');

        $.each(type[0], function(key, value) {
            var str = '<tr>';
            str += '<td>'+value.id+'</td>';
            str += '<td>'+value.name+'</td>';
            str += '</tr>';

            $('#ap-test').append(str);

            console.log(str);
        })
    })
}

function gen_chart() {
    var ctx = document.getElementById('myChart');
    
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Normal', 'Regular', 'Crítico', 'Atrasado'],
            datasets: [{
                data: [5, 5, 5, 5],
                backgroundColor: [
                    'rgba(0,255,0,0.8)',
                    'rgba(255,255,0,0.8)',
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(255,0,0,0.8)'
                ],
                borderColor: [
                    'rgba(64, 64, 64, 1)',
                    'rgba(64, 64, 64, 1)',
                    'rgba(64, 64, 64, 1)',
                    'rgba(64, 64, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: { 
            rotation: Math.PI,
            circumference: Math.PI,
            onClick: click_func
        }
    });
}