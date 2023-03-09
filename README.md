## Configurando em produção (estático)

Será necessário informar as variáveis de EmailJS e RECAPTCHA antes de gerar o site:

1. Duplicar o arquivo .env.example e renomear para .env.local
2. Definir as variáveis abaixo:

```bash
# EMAILJS
NEXT_PUBLIC_SERVICE_ID=
NEXT_PUBLIC_TEMPLATE_ID=
NEXT_PUBLIC_USER_ID=
# RECAPTCHA
NEXT_PUBLIC_CAPTCHA_SITEKEY=
```

3. Executar o seguinte comando no terminal para gerar o site estático:

```bash
npm run export
# ou
yarn export
```

Será gerado na pasta out

## Iniciando o projeto (DEV)

Primeiro, execute o seguinte comando para iniciar o servidor:

```bash
npm run dev
# ou
yarn dev
```

O projeto será iniciado em [http://localhost:3000](http://localhost:3000) e você poderá ver no browser.
