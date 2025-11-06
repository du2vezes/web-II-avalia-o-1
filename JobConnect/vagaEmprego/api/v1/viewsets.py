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
    ## um jeito de na tela de cadastro de vagas puxar o id da empresa automatico 
    def perform_create(self, serializer):
        empresa = self.request.user.Empresa
        serializer.save(empresa=empresa)
    def get_permissions(self):
        # ver sem esta logado 
        if self.action in ["list", "retrieve"]:
            permission_classes = [AllowAny]
        else:
            # Para criar, editar ou excluir, precisa estar autenticado.
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]



class CandidatoViewSet(viewsets.ModelViewSet):
    queryset = models.Candidato.objects.filter(is_deleted=False)
    serializer_class = serializers.CandidatoSerializer
    def get_permissions(self):
        if self.action == 'create':
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]




class PerfilViewSet(viewsets.ModelViewSet):
    queryset = models.Perfil.objects.filter(is_deleted=False)
    serializer_class = serializers.PerfilSerializer

    def get_permissions(self):
        if self.action == 'create':
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]
