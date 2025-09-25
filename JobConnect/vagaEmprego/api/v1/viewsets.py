from rest_framework import viewsets
from vagaEmprego.api.v1 import serializers
from vagaEmprego import models
from rest_framework.permissions import IsAuthenticated

class EmpresaViewSet(viewsets.ModelViewSet):
    queryset = models.Empresa.objects.filter(is_deleted=False)
    serializer_class = serializers.EmpresaSerializer
    permission_classes = [IsAuthenticated]

class VagaViewSet(viewsets.ModelViewSet):
    queryset = models.Vaga.objects.filter(is_deleted=False)
    serializer_class = serializers.VagaSerializer
    permission_classes = [IsAuthenticated]

class CandidatoViewSet(viewsets.ModelViewSet):
    queryset = models.Candidato.objects.filter(is_deleted=False)
    serializer_class = serializers.CandidatoSerializer
    permission_classes = [IsAuthenticated]  