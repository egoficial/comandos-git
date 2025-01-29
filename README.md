# comandos-git
Lista dos principais comandos do GIT.
---

| Comando                | Uso Principal                                                                 | O que Faz                                                                 |
|------------------------|-------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| `git init`             | Inicializar um repositório Git                                               | Cria um novo repositório Git no diretório atual.                         |
| `git clone <url>`      | Clonar um repositório remoto                                                 | Copia um repositório remoto para o diretório local.                      |
| `git add <arquivo>`    | Adicionar arquivos ao staging area                                           | Prepara as alterações para o próximo commit.                             |
| `git commit -m "msg"`  | Criar um commit com as alterações                                            | Salva as alterações no repositório com uma mensagem descritiva.          |
| `git status`           | Verificar o status do repositório                                            | Mostra o estado atual do diretório de trabalho e da staging area.        |
| `git push`             | Enviar commits para o repositório remoto                                     | Envia as alterações locais para o repositório remoto.                    |
| `git pull`             | Atualizar o repositório local com alterações remotas                         | Busca e integra as alterações do repositório remoto para o local.        |
| `git branch`           | Listar, criar ou deletar branches                                            | Lista todos os branches ou cria/deleta um branch específico.             |
| `git checkout <branch>`| Mudar para um branch específico                                              | Altera o branch atual para o branch especificado.                        |
| `git merge <branch>`   | Mesclar branches                                                             | Combina as alterações de um branch específico no branch atual.           |
| `git branch -d <branch>`| Deletar um branch local                                                     | Remove um branch local, desde que ele já tenha sido mesclado.            |
| `git branch -D <branch>`| Forçar a deleção de um branch local                                         | Remove um branch local, mesmo que não tenha sido mesclado.               |
| `git fetch`            | Buscar alterações do repositório remoto                                      | Atualiza as referências do repositório local com as do remoto.           |
| `git log`              | Visualizar o histórico de commits                                            | Mostra o histórico de commits do repositório.                            |
| `git reset <arquivo>`  | Remover arquivos da staging area                                             | Retira arquivos da staging area, mas mantém as alterações no diretório.  |
| `git reset --hard`     | Descartar todas as alterações locais                                         | Descarta todas as alterações não commitadas e reverte para o último commit. |
| `git stash`            | Guardar alterações temporariamente                                           | Armazena alterações não commitadas para uso posterior.                   |
| `git stash pop`        | Aplicar alterações guardadas                                                 | Aplica as alterações guardadas mais recentes e as remove da stash.       |
| `git tag <nome>`       | Criar uma tag para marcar um ponto específico no histórico                   | Cria uma tag para marcar um commit específico, geralmente para versões.  |
| `git remote -v`        | Listar repositórios remotos                                                  | Mostra os repositórios remotos configurados.                             |
| `git diff`             | Verificar diferenças entre arquivos                                          | Mostra as diferenças entre arquivos no diretório de trabalho e staging.  |
| `git rebase <branch>`  | Reaplicar commits em cima de outro branch                                    | Move ou combina uma sequência de commits para um novo commit base.       |
| `git cherry-pick <commit>`| Aplicar um commit específico de outro branch                              | Aplica as alterações de um commit específico no branch atual.            |
| `git rm <arquivo>`     | Remover arquivos do repositório                                              | Remove arquivos do repositório e do diretório de trabalho.               |
| `git mv <origem> <destino>`| Renomear ou mover arquivos                                              | Renomeia ou move arquivos no repositório.                                |
| `git config`           | Configurar opções do Git                                                     | Define configurações do Git, como nome de usuário e email.               |
| `git show <commit>`    | Mostrar detalhes de um commit específico                                     | Exibe informações detalhadas sobre um commit específico.                 |
| `git revert <commit>`  | Desfazer um commit específico                                                | Cria um novo commit que desfaz as alterações de um commit anterior.      |
| `git clean -f`         | Remover arquivos não rastreados                                              | Remove arquivos não rastreados do diretório de trabalho.                 |
| `git reflog`           | Verificar o histórico de referências                                         | Mostra o histórico de todas as alterações de referências (branches, HEAD). |