## Mais uma semana de estudos com NLW#3
Nesta maratona eu revitei vários conteúdo novos e aprendi muita coisa nova.

## Desafio de nova feature

Depois de uma pesquisa com alguns possíveis usuário para a ferramenta, foi identificada a  necessidade de uma maneira de buscar os endereços através de uma barra de buscas.
Dessa forma eu aprendi a criar uma chave de api na google,como eu iniciei meu projeto no expo por bare workflow, fui capaz de configurar a chave corretamente.
As feeatures foram testadas somente no android.

## Próximas features
[] Adicionar um .env para variáveis anbiente e chaves de api.
[] Adicionar login e senha para a aplicação;
        Estes serão tanto para pessoas, quanto para instituições;
        Já as instuições terão seus cadastros aprovados somente após a checagem das suas documentações;
[] Criar campos diferentes para cadastrar visitantes e instituições;
[] Cadastro pra instituições:
    [] Campos para adicionar arquivos, onde serão enviados os documentos da instituição, após o cadastro será possivel adionar informações de visitação;
[] Criação do dashboard para adminitrar cadastros;
[] No dashboard assim que for cadastrado uma nova instituição, somente o administrador do app poderá aceitar o cadastro, uma vez que forem confirmadas as documentações da instituição.

## Observações

Para o APP, adionar a chave de api na pasta de codigo nativo do android e ios, mais informações de em quais arquivos tem que adiconar a chave podem ser encontradas na pagina do react-native-google-places-autocomplete.
Na pasta de componentes, no arquivo SearchBar.ts tem um capo para adionar a chave de api.

Eu não adicionei variáveis ambientes para lidar com esses casos, uma vez que meu tempo para fazer a NLW foi muito curto e entrequei o desafio em cima da hora. Logo os arquivos esrtão com as chaves, que eu já exclui. A busca só funciona com a chave.
