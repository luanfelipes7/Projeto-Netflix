# Netflix Clone 2.0 - Imersão Front-End

Este é um projeto de clone da interface da Netflix, desenvolvido como parte de um estudo de Imersão Front-End. O projeto foca em criar uma experiência de usuário fluida, responsiva e personalizada, simulando as principais funcionalidades de uma plataforma de streaming.

## 🚀 Funcionalidades

- **Seleção de Perfis:** Interface inicial personalizada com múltiplos perfis (Jessica, Felipe, Luan, "Sei la").
- **Catálogo Personalizado:** Cada perfil possui sua própria seleção de categorias e títulos, simulando algoritmos de recomendação.
- **Interface Responsiva:**
  - **Desktop:** Exibe 4 itens por linha.
  - **Tablet:** Ajusta para 3 itens por linha.
  - **Mobile:** Otimizado para 2 itens por linha.
- **Hover Interativo:** Ao passar o mouse sobre um card, um trailer do YouTube é carregado automaticamente com efeitos de zoom e detalhes do título.
- **Modo Claro/Escuro:** Sistema de troca de tema preservado na tela de seleção de perfis.
- **Gerenciamento de Perfis:** Opção visual para gerenciar usuários na tela inicial.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica do projeto.
- **CSS3:** Estilização avançada, incluindo CSS Grid, Flexbox e animações complexas.
- **JavaScript (ES6+):** 
  - Uso de **Módulos JS** para organização de componentes.
  - Manipulação dinâmica do DOM.
  - **LocalStorage** para persistência do perfil ativo e preferências de tema.
- **Font Awesome:** Ícones para a interface.
- **Google Fonts:** Tipografia Roboto para melhor legibilidade.

## 📁 Estrutura do Projeto

```text
├── index.html          # Tela de seleção de perfis (Home)
├── css/style.css       # Estilos globais e da tela inicial
├── js/script.js        # Lógica de perfis e troca de tema
├── assets/             # Imagens de perfil e recursos locais
└── catalogo/
    ├── catalogo.html   # Tela principal do catálogo
    ├── catalogo.css    # Estilos específicos do grid e cards
    └── js/
        ├── data.js     # Base de dados dos perfis e conteúdos
        ├── main.js     # Orquestrador do carregamento do catálogo
        ├── utils.js    # Funções utilitárias (IDs do YouTube, etc)
        └── components/ # Componentes reutilizáveis (Card e Carousel)
```

## 💻 Como Executar

1. Clone o repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em seu navegador de preferência.
   - *Dica:* Utilize a extensão **Live Server** no VS Code para uma melhor experiência de desenvolvimento.

---
Projeto desenvolvido para fins educacionais.
