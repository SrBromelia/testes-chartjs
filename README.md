# Protótipo Gráfico Interativo
### O que ele faz:
 - Cria uma tabela, com cabeçalho e corpo modificáveis, a partir de um Objeto JavaScript
 - Permite que a tabela seja utilizada por mais de um dos gráficos
### O que ele não faz:
 - Mostra um modal contendo a tabela com os dados(não sei fazer um modal e o bootstrap não cooperou)
 - Preenche os dados numéricos do gráfico

 ## Arquivos relevantes:
  - chart.js: Script contendo a função reponsável que cria e popula o gráfico
  - meta_chart.js: JS contendo objetos que passam os dados de cada gráfico/banco
  - test.rb/another_test.rb: Classe Model de uma Tabela de Testes. Contém os scopes:  
    - type: recebe um ou mais valores obj_type e retorna todos os valores que os possuem(retorna os valores para popular a tabela)
    - grouped: Faz uma query group_by que recebe como entrada e retorna um Hash de chave-valor contendo o valor e sua frequência(a intenção era usar para criar o gráfico)