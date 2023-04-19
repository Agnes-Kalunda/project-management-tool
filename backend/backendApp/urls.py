from django.urls import path
from . import views

urlpatterns = [
    path('api/projects/', views.project_list),
    path('api/projects/<int:pk>/', views.project_detail),
    path('api/tasks/', views.task_list),
    path('api/tasks/<int:pk>/', views.task_detail),
    path('api/comments/', views.comment_list),
    path('api/comments/<int:pk>/', views.comment_detail),
]
