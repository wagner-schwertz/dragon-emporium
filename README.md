# DRAGON EMPORIUM

Esta aplicação foi desenvolvida como parte do processo seletivo para Desenvolvedor Front-End na South System

## Como rodar

Primeiramente é preciso garantir que o usuário tenha instalado em sua máquina a versão LTS do Node e Git. Em seguida o usuário deve abrir o terminal
e executar os seguintes comandos:

`git clone https://github.com/wagner-schwertz/dragon-emporium.git`

`cd dragon-emporium`

`npm install`

`npm start`

## Soluções adotadas

### Framework

`create-react-app` segue sendo o melhor para o que faz(SPA), e por isso foi a ferramenta adotada.

### Estilização

O que não falta no ecossistema javascript hoje em dia são soluções de estilização. Nos últimos anos CSS-in-JS vem ganhando tração por ser uma solução extremamente flexível capaz de suprir todas as necessidades enquanto também resolve o problema de escopo do CSS vanilla. Nada contra a forma tradicional de escrever estilos, inclusive gosto bastante de SASS, mas para este projeto específico optei pelo `styled-components`. Por quê? Porque essa biblioteca combinada com a `polished` oferece uma possibilidade infinita de customização. Isso fica evidente nessa aplicação onde os temas foram todos montados à partir de 2 cores base utilizando as funções de utilidade do polished para manipulação de cor.

### Estado

Nessa aplicação optei pela mistura de estado local com estado global. Por quê? Honestamente nunca fez sentido pra mim manter todo o estado da aplicação numa store, incluindo informações que não precisariam ser compartilhadas entre siblings (olhando pra ti, isLoading). Fico aliviado de que mais recentemente a comunidade tenha movido do redux para outras soluções mais modernas que oferecem mais produtividade. Nada errado com redux, mas a dança da chuva que ele enforça pode ser um impeditivo pra quando se quer desenvolver com mais celeridade.
Nessa aplicação a solução adotada foi o `zustand`. Hoje em dia existem mais bibliotecas de gerenciamento de estado do que eu possa contar. Por que escolhi essa? Porque 1. queria algo diferente de redux; 2. Queria algo diferente de context; 3. Queria algo que tivesse alguma semelhança com redux: leia-se estado residindo fora da árvore de renderização do React e padrão de actions (mesmo que inifinitamente mais casual que no redux). A melhor parte disso é que a biblioteca é imbatível em termos de bundle size, pesando menos de 800 BYTES gzipada.

### Requisições HTTP

O bom e velho `axios` nunca decepciona. Hoje em dia não sei nem por que existem outras soluções.

### Animação

Animações são delicadas. se por um lado o #react spring# faz tudo com facilidade, o `framer-motion` faz tudo isso e ainda serve café (mas ainda não descobri como). Só gostaria que a documentação cobrisse um maior número de casos. Oh well.

### Formulários

Sem dúvida `react-hook-form` é a solução mais performática hoje por não forçar um render cada vez que o usuário digita uma letra. Essa biblioteca foi perfeita pra essa aplicação por usar inputs tradicionais. Me sinto, entretanto, obrigado a colocar a cara a tapa e dizer: react-hook-form é maravilhoso, mas pra inputs controlados ele se torna bem menos prático que o velho formik.

### Toast

Sempre advocarei a favor do react-toastify, mas dessa vez a solução foi nativa: Optei por fazer um toaster bem simples, que não empilha notificações, não persiste no hover e não é fechável, mas ainda assim cumpriu muito bem seu papel.

### Rotas

Bem como o axios, o `react-router-dom` faz com que eu me questione por que existiriam outras soluções de roteamento se essa é tão maravilhosa.

### Testes

Enzyme teve seu tempo, mas desde que os hooks chegaram ele se tornou cada vez mais defasado. Acredito que hoje em dia nem o time de desenvolvimento do react recomende mais essa ferramenta, por isso vejo cada vez mais o `@testing-library/react` se tornando a ferramenta padrão pra testes.

### Server Mock

Existiam basicamente 3 soluções possíveis: JSON Server, msw e `mirage-js`. Dessa vez eu escolhi a última. Honestamente não sei se escolheria ela de novo, porque o msw parece mais 'monkey-patch' porque ele intercepta requests a nível de conexão e não a nível de browser. Eu sei que o mirageJS oferece mais ferramentas pra montar um backend completo de mentirinha, mas acabei nem usando essas funcionalidades. De qualquer forma, `mirage-js` foi minha escolha (por bem ou por mal).

### Internacionalização

Na triste dúvida entre react-intl e i18next-react optei pelo `i18next-react` pelo simples fato de ter me parecido uma solução mais atual, melhor mantida e com uma documentação de causar inveja.
