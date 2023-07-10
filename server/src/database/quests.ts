/* eslint-disable prettier/prettier */
const data = {
  easy: [
    {
      id: 1,
      quest: '120 + 43 = ?',
      alternatives: ['163', '153', '160', '164'],
      response: '163'
    },
    {
      id: 2,
      quest: '97 + ? = 210',
      alternatives: ['113', '110', '23', '112'],
      response: '113'
    },
    {
      id: 3,
      quest: '57 - 19 = ?',
      alternatives: ['38', '58', '85', '35'],
      response: '38'
    },
    {
      id: 4,
      quest: '77 + 33 = ?',
      alternatives: ['110', '100', '210', '120'],
      response: '110'
    },
    {
      id: 5,
      quest: '88 - 122 = ?',
      alternatives: ['-34', '34', '-36', '-44'],
      response: '-34'
    },
    {
      id: 6,
      quest: '240 x 24 = ?',
      alternatives: ['5760', '4800', '5746', '5800'],
      response: '5760'
    },
    {
      id: 7,
      quest: '1080 / 40 = ?',
      alternatives: ['27', '20', '57', '26'],
      response: '27'
    },
    {
      id: 8,
      quest: '1257 / ? = 419',
      alternatives: ['3', '5', '7', '6'],
      response: '3'
    },
    {
      id: 9,
      quest: '(14 x 8) + (1440 / 2 ) = ?',
      alternatives: ['832', '830', '745', '945'],
      response: '832'
    },
    {
      id: 10,
      quest: 'Tendo: 5(x + 4) + 18 = 2(x + 40), determine o valor de x',
      alternatives: ['14', '16', '12', '10'],
      response: '14'
    },
  ],
  medium: [
    {
      id: 1,
      quest: 'Calcule o valor da área e do perímetro',
      uri: 'http://gustavosalles13.atwebpages.com/game/img/1.png',
      alternatives: [
        'Área = 900m ; Perímetro = 120m',
        'Área = 120m ; Perímetro = 900m',
        'Área = 900m ; Perímetro = 900m',
        'Área = 120m ; Perímetro = 2700m'
      ],
      response: 'Área = 900m ; Perímetro = 120m'
    },
    {
      id: 2,
      quest: 'Calcule o valor de a',
      uri: 'http://gustavosalles13.atwebpages.com/game/img/2.png',
      alternatives: ['10', '28', '30', '12'],
      response: '10'
    },
    {
      id: 3,
      quest: 'Considerando π = 3,14, calcule a circunferência do círculo apresentado',
      uri: 'http://gustavosalles13.atwebpages.com/game/img/3.png',
      alternatives: ['62,8cm', '61,4cm', '31,4cm', '32,4cm'],
      response: '62,8cm'
    },
    {
      id: 4,
      quest: 'Calcule o valor abaixo',
      uri: 'http://gustavosalles13.atwebpages.com/game/img/4.png',
      alternatives: ['5', '15', '6', '12'],
      response: '5'
    },
    {
      id: 5,
      quest: 'Determine a solução da equação de segundo grau  x² – x – 12 = 0. (Considere Δ = 49)',
      alternatives: [
        'x1 = 4; x2 = -3',
        'x1 = -3; x2 = 4',
        'x1 = -4; x2 = 3',
        'x1 = -5; x2 = -4'
        ],
      response: 'x1 = 4; x2 = -3'
    },
    {
      id: 6,
      quest: 'Calcule o a seguinte expressão numérica: (25 + 6)²',
      alternatives: ['961', '860', '960', '1061'],
      response: '961'
    },
    {
      id: 7,
      quest: 'Indique qual é a simplificação mais adequada de √200',
      alternatives: ['10√2', '10', '20√2', '100 x 2'],
      response: '10√2'
    },
    {
      id: 8,
      quest: 'Calcule o 8° termo da P.A.: (26, 31, 36, 41, ...)',
      alternatives: ['61', '51', '53', '67'],
      response: '61'
    },
    {
      id: 9,
      quest: 'Considerando a seguinte equação: -x² -4x +5 = 0, determine o valor de suas raízes',
      alternatives: [
        'x1 = -5; x2 = 1',
        'x1 = 1; x2 = 5',
        'x1 = 1; x2 = -5',
        'x1 = -5; x2 = -4'],
      response: 'x1 = -5; x2 = 1'
    },
    {
      id: 10,
      quest: 'Calcule o seguinte logaritmo: log2 (32 x 4)',
      alternatives: ['7', '8', '128', '2³'],
      response: '7'
    },
  ],
  hard: [
    {
      id: 1,
      quest: 'Pedro jogou um dado 3 vezes, a probabilidade de ele tirar um número menor que 3 todas as vezes é aproximadamente:',
      alternatives: [
        '3,7%',
        '33,33%',
        '13,33%',
        '7,3737%'
      ],
      response: '3,7%'
    },
    {
      id: 2,
      quest: 'João foi trabalhar de carro 5 dias seguidos, e percorreu 80 Km nesse periodo, sabendo que o preço da gasolina é de 7,00 R$ o litro, e que esse carro percorre 4Km por litro, quantos reais ele gastou com gasolina por dia?',
      alternatives: ['R$28', 'R$34', 'R$24', 'R$38'],
      response: 'R$28'
    },
    {
      id: 3,
      quest: 'Ao jogar cara ou coroa com um amigo, Marcelo estava ganhando com 5 pontos de vantagem, a chanse de Carlos empatar o jogo em 5 rodadas é de aproximadamente:',
      alternatives: ['3%', '0,7%', '7%', '0,3%'],
      response: '3%'
    },
    {
      id: 4,
      quest: 'Em uma escola com 1.200 alunos foi realizada uma pesquisa sobre o conhecimento desses em duas línguas estrangeiras: inglês e espanhol. Nessa pesquisa constatou-se que 600 alunos falam inglês, 500 falam espanhol e 300 não falam qualquer um desses idiomas. Escolhendo-se um aluno dessa escola ao acaso e sabendo-se que ele não fala inglês, qual a probabilidade de que esse aluno fale espanhol?',
      alternatives: ['1/2', '5/8', '1/4', '5/6'],
      response: '1/2'
    },
    {
      id: 5,
      quest: 'Duas máquinas A e B de modelos diferentes, mantendo cada qual sua velocidade de produção constante, produzem juntas n peças iguais, gastando simultaneamente 2 horas e 40 minutos. A máquina A funcionando sozinha, mantendo sua velocidade constante, produziria, em 2 horas de funcionamento, n/2 dessas peças. É correto afirmar que a máquina B, mantendo sua velocidade de produção constante, produziria também n/2 dessas peças em:',
      alternatives: [
        '3.024 senhas',
        '1.498 senhas',
        '2.738 senhas',
        '4.256 senhas'
        ],
      response: '3.024 senhas'
    },
    {
      id: 6,
      quest: 'Um técnico de um time de voleibol possui a sua disposição 15 jogadores que podem jogar em qualquer posição. De quantas maneiras ele poderá escalar seu time de 6 jogadores?',
      alternatives: [
        '240 minutos',
        '40 minutos',
        '120 minutos',
        '160 minutos'],
      response: '240 minutos'
    },
    {
      id: 7,
      quest: 'Uma indústria tem um reservatório de água com capacidade para 900 m3. Quando há necessidade de limpeza do reservatório, toda a água precisa ser escoada. O escoamento da água é feito por seis ralos, e dura 6 horas quando o reservatório está cheio. Esta indústria construirá um novo reservatório, com capacidade de 500 m3, cujo escoamento da água deverá ser realizado em 4 horas, quando o reservatório estiver cheio. Os ralos utilizados no novo reservatório deverão ser idênticos aos do já existente. A quantidade de ralos do novo reservatório deverá ser igual a:',
      alternatives: [
        '5.005 maneiras',
        '4.450 maneiras',
        '5.210 maneiras',
        '4.500 maneiras'],
      response: '5.005 maneiras'
    },
    {
      id: 8,
      quest: 'Uma equipe de trabalho é formada por 6 mulheres e 5 homens. Eles pretendem se organizar em grupo de 6 pessoas, com 4 mulheres e 2 homens, para compor uma comissão. Quantas comissões podem ser formadas?',
      alternatives: ['5', '2', '4', '8'],
      response: '5'
    },
    {
      id: 9,
      quest: 'Quantas comissões de 4 elementos podemos formar com 20 alunos de uma turma?',
      alternatives: [
        '150 comissões',
        '100 comissões',
        '250 comissões',
        '200 comissões',
        ],
      response: '150 comissões'
    },
    {
      id: 10,
      quest: 'Uma lanchonete tem uma promoção de combo com preço reduzido em que o cliente pode escolher 4 tipos diferentes de sanduíches, 3 tipos de bebida e 2 tipos de sobremesa. Quantos combos diferentes os clientes podem montar?',
      alternatives: [
        '24 combos',
        '30 combos',
        '22 combos',
        '34 combos',
      ],
      response: '24 combos'
    },
  
  ]
}

export default data
