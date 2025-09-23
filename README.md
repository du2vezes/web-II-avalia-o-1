🚀 JobConnect

API para um sistema de vagas de emprego, permitindo o cadastro de empresas, candidatos e vagas, além de um sistema de match inteligente entre candidatos e oportunidades.

📌 Funcionalidades

✅ Cadastro e gerenciamento de empresas
✅ Cadastro e gerenciamento de candidatos
✅ Cadastro e gerenciamento de vagas
✅ Sistema de match entre candidatos e vagas
✅ API RESTful documentada com Swagger / Redoc

🛠️ Tecnologias Utilizadas

Python 3.10+

Django

Django REST Framework

PostgreSQL

JWT Authentication

drf-spectacular
 para documentação da API

⚙️ Instalação e Configuração
1. Clone o repositório
git clone <URL_DO_REPOSITORIO>
cd JobConnect

2. Crie o ambiente virtual
python -m venv venv
venv\Scripts\activate   # Windows
source venv/bin/activate   # Linux/Mac

3. Instale as dependências
pip install -r requirements.txt

4. Configure o banco de dados no settings.py


5. Execute as migrações
python manage.py migrate

6. Rode o servidor
python manage.py runserver
