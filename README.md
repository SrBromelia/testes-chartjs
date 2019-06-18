# Protótipo Gráfico Interativo
### O que ele faz:
 - Preenche uma tabela com dados recebidos de um Json, este que por sua vez foi gerado a partir de Dados do Banco
### O que ele não faz:
 - Mostra um modal contendo a tabela com os dados(não sei fazer um modal e o bootstrap não cooperou)
 - Generalizar a tabela
 - Preenche os dados numéricos do gráfico

 ## Arquivos relevantes:
  - chart.js: Script que cria e popula o gráfico
  - test.rb: Classe Model de uma Tabela de Testes. Contém os scopes:  
    - type: recebe um ou mais valores obj_type e retorna todos os valores que os possuem(retorna os valores para popular a tabela)
    - grouped: Faz uma query group_by que recebe como entrada e retorna um Hash de chave-valor contendo o valor e sua frequência(a intenção era usar para criar o gráfico)