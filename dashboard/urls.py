from django.contrib import admin
from django.urls import path,include
from . import views

# _appname_="log"
urlpatterns = [
	
	path('',views.dashboard,name="dashboard"),
	
]




