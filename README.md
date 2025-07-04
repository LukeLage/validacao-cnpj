# Apresentação do Trabalho

## Desafio 2 - Validação de CNPJ

A atividade proposta na segunda atividade se refere à uma validação de um CNPJ, o código apresentado nesse repositório pede o CNPJ para o usuário, o valor pode ser o CNPJ com pontuação ou sem, então retorna um console avisando se o CNPJ é válido ou não. 

# Instalações

Para uso deste script, é necessário fazer algumas instalações no console.
Essas instalações são:

'''
npm install @types/node
npm install prompt-sync
npm install -g typescript
'''

# Instruções

O uso do código é simples, no console, execute:
'''
tsc validacao-cnpj.ts
node validacao-cnpj.js
'''

Após esses comandos ao console, é necessário que o usuário digite um CNPJ de 14 números no console e envie, com isso, o código retornará no console se o CNPJ é válido ou não.