
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import Empresa
from .api.v1.serializers import EmpresaSerializer
from rest_framework.response import Response

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        data["user"] = {
            "id": self.user.id,
            "username": self.user.username,
            "email": self.user.email,
            "groups": [group.name for group in self.user.groups.all()],
        }
        return data


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def minha_empresa(request):
    empresa = Empresa.objects.filter(user=request.user).first()
    if not empresa:
        return Response({"error": "Empresa não encontrada"}, status=404)
    serializer = EmpresaSerializer(empresa)
    return Response(serializer.data)
    
