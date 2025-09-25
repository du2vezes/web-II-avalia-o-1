

from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from vagaEmprego.api.v1.router import api_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/v1/", include(api_urls)),
    path("api/v1/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/v1/docs/", SpectacularSwaggerView.as_view(url_name="docschema"), name="swagger-ui"),
    path("api/v1/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/v1/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path('api/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),]
