function gen_chart(element, metadata) {
    var ctx = document.getElementById(element);
    
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
            onClick: function(event, object) {
                var curr = object[0]._index;
                var params = {
                    group: metadata.options[curr],
                    table: metadata.table_name,
                    column: metadata.group_column
                }

                $.post('type', params, function(type) {

                    $('#ap-test').html('<table><thead>');
                    $.each(metadata.human_attributes, function(key, value) {
                        $('#ap-test').append('<th>' + value + '</th>');
                    })
                    $('#ap-test').append('</thead><tbody>');

                    $.each(type[0], function(key, value) {
                        var str = '<tr>';

                        $.each(metadata.attributes, function(k, v) {
                            str += '<td>' + value[v] + '</td>'
                        })
                        str += '</tr>';

                        $('#ap-test').append(str);

                    })

                    $('#ap-test').append('</tbody></table>');
                })
            } //
        }
    });
}