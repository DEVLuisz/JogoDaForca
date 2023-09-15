# JogoDaForca

Este código JavaScript é um jogo de adivinhação de palavras. O jogo inclui as seguintes funcionalidades:

1. Seleção de Elementos HTML:
   - Vários elementos da página HTML são selecionados por meio do Document Object Model (DOM), incluindo elementos de exibição da palavra, caixa de letras erradas, botão de jogar, elementos de notificação, mensagem de vitória, revelação da palavra, dica de tema, elementos de partes do corpo e contador de acertos.

2. Temas e Palavras:
   - O código define uma estrutura de temas e palavras relacionadas a esses temas em um objeto chamado `wordThemes`.

3. Funções para Seleção Aleatória:
   - Há duas funções, `selectRandomTheme()` e `selectRandomWord()`, para selecionar aleatoriamente um tema e uma palavra do objeto `wordThemes`.

4. Inicialização do Jogo:
   - O jogo é inicializado ao selecionar aleatoriamente um tema e uma palavra, que são exibidos na página. O número de letras da palavra e o tema também são exibidos.

5. Variáveis e Listas:
   - O código utiliza várias variáveis e listas para controlar o estado do jogo, incluindo letras corretamente adivinhadas, letras erradas, palavras usadas e o número de acertos.

6. Funções para Exibir a Palavra:
   - Duas funções, `displayWord()` e `updateWrongLettersBox()`, são responsáveis por exibir a palavra e as letras erradas na tela.

7. Notificação de Vitória ou Derrota:
   - O jogo verifica se o jogador venceu ou perdeu e exibe uma mensagem apropriada. Se o jogador vencer, o número de acertos é incrementado.

8. Função de Notificação:
   - Uma função chamada `showNotification()` exibe uma notificação temporária na tela sempre que uma letra repetida é pressionada.

9. Eventos do Teclado:
   - O jogo responde aos eventos de teclado, permitindo ao jogador adivinhar as letras. Se uma letra correta for adivinhada, ela é exibida na palavra. Se uma letra incorreta for adivinhada, ela é mostrada nas letras erradas. O jogo também verifica se o jogador venceu ou perdeu após cada palpite.

10. Evento de Clique no Botão "Jogar":
   - Quando o jogador clica no botão "Jogar", o jogo é reiniciado, um novo tema e palavra são selecionados aleatoriamente, e a interface é atualizada.

11. Inicialização Inicial do Jogo:
   - O jogo é inicializado pela primeira vez chamando `displayWord()` para exibir a palavra na página.

