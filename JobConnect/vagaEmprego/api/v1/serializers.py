from rest_framework import serializers
from vagaEmprego import models

class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Empresa
        fields = ['id', 'nome', 'descricao', 'area_atuacao']

class VagaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vaga
        fields = ['id', 'empresa', 'titulo', 'descricao', 'requisitos','salario']

class CandidatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Candidato
        fields = ['id','nome', 'email', 'curriculo']
