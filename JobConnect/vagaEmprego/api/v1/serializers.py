from rest_framework import serializers
from vagaEmprego import models

class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Empresa
        fields = "__all__"

class VagaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vaga
        fields = "__all__"

class CandidatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Candidato
        fields = "__all__"
