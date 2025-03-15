# comandos-git
Lista dos principais comandos do GIT (Ordem Alfabética).

| Comando                           | Uso Principal                                                              | O que Faz                                                                 |
|-----------------------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------|
| `git add <arquivo>`               | Adicionar arquivos ao staging area                                        | Prepara as alterações para o próximo commit.                             |
| `git add -p`                      | Adicionar partes específicas de arquivos                                  | Permite selecionar interativamente quais mudanças adicionar ao staging.   |
| `git archive`                     | Criar um arquivo compactado de um repositório                              | Cria um arquivo .zip ou .tar com o conteúdo de um commit ou branch.      |
| `git am`                          | Aplicar patches em formato de email                                        | Aplica patches recebidos por email ou arquivo.                           |
| `git apply`                       | Aplicar uma diferença de patch                                            | Aplica um patch (diferença entre arquivos) em arquivos não versionados.  |
| `git blame <arquivo>`             | Verificar quem modificou cada linha de um arquivo                         | Mostra o autor e o commit de cada linha de um arquivo.                   |
| `git bisect`                      | Encontrar o commit que introduziu um bug                                  | Realiza uma busca binária no histórico para identificar um commit problemático. |
| `git bisect start`                | Iniciar uma busca binária para encontrar o commit problemático            | Inicia o processo de busca binária para detectar o commit que causou um problema. |
| `git branch`                      | Listar, criar ou deletar branches                                         | Lista todos os branches ou cria/deleta um branch específico.             |
| `git branch -D <branch>`          | Forçar a deleção de um branch local                                        | Remove um branch local, mesmo que não tenha sido mesclado.               |
| `git branch -d <branch>`          | Deletar um branch local                                                   | Remove um branch local, desde que ele já tenha sido mesclado.            |
| `git checkout -`                  | Alternar para o branch anterior                                           | Muda rapidamente para o último branch em que você estava.                |
| `git cherry-pick <commit>`        | Aplicar um commit específico de outro branch                             | Aplica as alterações de um commit específico no branch atual.            |
| `git clean -f`                    | Remover arquivos não rastreados                                           | Remove arquivos não rastreados do diretório de trabalho.                 |
| `git clean -fd`                   | Remover arquivos não rastreados e diretórios não versionados              | Remove arquivos não rastreados e diretórios não versionados (recursivo). |
| `git clone <url>`                 | Clonar um repositório remoto                                              | Copia um repositório remoto para o diretório local.                      |
| `git commit -m "msg"`             | Criar um commit com as alterações                                         | Salva as alterações no repositório com uma mensagem descritiva.          |
| `git commit --amend`              | Modificar o último commit                                                 | Permite alterar a mensagem do último commit ou adicionar mais alterações. |
| `git config --global user.email`  | Configurar o email do usuário                                             | Define o email de usuário para todos os repositórios locais.              |
| `git config --global user.name`   | Configurar o nome de usuário                                              | Define o nome de usuário para todos os repositórios locais.              |
| `git diff`                        | Verificar diferenças entre arquivos                                       | Mostra as diferenças entre arquivos no diretório de trabalho e staging.  |
| `git diff --cached`               | Verificar diferenças entre o staging area e o repositório                 | Mostra as diferenças entre o que está no repositório e o que está no staging. |
| `git fetch`                       | Buscar alterações do repositório remoto                                 | Atualiza as referências do repositório local com as do remoto.           |
| `git fetch --all`                 | Buscar todas as referências de todos os remotos                           | Atualiza todas as referências de todos os remotos configurados.          |
| `git gc`                          | Realizar a coleta de lixo no repositório                                  | Limpa o repositório removendo arquivos desnecessários e otimizando o repositório. |
| `git grep`                        | Buscar por um padrão em arquivos versionados                              | Permite procurar por uma string ou padrão dentro de arquivos do repositório. |
| `git init`                        | Inicializar um novo repositório local                                     | Cria um novo repositório Git vazio no diretório atual.                   |
| `git log`                         | Visualizar o histórico de commits                                         | Mostra o histórico de commits do repositório.                            |
| `git log --graph`                 | Visualizar histórico de commits em formato de gráfico                     | Mostra o histórico de commits com uma representação gráfica dos branches. |
| `git log --oneline`               | Exibir os commits de forma compacta                                        | Mostra o histórico de commits em uma linha por commit.                   |
| `git merge <branch>`              | Mesclar branches                                                          | Combina as alterações de um branch específico no branch atual.           |
| `git merge --abort`               | Abortar um merge em andamento                                             | Cancela um merge que está em conflito e retorna ao estado anterior.      |
| `git merge --no-ff <branch>`      | Forçar a criação de um commit de merge, mesmo quando não é necessário      | Garante que o merge crie um commit mesmo que o histórico permita um merge fast-forward. |
| `git merge --squash <branch>`     | Mesclar as alterações de um branch em um único commit                    | Junta as alterações de um branch em um único commit para ser aplicado no branch atual. |
| `git pull`                        | Atualizar o repositório local com alterações remotas                      | Busca e integra as alterações do repositório remoto para o local.        |
| `git pull --rebase`               | Rebase em vez de merge ao puxar as mudanças                              | Faz o rebase ao invés de merge ao integrar mudanças do repositório remoto. |
| `git push`                        | Enviar commits para o repositório remoto                                  | Envia as alterações locais para o repositório remoto.                    |
| `git push --force`                | Forçar o envio de commits para o repositório remoto                      | Envia as alterações locais para o repositório remoto, sobrescrevendo qualquer conflito. |
| `git push --set-upstream <branch>` | Definir o branch remoto padrão para o branch local                       | Define o branch remoto padrão ao qual o branch local está associado.    |
| `git push origin --delete <branch>`| Deletar um branch remoto                                                   | Remove um branch do repositório remoto.                                  |
| `git push --tags`                 | Enviar tags para o repositório remoto                                     | Envia todas as tags locais para o repositório remoto.                    |
| `git rebase <branch>`             | Reaplicar commits em cima de outro branch                                 | Move ou combina uma sequência de commits para um novo commit base.       |
| `git rebase -i HEAD~n`            | Realizar rebase interativo dos últimos n commits                          | Permite reordenar, combinar ou modificar os últimos n commits.           |
| `git reflog`                      | Exibir o histórico de referências de commits                             | Mostra um histórico das ações realizadas no repositório, útil para recuperação de commits. |
| `git reflog expire --expire=now --all` | Expirar o reflog                                                            | Remove entradas antigas do reflog para liberar espaço.                  |
| `git remote`                      | Gerenciar repositórios remotos                                             | Lista os repositórios remotos configurados no repositório local.         |
| `git remote add <nome> <url>`     | Adicionar um repositório remoto                                           | Adiciona um novo repositório remoto ao repositório local.                 |
| `git remote remove <nome>`        | Remover um repositório remoto                                             | Remove um repositório remoto do repositório local.                        |
| `git restore --staged <arquivo>`  | Remover arquivos do staging area                                          | Remove arquivos do staging area mantendo as alterações no working directory. |
| `git revert <commit>`             | Desfazer um commit específico                                             | Cria um novo commit que desfaz as alterações de um commit anterior.      |
| `git reset <arquivo>`             | Remover arquivos da staging area                                          | Retira arquivos da staging area, mas mantém as alterações no diretório.  |
| `git reset --hard`                | Descartar todas as alterações locais                                      | Descarta todas as alterações não commitadas e reverte para o último commit. |
| `git reset --soft <commit>`       | Reset para um commit, mantendo as alterações na área de staging          | Move o HEAD para o commit especificado, mas mantém as alterações no staging. |
| `git rm <arquivo>`                | Remover arquivos do repositório                                           | Remove um arquivo do diretório de trabalho e do staging area.            |
| `git stash`                       | Guardar alterações temporariamente                                       | Armazena alterações não commitadas para uso posterior.                   |
| `git stash list`                  | Listar as alterações armazenadas na stash                                 | Exibe a lista das alterações que estão armazenadas na stash.             |
| `git stash pop`                   | Aplicar alterações guardadas e removê-las da stash                      | Aplica as alterações guardadas mais recentes e as remove da stash.       |
| `git stash save`                  | Salvar as alterações não commitadas na stash                             | Guarda as alterações no repositório na stash com uma descrição.          |
| `git status`                      | Verificar o status do repositório                                         | Mostra o estado atual do diretório de trabalho e da staging area.        |
| `git status -s`                   | Verificar status do repositório em formato curto                          | Mostra o status do repositório em formato compacto.                      |
| `git submodule add <url> <caminho>`| Adicionar um submódulo ao repositório                                     | Adiciona um repositório como submódulo em um diretório específico.       |
| `git submodule init`              | Inicializar submódulos                                                   | Inicializa os submódulos configurados em um repositório com um commit.   |
| `git submodule status`            | Verificar o status dos submódulos                                         | Exibe o status atual dos submódulos no repositório.                      |
| `git submodule update`            | Atualizar submódulos                                                     | Atualiza os submódulos para o commit mais recente referenciado no repositório. |
| `git switch <branch>`             | Alternar para um branch específico                                        | Muda para um branch específico (alternativa moderna ao checkout).         |
| `git tag <nome>`                  | Criar uma tag para marcar um ponto específico no histórico                | Cria uma tag para marcar um commit específico, geralmente para versões.  |
| `git tag -d <nome>`               | Deletar uma tag local                                                     | Remove uma tag local do repositório.                                     |
| `git worktree add <caminho>`      | Adicionar uma nova árvore de trabalho                                     | Cria um novo diretório de trabalho vinculado ao repositório.             |