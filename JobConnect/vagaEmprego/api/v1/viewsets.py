from rest_framework import viewsets
from vagaEmprego.api.v1 import serializers
from vagaEmprego import models
from rest_framework.permissions import IsAuthenticated, AllowAny

class EmpresaViewSet(viewsets.ModelViewSet):
    queryset = models.Empresa.objects.filter(is_deleted=False)
    serializer_class = serializers.EmpresaSerializer
    permission_classes = [IsAuthenticated]
    def get_permissions(self):
        if self.action == 'create':
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]

class VagaViewSet(viewsets.ModelViewSet):
    queryset = models.Vaga.objects.filter(is_deleted=False)
    serializer_class = serializers.VagaSerializer
    permission_classes = [IsAuthenticated]

class CandidatoViewSet(viewsets.ModelViewSet):
    queryset = models.Candidato.objects.filter(is_deleted=False)
    serializer_class = serializers.CandidatoSerializer
    permission_classes = [IsAuthenticated]  


class PerfilViewSet(viewsets.ModelViewSet):
    queryset = models.Perfil.objects.filter(is_deleted=False)
    serializer_class = serializers.PerfilSerializer

    def get_permissions(self):
        if self.action == 'create':
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]
