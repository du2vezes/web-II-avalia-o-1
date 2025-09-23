from rest_framework import routers
from vagaEmprego.api import EmpresaViewSet, VagaViewSet, CandidatoViewSet

router = routers.DefaultRouter()

router.register("empresas", EmpresaViewSet)
router.register("vagas", VagaViewSet)
router.register("candidatos", CandidatoViewSet)