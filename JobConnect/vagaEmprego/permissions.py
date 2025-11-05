from rest_framework.permissions import BasePermission

class IsEmpresaUser(BasePermission):
    def has_permission(self, request, view):
        return request.user.groups.filter(name='Empresa').exists()
    
class IsCandidatoUser(BasePermission):
    def has_permission(self, request, view):
        return request.user.groups.filter(name='Candidato').exists()