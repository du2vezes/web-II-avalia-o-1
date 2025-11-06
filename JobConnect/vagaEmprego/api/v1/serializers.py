from rest_framework import serializers
from vagaEmprego import models
from django.contrib.auth.models import User, Group
from django.db import transaction

class EmpresaSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    email = serializers.EmailField(write_only=True)
    username = serializers.CharField(write_only=True)

    class Meta:
        model = models.Empresa
        fields = ['id', 'nome', 'descricao', 'area_atuacao', 'username', 'email', 'password']

    def create(self, validated_data):
        # Extrair dados do usuário
        username = validated_data.pop('username')
        email = validated_data.pop('email')
        password = validated_data.pop('password')

        with transaction.atomic():
            # Criar o usuário
            user = User.objects.create_user(
                username=username,
                email=email,
                password=password
            )
            
            
            
            grupo_empresa = Group.objects.get(name='Empresa')  
            user.groups.add(grupo_empresa)  

            # Criar a empresa associada ao usuário (dentro da transação)
            empresa = models.Empresa.objects.create(
                user=user,
                **validated_data
            )

            return empresa


class CandidatoSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    email = serializers.EmailField(write_only=True)
    username = serializers.CharField(write_only=True)

    class Meta:
        model = models.Candidato
        fields = ['id', 'nome', 'curriculo', 'username', 'email', 'password']

    def create(self, validated_data):
        # Extrair dados do usuário
        username = validated_data.pop('username')
        email = validated_data.pop('email')
        password = validated_data.pop('password')

        with transaction.atomic():
            # Criar o usuário Django
            user = User.objects.create_user(
                username=username,
                email=email,
                password=password
            )

            # Adicionar ao grupo 'Candidato'
            grupo_candidato = Group.objects.get(name='Candidato')
            user.groups.add(grupo_candidato)

            # Criar o candidato associado ao user
            candidato = models.Candidato.objects.create(
                user=user,
                **validated_data
            )

        return candidato


class VagaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vaga
        fields = ['id','titulo', 'descricao', 'requisitos','salario']


class PerfilSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Perfil
        fields = '__all__'