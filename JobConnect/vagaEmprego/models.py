from django.db import models

class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False) 

    class Meta:
        abstract = True

class Empresa(BaseModel):
    nome = models.CharField(max_length=200)
    descricao = models.TextField()
    area_atuacao = models.CharField(max_length=100)

class Vaga(BaseModel):
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE, related_name="vagas")
    titulo = models.CharField(max_length=200)
    descricao = models.TextField()
    requisitos = models.TextField()
    salario = models.DecimalField(max_digits=10, decimal_places=2)
    

class Candidato(BaseModel):
    nome = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    curriculo = models.TextField()
