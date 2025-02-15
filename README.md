# comandos-git
Lista dos principais comandos do GIT (Ordem Alfabética).

| Comando                        | Uso Principal                                                                 | O que Faz                                                                 |
|--------------------------------|-------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| `git add <arquivo>`            | Adicionar arquivos ao staging area                                           | Prepara as alterações para o próximo commit.                             |
| `git bisect`                   | Encontrar o commit que introduziu um bug                                     | Realiza uma busca binária no histórico para identificar um commit problemático. |
| `git blame <arquivo>`          | Verificar quem modificou cada linha de um arquivo                            | Mostra o autor e o commit de cada linha de um arquivo.                   |
| `git branch`                   | Listar, criar ou deletar branches                                            | Lista todos os branches ou cria/deleta um branch específico.             |
| `git branch -d <branch>`       | Deletar um branch local                                                     | Remove um branch local, desde que ele já tenha sido mesclado.            |
| `git branch -D <branch>`       | Forçar a deleção de um branch local                                         | Remove um branch local, mesmo que não tenha sido mesclado.               |
| `git checkout <branch>`        | Mudar para um branch específico                                              | Altera o branch atual para o branch especificado.                        |
| `git checkout -b <novo-branch>`| Criar e mudar para um novo branch                                            | Cria um novo branch e muda para ele.                                     |
| `git cherry-pick <commit>`     | Aplicar um commit específico de outro branch                              | Aplica as alterações de um commit específico no branch atual.            |
| `git clean -f`                 | Remover arquivos não rastreados                                              | Remove arquivos não rastreados do diretório de trabalho.                 |
| `git clone <url>`              | Clonar um repositório remoto                                                 | Copia um repositório remoto para o diretório local.                      |
| `git commit -m "msg"`          | Criar um commit com as alterações                                            | Salva as alterações no repositório com uma mensagem descritiva.          |
| `git config`                   | Configurar opções do Git                                                     | Define configurações do Git, como nome de usuário e email.               |
| `git diff`                     | Verificar diferenças entre arquivos                                          | Mostra as diferenças entre arquivos no diretório de trabalho e staging.  |
| `git fetch`                    | Buscar alterações do repositório remoto                                      | Atualiza as referências do repositório local com as do remoto.           |
| `git grep <padrão>`            | Buscar texto no repositório                                                  | Procura por padrões de texto nos arquivos do repositório.                |
| `git init`                     | Inicializar um repositório Git                                               | Cria um novo repositório Git no diretório atual.                         |
| `git log`                      | Visualizar o histórico de commits                                            | Mostra o histórico de commits do repositório.                            |
| `git log --oneline`            | Ver histórico de commits resumido                                            | Exibe o histórico de commits em uma linha por commit.                    |
| `git merge <branch>`           | Mesclar branches                                                             | Combina as alterações de um branch específico no branch atual.           |
| `git mv <origem> <destino>`    | Renomear ou mover arquivos                                                   | Renomeia ou move arquivos no repositório.                                |
| `git pull`                     | Atualizar o repositório local com alterações remotas                         | Busca e integra as alterações do repositório remoto para o local.        |
| `git push`                     | Enviar commits para o repositório remoto                                     | Envia as alterações locais para o repositório remoto.                    |
| `git push --tags`              | Enviar tags para o repositório remoto                                        | Envia todas as tags locais para o repositório remoto.                    |
| `git rebase <branch>`          | Reaplicar commits em cima de outro branch                                    | Move ou combina uma sequência de commits para um novo commit base.       |
| `git reflog`                   | Verificar o histórico de referências                                         | Mostra o histórico de todas as alterações de referências (branches, HEAD). |
| `git remote -v`                | Listar repositórios remotos                                                  | Mostra os repositórios remotos configurados.                             |
| `git remote add <nome> <url>`  | Adicionar um repositório remoto                                              | Adiciona um novo repositório remoto com um nome específico.              |
| `git remote remove <nome>`     | Remover um repositório remoto                                                | Remove um repositório remoto da lista de repositórios.                   |
| `git reset <arquivo>`          | Remover arquivos da staging area                                             | Retira arquivos da staging area, mas mantém as alterações no diretório.  |
| `git reset --hard`             | Descartar todas as alterações locais                                         | Descarta todas as alterações não commitadas e reverte para o último commit. |
| `git restore --staged <file>`  | Remover todos os aquivos marcados para commit                                | Remove todos os arquivos marcados para realizar o próximo commit         |
| `git revert <commit>`          | Desfazer um commit específico                                                | Cria um novo commit que desfaz as alterações de um commit anterior.      |
| `git status`                   | Verificar o status do repositório                                            | Mostra o estado atual do diretório de trabalho e da staging area.        |
| `git tag <nome>`               | Criar uma tag para marcar um ponto específico no histórico                   | Cria uma tag para marcar um commit específico, geralmente para versões.  |
