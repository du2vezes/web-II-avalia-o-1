from rest_framework import routers
from vagaEmprego.api.v1.viewsets import EmpresaViewSet, VagaViewSet, CandidatoViewSet

router = routers.DefaultRouter()

router.register("empresas", EmpresaViewSet)
router.register("vagas", VagaViewSet)
router.register("candidatos", CandidatoViewSet)

api_urls = router.urls