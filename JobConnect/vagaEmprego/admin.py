from django.contrib import admin

from .models import Empresa, Vaga, Candidato

admin.site.register(Empresa)
admin.site.register(Vaga)
admin.site.register(Candidato)