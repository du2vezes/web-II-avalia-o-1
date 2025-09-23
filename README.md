JobConnect
API para um sistema de vagas de emprego, permitindo o cadastro de currículos, empresas e o match entre candidatos e vagas.

#Funcionalidades

Cadastro e gerenciamento de empresas,
Cadastro e gerenciamento de vagas de emprego,
Cadastro e gerenciamento de candidatos e currículos,
Sistema de match entre candidatos e vagas,
API RESTful com endpoints para CRUD completo.

#Tecnologias Utilizadas

Django,
Django REST Framework,
Banco de dados (ex.: PostgreSQL ou MySQL),
Bibliotecas auxiliares (ex.: djangorestframework_simplejwt para autenticação JWT, drf-spectacular para documentação da API).

Instalação

Clone o repositório:

git clone <URL_DO_REPOSITORIO>
cd JobConnect


Crie um ambiente virtual e ative:

python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows


Instale as dependências:

pip install -r requirements.txt


Configure o banco de dados no arquivo settings.py.

Execute as migrations:

python manage.py migrate

Execução

Para iniciar o servidor de desenvolvimento:

python manage.py runserver
