# QAgibank

## 📌 Sobre o projeto

O projeto está  preparado para concentrar as automações do projeto QAgibank:

- Web
- API
- Performance

## 🗂 Estrutura do projeto

```text
.
├── api/
├── performance/
├── web/
│   ├── pages/
│   ├── test-data/
│   ├── tests/
│   ├── package.json
│   └── playwright.config.js
├── .github/workflows/
└── .gitlab/ci/
```

## 🌐 Automação web


Estrutura básica:

- `web/tests/`: arquivos de teste
- `web/pages/`: page objects
- `web/test-data/`: massa de dados usada nos testes
- `web/playwright.config.js`: configuração do Playwright

## 🔌 Automação de API

Os testes de API estão dentro da pasta `api/` e foram desenvolvidos com Playwright JS para validar a Dog CEO API.

Estrutura básica:

- `api/tests/`: arquivos de teste dos endpoints
- `api/playwright.config.js`: configuração do Playwright para API

Endpoints cobertos:

- `GET /breeds/list/all`
- `GET /breed/{breed}/images/random`
- `GET /breeds/image/random`


## ⚙️ O que precisa para rodar

É necessário que tenha instalado na máquina:

- Node.js 18 ou superior
- npm 9 ou superior

Pode ser verificado executando estes comandos no terminal:

```bash
node -v
npm -v
```

## 🚀 Preparando o ambiente

### Web

```bash
cd web
npm install
npx playwright install chromium
```

### API

```bash
cd api
npm install
```


## ▶️ Executando os testes web

Entre na pasta `web` e executando o comando:

```bash
cd web
```

Comando para executar os cenarios:

```bash
npm test
```


Abrir a interface do Playwright:

```bash
npm run test:ui
```

Abrir o relatório HTML após a execução:

```bash
npm run report
```

## ▶️ Executando os testes de API

Entre na pasta `api` e executando o comando:

```bash
cd api
```

Para rodar os testes :

```bash
npm test
```


Abrir o relatório HTML após a execução:

```bash
npm run report
```


## 🧪 Cenários cobertos 

Atualmente a automação web cobre os cenários de busca no Blog do Agibank:

- Busca passando uma pesquisa válida
- Busca passando uma pesquisa inválida

A automação de API cobre os cenários:

- listagem completa de raças
- consulta de imagem aleatória de pastor australiano
- obtenção de imagem aleatória
- erro para raça inexistente
- erro para URL inválida


## 🔁 CI/CD

O projeto já possui configuração de pipeline para executar os testes:

- GitHub Actions Web: [.github/workflows/playwright.yml](QAgibank/.github/workflows/playwright.yml)
- GitHub Actions API: [.github/workflows/api-playwright.yml](QAgibank/.github/workflows/api-playwright.yml)






## 🚀 Automação de Performance


Os cenarios de performance utilizam o Apache JMeter. Garanta que o `jmeter` esteja instalado e disponivel no terminal antes de executar os arquivos `.jmx`.
Arquivos simples em JMeter para mostrar um primeiro contato com teste de performance.

## Arquivos

- `performance/blazedemo-carga.jmx`
- `performance/blazedemo-pico.jmx`

## Ideia

- Cenário: compra de passagem no BlazeDemo
- Carga: 250 requisições por segundo
- Pico: 400 requisições por segundo
- Modelo simples, com dados fixos e sem validações

## Como rodar

```bash
jmeter -n -t performance/blazedemo-carga.jmx -l performance/resultados-carga.csv
```

```bash
jmeter -n -t performance/blazedemo-pico.jmx -l performance/resultados-pico.csv
```




## 📝 Observação
O teste de performance foi montado para conhecimento e entrega do requisito do teste. A automacao reflete meu potencial de aprendizado e evolução contínua na área.
