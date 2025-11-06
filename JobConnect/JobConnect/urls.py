

from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView
from vagaEmprego.views import CustomTokenObtainPairView
from vagaEmprego.views import minha_empresa

from vagaEmprego.api.v1.router import api_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/v1/", include(api_urls)),
    path("api/v1/minha_empresa/", minha_empresa, name="minha_empresa"),
    path("api/token/", CustomTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", CustomTokenObtainPairView.as_view(), name="token_refresh"),

    # DRF Spectacular
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]
