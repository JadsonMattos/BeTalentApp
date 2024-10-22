# Mobile React Native e Typescript

## **Descrição:**

Este projeto é um aplicativo React Native e Typescript que permite gerenciar funcionários de uma empresa. A estrutura perpassa a visualização de uma tabela com dados vindos de uma API simulada. Ele possui as seguintes funcionalidades:

<div style="display: flex; justify-content: space-around;">
  <h1>1
  <img src="./assets/BeTalentApp-ezgif.com-video-to-gif-converter.gif" alt="GIF 1">
  <h1>2
  <img src="./assets/BeTalentApp-ezgif.com-video-to-gif-converter%20(1).gif" alt="GIF 2">
</div>

* **Listagem de funcionários:** provindas com fetch, async, await de uma API simulada.
* **Pesquisa de funcionários:** imput de pesquisa que permite filtrar dados por cargo, nome e telefone.
* **Detalhes de cada funcionário:** informações colapsadas de cada funcionário.
* **Screen inicial:** animação com a logo
* **DarkMode:** permite mudar entre claro e escuro
* **Modal de notificação:** ícone de notificação que exibe mensagens importantes
* **Estilização**
* **Testes Unitários Jest**

### **Tecnologias:**

* React Native
* TypeScript
* Yarn
* React Navigation
* Rest API
* Expo
* Node

### **Instalação:**

1. Clone este repositório

    ```bash
   git clone https://github.com/JadsonMattos/BeTalentApp.git
   ```

2. Navegue ao diretório do projeto

    ```bash
    cd BeTalentApp
    ```

3. Instale as dependências

    ```bash
    yarn install
    ```

4. Rode a API

    ```bash
    cd ./src/api/
    json-server --watch database.json
    ```

5. Abra outro terminal e execute o projeto

    ```bash
    yarn start
    ```

6. Use um simulador ou escaneio o QR codecomo aplicativo do Expo Go.

7. **IMPORTANTE: você deve colocar o endereço da sua rede local em ./src/services/employeeApi. EXEMPLO(<http://000.000.0.00:3000/employees>)**

### Funcionalidade Futuras

* Integração com banco de dados para persistir dados.
* Notificações push para alertar o usuário sobre novas funcionalidades.
* Filtros e buscas mais avançadas.

### Testes

* Os Testes são escritos utilizando Jest e React Native Testing Library

    ```bash
    yarn jest
    ```
