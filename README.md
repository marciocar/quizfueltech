# Tech Quiz - Quiz Interativo Estilo FuelTech

Um quiz interativo de alta performance com design inspirado na estética automotiva da FuelTech Brasil. Sistema completo com timer, pontuação dinâmica e feedback visual em tempo real.

## 🚀 Funcionalidades

### Tela Inicial
- Design high-tech com elementos angulares
- Logo animado com efeito de glow
- Cards informativos sobre o quiz
- Botão CTA com animação de hover sofisticada

### Sistema de Perguntas
- **Timer de 20 segundos** por pergunta com barra de progresso animada
- **4 opções coloridas** (vermelho, azul, amarelo, verde) com símbolos geométricos
- **Feedback visual instantâneo**:
  - Verde para respostas corretas
  - Vermelho para respostas incorretas
- Contador de progresso (pergunta atual / total)
- Transição automática entre perguntas

### Sistema de Pontuação
- **1000 pontos base** por resposta correta
- **Bônus de velocidade**: até 200 pontos extras
  - 10 pontos por segundo restante no timer
- **0 pontos** para respostas erradas ou tempo esgotado

### Tela de Resultado
- Placar final com pontuação total
- **Sistema de classificação**:
  - 80%+ = EXPERT
  - 60-79% = AVANÇADO
  - 40-59% = INTERMEDIÁRIO
  - <40% = INICIANTE
- Estatísticas detalhadas (aproveitamento %)
- Botão para reiniciar o quiz

## 🎨 Design

O projeto utiliza uma estética **automotiva/industrial de alta performance** inspirada na FuelTech Brasil:

### Paleta de Cores
- **Preto** (#000000) - Fundo principal
- **Vermelho vibrante** (#DC2626 a #B91C1C) - Cor de destaque e CTAs
- **Branco** - Textos principais
- **Cinza** - Textos secundários e bordas

### Elementos Visuais
- Formas angulares com transformações skew
- Bordas decorativas vermelhas nos cantos
- Efeitos de glow e blur suaves
- Tipografia bold, uppercase com tracking amplo
- Animações suaves em hover e transições
- Elementos com aspecto técnico/industrial

## 🛠️ Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Type safety
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta do projeto
cd tech-quiz

# Instale as dependências
npm install
```

### Executar em Desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

### Verificar Tipos

```bash
npm run typecheck
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── StartScreen.tsx      # Tela inicial
│   ├── QuestionScreen.tsx   # Tela de perguntas
│   └── ResultScreen.tsx     # Tela de resultados
├── data/
│   └── questions.ts         # Dados das perguntas
├── types/
│   └── quiz.ts             # TypeScript types
├── App.tsx                 # Componente principal
├── main.tsx               # Entry point
└── index.css              # Estilos globais
```

## 🎮 Como Jogar

1. Clique em **"Iniciar Quiz"** na tela inicial
2. Leia a pergunta e selecione uma das 4 opções
3. Responda rápido para ganhar mais pontos!
4. Veja seu resultado final e classificação
5. Clique em **"Jogar Novamente"** para tentar melhorar sua pontuação

## 🔧 Customização

### Adicionar Novas Perguntas

Edite o arquivo `src/data/questions.ts`:

```typescript
export const questions: Question[] = [
  {
    id: 1,
    question: 'Sua pergunta aqui?',
    options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'],
    correctAnswer: 0, // Índice da resposta correta (0-3)
  },
  // Adicione mais perguntas...
];
```

### Ajustar Timer

No arquivo `src/App.tsx`, altere o valor inicial do `timeLeft`:

```typescript
const [quizState, setQuizState] = useState<QuizState>({
  // ...
  timeLeft: 20, // Altere para o tempo desejado em segundos
  // ...
});
```

### Modificar Pontuação

No arquivo `src/App.tsx`, ajuste a lógica de pontuação:

```typescript
if (isCorrect) {
  const timeBonus = Math.floor(quizState.timeLeft * 10); // Altere o multiplicador
  points = 1000 + timeBonus; // Altere a pontuação base
}
```

## 🎯 Características Técnicas

- **Estado gerenciado com React Hooks** (useState, useEffect)
- **TypeScript** para type safety
- **Componentização modular** para fácil manutenção
- **Responsivo** - funciona em desktop e mobile
- **Animações performáticas** com Tailwind CSS
- **Clean Code** - código limpo e bem organizado

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e demonstrativos.

---

**Design inspirado em:** FuelTech Brasil (fueltech.com.br)
