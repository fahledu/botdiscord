# Bot para discord em nodejs

## Pré requisitos

- Crie uma conta no [Discord](https://discord.com/)
- Acesse o [Discor para desenvolvedores](https://discord.com/developers)
    - Clique em new application, informe um nome para seu bot, aceite os termos e clique em create
    - No menu lateral, vá em bot, clique em reset token para gerar sua chave
    - Em bot permissins selecione Administrator
    - Em Privileged Gateway Intents habilite o ``PRESENCE INTENT`` e ``MESSAGE CONTENT INTENT``

    - Vá em OAuth2
        - Em OAuth2 URL Generator selecine bot
        - Em BOT PERMISSIONS selecione Administrator
        - Copie a URL que foi gerado em GENERATED URL
        - Cole no seu navegador
            - Selecione o servidor que o bot deve acesasr e clique em continuar
            - Confirme se as permisões estão corretas e clique em autorizar


## Instale as dependencias

``npm install discord``

``npm install dotenv``

## Configurando o dotenv

- Crie um arquivo .env com o conteudo:

```
DISCORD_TOKEN = 'SEU_AUTH_TOKEN'
```
