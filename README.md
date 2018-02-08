# Projeto-controle

Projeto Controle é composto de dois programas uma API Rest feita em Java com SpringRest utilizando
o banco de dados MySQL utilizando o ORM Hibernate e o controle de dependencias Maven o segundo
programa é uma aplicação web feito con Angular, a aplicação tem como objetivo fazer o cadastro de pessoa
no banco de dados e o controle do mesmo.

#Requirementos

Windows / Linux / macOS

ApiRest

Maven, Java (version 7 ou maior), container(nesse programa foi usado Tomcat) e MySQL

frontend

Node.js (version 8.3.0 ou maior) e Angular (version 4 ou maior).


#Como Iniciar

Instalação

Rode em seu console

git clone https://github.com/jorliano/projeto-controle.git

Instalação dependencias ApiRest:

Rode Maven Install

Configuração ApiRest

abra o arquivo src/main/java/hibernate.cfg.xml
nesse arquivo você configura a conexão com o banco de dados
apos configurar os dados para a conexão com o banco crie uma database
com o nome que você especificou.

Rode o arquivo .war gerado pelo maven em seu container

Instalação dependencias frontend:

cd frontend

npm install

Configuração frontend

abra o arquivo src/app/service/pessoa.service.ts

mude a variavel url para apontar para o ApiRest

Rode em seu console

ng serve --open
