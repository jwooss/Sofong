from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('Sofong_apps/', include('Sofong_apps.urls')),
    path('admin/', admin.site.urls)
]
