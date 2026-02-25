# Entendendo Arquitetura em Camadas no Spring Boot

Um guia visual e interativo para entender a arquitetura em camadas no Spring Boot.

Este projeto foi criado com foco educacional, demonstrando de forma clara e organizada como estruturar uma aplicação backend utilizando separação de responsabilidades.

[Acesse a versão hospedada via GitHub Pages](https://mescola.github.io/spring-boot-architecture-guide/)

---

## Objetivo

Explicar de maneira didática:

- Arquitetura em camadas
- Fluxo de uma requisição HTTP
- Estrutura de pacotes
- Responsabilidade de cada camada
- Componentes estruturais da aplicação

---

## Arquitetura em Camadas

A aplicação segue o modelo tradicional:

Controller → Service → Repository → Database

Cada camada possui uma responsabilidade bem definida:

- **Controller** → Recebe requisições HTTP
- **Service** → Contém regras de negócio
- **Repository** → Acesso ao banco de dados
- **DTO / Entity** → Transporte e representação de dados

---

## Fluxo Interativo

O projeto inclui:

- Explicação dinâmica ao clicar em cada camada
- Exemplo de código exibido ao lado
- Destaque visual da camada ativa
- Dark / Light Mode
- Animação scroll reveal

---

## Estrutura do Projeto

spring-boot-architecture-guide
│
├── index.html
├── css/
│ └── style.css
├── js/
│ └── script.js
└── README.md

---

## Componentes Estruturais

Além das camadas principais, o projeto explica:

- **Config** → Configurações globais (CORS, segurança, beans)
- **Exception** → Tratamento centralizado de erros

---
# Como Executar

´´´
git clone ... 

´´´

Projeto criado com foco em aprendizado e organização arquitetura

