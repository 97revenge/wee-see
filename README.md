# wee-see

## a web app that maintains a feed where brands and companies can announce marketing campaign plans, such as posts and short videos.

## where the content creator could have the option to accept this campaign, follow the steps and send it to be posted along with that product x (product id, product link).

## web by web

```text

`Pensa em um feed onde pessoas compartilham mensagems e republicam mensagens muito parecido com o threats ou o twitter/x, mas focado em parcerias entre criadores de conteudo e empresas produtos do tik tok shop`


`uma plataforma que conecta criadores de conteúdos a produtos do tik tok shop. Um feed de publicidades onde criadores preenchem formularios com videos testes, videos da propaganda, e aguardam a aprovação da empresa. com a empresa aprovando o que recebeu do criador de conteudo. o valor é pago na wallet do  criador , e possivelmente já postado ou agendado post para a empresa.`


`podemos pegar todo o user flow de um pull request no github , onde um usuario precisaria avaliar o conteudo que foi proposto. O avaliador pode negar este pull request e tambem aprovar. A partir daí pensamos assim :
uma empresa precisa de uma campanha rapida e facil sobre um produto no tik tok shop.
a empresa posta um anuncio no wee see dizendo que quer um anuncio singelo e dinamico sobre o seu produto, baseado em 3 etapas : 2 textos cativantes, e um video do criador de conteudo dizendo isso.
o criador de conteudo aceita aquela campanha, mas isso nao significa que ele foi aprovado.
o criador de conteudo cumpre as 3 etapas , e envia para a empresa a sua resposta.
a empresa avalia sua proposta dentro da plataforma
a empresa baixa todo o  conteúdo daquela campanha porem ela tambem pode postar automaticamente pela API do tik tok.
o valor negociado entre os ambos vai para a wallet do criador de conteúdo.

`

`NESCESSIDADE DO MERCADO:
Um dos tópicos que surgiram foi o desafio de gerenciar a comunicação entre vendedor e criador, com vários criadores destacando áreas para melhoria. Existem simplesmente tantas oportunidades que "tentar pesquisar minhas mensagens no TikTok [Shop] é impossível", compartilhou um criador. Outro criador admitiu ter mudado sua abordagem e começado com a descoberta de produtos, dizendo: "Não leio mais minhas mensagens [de criador]". Essas admissões sinceras ressaltam uma oportunidade para os desenvolvedores ajudarem construindo soluções que agilizam as comunicações para todas as partes.

escoberta de produtos surgiu como outra área de oportunidade. Os criadores enfatizaram a importância de encontrar produtos que ressoem com seus dados demográficos de público específicos. Um participante observou: "meu público é mais de nicho, então geralmente procuro produtos que ressoem com mulheres na faixa dos quarenta e cinquenta anos". Isso destacou a chance para os desenvolvedores encontrarem melhores maneiras de compartilhar que o produto de um vendedor se alinha com o público de um criador.

A mesa redonda também revelou entusiasmo sobre o potencial de parcerias de longo prazo entre criadores e marcas. Os criadores expressaram um desejo por ferramentas que pudessem ajudá-los a construir e gerenciar esses relacionamentos de forma mais eficaz, vendo-os como a chave para o sucesso sustentável na plataforma.

Conforme as discussões foram concluídas, tanto desenvolvedores quanto criadores saíram se sentindo energizados sobre o futuro. Brent, da Social Snowball, resumiu o sentimento, observando: "Como desenvolvedor, sou realmente grato por todo o feedback aberto que ouvi. Isso é incrível." Está claro que há uma riqueza de oportunidades para soluções inovadoras que podem abordar esses desafios e levar o ecossistema de afiliados da TikTok Shop a novos patamares.

LINK:https://developers.tiktok.com/blog/2024-tiktok-shop-affiliate-apis-launch-developer-opportunity
`



```

### tech stack

- [high importance]

##### zod

##### auth.js/nextAuthV5

##### Tik Tok API (Login Kit & Display)

#### prisma

#### stripe

#### jwt

- [mid importancia]

#### swr

#### nemo

- [less importance]

#### zigma (extreme potential)

#### v0.dev

#### shadcn-ui

#### magic-ui

#### framer-motion

####

rodmap

-[x] application setup

- [] middleware implementation (sign/login, )
- [] oAuth with auth.js (tik tok provider)
- [] sandbox tests

- [] API production deployment
