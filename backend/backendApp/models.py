from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.contrib.auth.models import User



#User  : {id, email, password, first_name, last_name, date_joined}
#Project  :  {id, name, description, start_date, end_date, owner(ForeignKey to User) }
#Task   :   {id, name, description, due_date, status(choices: To Do, In progress, Done), project (ForeignKey to Project) }
#Comment   : {id, text, created_at, updated_at, user(ForeignKey to User), task(ForeignKey to Task) }


# Create your models here.

class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    assigned_to = models.ForeignKey(User, on_delete=models.CASCADE)
    created_by = models.ForeignKey(User, related_name='created_tasks', on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    completed = models.BooleanField(default=False)


