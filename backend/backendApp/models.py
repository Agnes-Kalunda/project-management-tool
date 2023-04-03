from django.db import models



#User  : {id, email, password, first_name, last_name, date_joined}
#Project  :  {id, name, description, start_date, end_date, owner(ForeignKey to User) }
#Task   :   {id, name, description, due_date, status(choices: To Do, In progress, Done), project (ForeignKey to Project) }
#Comment   : {id, text, created_at, updated_at, user(ForeignKey to User), task(ForeignKey to Task) }


# Create your models here.
