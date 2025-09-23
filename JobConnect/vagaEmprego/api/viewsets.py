from rest_framework import viewsets
from vagaEmprego.api import serializers
from vagaEmprego import models

class EmpresaViewSet(viewsets.ModelViewSet):
    queryset = models.Empresa.objects.filter(is_deleted=False)
    serializer_class = serializers.EmpresaSerializer

class VagaViewSet(viewsets.ModelViewSet):
    queryset = models.Vaga.objects.filter(is_deleted=False)
    serializer_class = serializers.VagaSerializer

class CandidatoViewSet(viewsets.ModelViewSet):
    queryset = models.Candidato.objects.filter(is_deleted=False)
    serializer_class = serializers.CandidatoSerializer